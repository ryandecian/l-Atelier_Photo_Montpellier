import css from "./AllUserSystemeRoot.module.css";
import style from "../../../StyleRootComponent.module.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import DataUserType from "../../../../types/dataUser.type";
import fetchAPI from "../../../../utils/fetchAPI.utils";

function AllUserSystemeRoot() {
    /** Vérrouillage de la page accessible uniquement aux administrateurs */
    useLockedPage("admin");
    const navigate = useNavigate();

    /** Liste des utilisateurs récupérés depuis l’API */
    const [users, setUsers] = useState<DataUserType[]>([]);
    /** Gestion du chargement */
    const [loading, setLoading] = useState(true);
    /** Gestion des erreurs éventuelles */
    const [error, setError] = useState<string | null>(null);

    /** Valeur de recherche saisie dans la barre de recherche */
    const [query, setQuery] = useState("");

    /** Récupération de tous les utilisateurs à l’affichage de la page */
    useEffect(() => {
        async function fetchUsers() {
            const { error, data } = await fetchAPI("GET", "/api/users");

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            /** L’API renvoie les données dans `data.data` */
            if (Array.isArray(data?.data)) {
                setUsers(data.data as DataUserType[]);
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
    const filteredUsers = useMemo(() => {
        const q = query.trim();
        if (!q) return users;

        const qNorm = normalize(q);
        const qNum = Number(q);
        const isNumeric = !Number.isNaN(qNum);

        return users.filter((u) => {
            /** Si la recherche est un nombre, on compare avec l’ID exact */
            if (isNumeric && u.id === qNum) return true;

            /** Comparaison sur prénom, nom et email */
            const first = normalize(u.firstname || "");
            const last = normalize(u.lastname || "");
            const mail = normalize(u.email || "");

            return first.includes(qNorm) || last.includes(qNorm) || mail.includes(qNorm);
        });
    }, [users, query]);

    /** État de chargement */
    if (loading) return <p>Chargement des utilisateurs...</p>;
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

            {/* Liste des utilisateurs sous forme de cards */}
            <div className={css.cardsContainer}>
                {filteredUsers.length === 0 ? (
                    /** Aucun utilisateur ne correspond à la recherche */
                    <p className={css.EmptyState}>Aucun utilisateur ne correspond à “{query}”.</p>
                ) : (
                    filteredUsers.map((user) => (
                        <div key={user.id} className={css.card}>
                            {/* Données principales utilisateur */}
                            <div className={css.ContainerDataUser}>
                                <p className={css.label}>
                                    <span className={style.SpanBold}>ID :</span> {user.id}
                                </p>
                                <p className={css.label}>
                                    <span className={style.SpanBold}>Prénom :</span> {user.firstname}
                                </p>
                                <p className={css.label}>
                                    <span className={style.SpanBold}>Nom :</span> {user.lastname}
                                </p>
                                <p className={css.label} style={{ fontSize: "0.875rem" }}>
                                    {user.email}
                                </p>
                            </div>

                            {/* Rôle + action */}
                            <div className={css.ContainerRoleAction}>
                                <p className={css.label}>{user.role}</p>
                                <button
                                    className={css.ButtonEdit}
                                    aria-label={`Modifier l'utilisateur ${user.firstname} ${user.lastname}`}
                                    onClick={() => navigate(`/admin/all-user-systeme/edit-user/${user.id}`)}
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

export default AllUserSystemeRoot;
