import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../../../StyleRootComponent.module.css";
import css from "./EditAlbumAdminRoot.module.css";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import DataOneAlbumAdminType from "../../../../types/DataOneAlbumAdmin.type";
import fetchAPI from "../../../../utils/fetchAPI.utils";

/** Structure du formulaire de modification */
type EditForm = {
    id_album: number;
    id_user: number;
    firstname: string;
    lastname: string;
    email: string;
    lien: string;
    access_code: string;
    date: string;
};

function EditAlbumAdminRoot() {
    /** Sécurise l'accès à la page aux administrateurs uniquement */
    useLockedPage("admin");

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    /** Formulaire contrôlé */
    const [form, setForm] = useState<EditForm>({
        id_album: 0,
        id_user: 0,
        firstname: "",
        lastname: "",
        email: "",
        lien: "",
        access_code: "",
        date: "",
    });

    /** Données d'origine de l'album à comparer */
    const [originalAlbum, setOriginalAlbum] = useState<DataOneAlbumAdminType | null>(null);

    /** Gestion des états de chargement, soumission et erreurs */
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    /** Récupère l'utilisateur ciblé dès que l'ID est présent dans l'URL */
    useEffect(() => {
        async function fetchAlbum() {
            if (!id) {
                setErrorMsg("ID album manquant.");
                setLoading(false);
                return;
            }

            const { error, data } = await fetchAPI("GET", `/album/${id}`);
            if (error) {
                setErrorMsg(error);
                setLoading(false);
                return;
            }

            if (data?.data) {
                const album = data.data as DataOneAlbumAdminType;

                setOriginalAlbum(album);
                setForm({
                    id_album: album.id_album || 0,
                    id_user: album.id_user || 0,
                    firstname: album.firstname || "",
                    lastname: album.lastname || "",
                    email: album.email || "",
                    lien: album.lien || "",
                    access_code: album.access_code || "",
                    date: album.date || "",
                });
            } else {
                setErrorMsg("Album introuvable.");
            }

            setLoading(false);
        }

        fetchAlbum();
    }, [id]);

    /** Mise à jour des champs du formulaire */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        /* Forcer le typage numérique sur id_user pour éviter les comparaisons string/number
           et les envois d'un string au backend pour un champ attendu en number. */
        if (name === "id_user") {
            setForm((prev) => ({ ...prev, id_user: value === "" ? 0 : Number(value) }));
            return;
        }

        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /** Vérifie si des modifications ont été apportées */
    const isDirty =
        !!originalAlbum &&
        (
            /* Comparaison strictement sur les 4 champs modifiables uniquement */
            form.id_user !== originalAlbum.id_user ||
            form.lien !== originalAlbum.lien ||
            form.access_code !== originalAlbum.access_code ||
            form.date !== originalAlbum.date
        );

    /* On supprime la validation email pour le bouton "Enregistrer" car l'email n'est pas modifiable. */

    /** Soumission du formulaire (modification de l'album) */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (saving || !id) return;

        setSaving(true);
        setErrorMsg(null);

        const body: Record<string, unknown> = {
            /* On n'envoie que ce qui est attendu par le backend pour la modification */
            id: form.id_album,
            user_id: form.id_user,
            lien: form.lien.trim(),
            access_code: form.access_code.trim(),
            date: form.date.trim(), /* Le backend gère et convertit la date si besoin */
        };

        const { error } = await fetchAPI("PUT", "/album", body);

        if (error) {
            setErrorMsg(error);
            setSaving(false);
            return;
        }

        setSaving(false);
        /* Retour logique vers la liste des albums admin */
        navigate("/admin/album");
    };

    /** Suppression de l'album ciblé */
    const handleDelete = async () => {
        if (!id) return;

        const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cet album ?");
        if (!confirmation) return;

        setSaving(true);
        setErrorMsg(null);

        const { error } = await fetchAPI("DELETE", "/album", { id_album: parseInt(id, 10) });

        if (error) {
            setErrorMsg(error);
            setSaving(false);
            return;
        }

        navigate("/admin/album");
    };

    /** Affichage si en cours de chargement */
    if (loading) return <p>Chargement des données de l'album...</p>;

    /** Affichage en cas d'erreur */
    if (errorMsg) return <p className={css.ErrorMsg}>{errorMsg}</p>;

    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {/* Titre corrigé pour refléter l'édition d'un album */}
                    Modifier l’album n°{form.id_album || id}
                </h1>
            </header>

            <form id="edit-user-admin" className={css.ContainerRoot} onSubmit={handleSubmit}>
                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="id_album">ID Album</label>
                    <input
                        id="id_album"
                        name="id_album"
                        type="text"
                        value={form.id_album}
                        onChange={handleChange}
                        className={css.Input}
                        /* Non modifiable */
                        disabled
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="id_user">ID User</label>
                    <input
                        id="id_user"
                        name="id_user"
                        /* Type number pour cohérence et UX */
                        type="number"
                        value={form.id_user}
                        onChange={handleChange}
                        className={css.Input}
                        /* Modifiable */
                        required
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="firstname">Prénom</label>
                    <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        value={form.firstname}
                        onChange={handleChange}
                        className={css.Input}
                        autoComplete="given-name"
                        /* Non modifiable */
                        disabled
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="lastname">Nom</label>
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        value={form.lastname}
                        onChange={handleChange}
                        className={css.Input}
                        autoComplete="family-name"
                        /* Non modifiable */
                        disabled
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="email">Adresse e-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={css.Input}
                        /* Non modifiable, et pas de required pour ne pas bloquer la soumission native */
                        disabled
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="lien">Lien</label>
                    <input
                        id="lien"
                        name="lien"
                        type="text"
                        value={form.lien}
                        onChange={handleChange}
                        className={css.Input}
                        /* Modifiable */
                        required
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="access_code">Code d'accès</label>
                    <input
                        id="access_code"
                        name="access_code"
                        type="text"
                        value={form.access_code}
                        onChange={handleChange}
                        className={css.Input}
                        /* Modifiable */
                        required
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="date">Date</label>
                    <input
                        id="date"
                        name="date"
                        type="text"
                        value={form.date}
                        onChange={handleChange}
                        className={css.Input}
                        /* Modifiable ; format attendu "12/05/2025" géré côté backend */
                        required
                    />
                </div>
            </form>

            <div className={css.ButtonRow}>
                <button
                    type="button"
                    className={css.CancelButton}
                    onClick={() => navigate("/admin/album")}
                    disabled={saving}
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    form="edit-user-admin"
                    className={css.SaveButton}
                    /* Le bouton n'est plus bloqué par la validation email ; on se base uniquement sur isDirty */
                    disabled={saving || !isDirty}
                    title={
                        isDirty
                            ? "Enregistrer les modifications"
                            : "Aucune modification"
                    }
                >
                    {saving ? "Enregistrement..." : "Enregistrer"}
                </button>
                <button
                    type="button"
                    className={css.DeleteButton}
                    onClick={handleDelete}
                    disabled={saving}
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
}

export default EditAlbumAdminRoot;
