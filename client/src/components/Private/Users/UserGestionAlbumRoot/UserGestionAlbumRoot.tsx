import css from "./AllUserSystemeRoot.module.css";
import style from "../../../StyleRootComponent.module.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import DataUserType from "../../../../types/dataUser.type";
import fetchAPI from "../../../../utils/fetchAPI.utils";

function UserGestionAlbumRoot() {
    /** Vérrouillage de la page accessible uniquement aux utilisateurs */
    useLockedPage("user");
    const navigate = useNavigate();

    /** Liste des albums récupérés depuis l’API */
    const [albums, setAlbums] = useState<DataUserType[]>([]);
    /** Gestion du chargement */
    const [loading, setLoading] = useState(true);
    /** Gestion des erreurs éventuelles */
    const [error, setError] = useState<string | null>(null);

    /** Valeur de recherche saisie dans la barre de recherche */
    const [query, setQuery] = useState("");

    /** Récupération de tous les utilisateurs à l’affichage de la page */
    useEffect(() => {
        async function fetchUsers() {
            const { error, data } = await fetchAPI("GET", "/user");

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            /** L’API renvoie les données dans `data.data` */
            if (Array.isArray(data?.data)) {
                setAlbums(data.data as DataUserType[]);
            }

            setLoading(false);
        }

        fetchUsers();
    }, []);

    /** Normalisation de texte :
     * - met en minuscule
     * - supprime les accents
     * pour rendre la recherche plus souple
     */
    const normalize = (s: string) =>
        s
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "");

    /** Filtrage des utilisateurs en fonction de la recherche */
    const filteredAlbums = useMemo(() => {
        const q = query.trim();
        if (!q) return albums;

        const qNorm = normalize(q);
        const qNum = Number(q);
        const isNumeric = !Number.isNaN(qNum);

        return albums.filter((u) => {
            /** Si la recherche est un nombre, on compare avec l’ID exact */
            if (isNumeric && u.id === qNum) return true;

            /** Comparaison sur prénom, nom et email */
            const first = normalize(u.firstname || "");
            const last = normalize(u.lastname || "");
            const mail = normalize(u.email || "");

            return first.includes(qNorm) || last.includes(qNorm) || mail.includes(qNorm);
        });
    }, [albums, query]);

    /** État de chargement */
    if (loading) return <p>Chargement des albums...</p>;
    /** Erreur lors de la récupération */
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div className={style.ContainerRootRacine}>
            {/* Titre principal */}
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Gestion des utilisateurs</h1>
            </header>

            {/* Barre de recherche */}
            <div className={css.SearchBarRow}>
                <input
                    type="text"
                    className={css.SearchInput}
                    placeholder="Rechercher par ID, prénom, nom ou email…"
                    aria-label="Rechercher un utilisateur"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {/* Bouton pour effacer la recherche */}
                {query && (
                    <button
                        type="button"
                        className={css.ClearButton}
                        onClick={() => setQuery("")}
                        aria-label="Effacer la recherche"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Liste des albums sous forme de cards */}
            <div className={css.cardsContainer}>
                {filteredAlbums.length === 0 ? (
                    /** Aucun album ne correspond à la recherche */
                    <p className={css.EmptyState}>Aucun album ne correspond à “{query}”.</p>
                ) : (
                    filteredAlbums.map((album) => (
                        <div key={album.id} className={css.card}>
                            {/* Données principales album */}
                            <div className={css.ContainerDataUser}>
                                <p className={css.label}>
                                    <span className={style.SpanBold}>ID :</span> {album.id}
                                </p>
                                <p className={css.label}>
                                    <span className={style.SpanBold}>Titre :</span> {album.title}
                                </p>
                                <p className={css.label}>
                                    <span className={style.SpanBold}>Nom :</span> {album.lastname}
                                </p>
                                <p className={css.label} style={{ fontSize: "0.875rem" }}>
                                    {album.email}
                                </p>
                            </div>

                            {/* Rôle + action */}
                            <div className={css.ContainerRoleAction}>
                                <p className={css.label}>{album.role}</p>
                                <button
                                    className={css.ButtonEdit}
                                    aria-label={`Modifier l'album ${album.title}`}
                                    onClick={() => navigate(`/admin/all-user-systeme/edit-album/${album.id}`)}
                                >
                                    Modifier
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default UserGestionAlbumRoot;
