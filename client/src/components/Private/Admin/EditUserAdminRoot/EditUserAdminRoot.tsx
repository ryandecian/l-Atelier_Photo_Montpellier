import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../../../StyleRootComponent.module.css";
import css from "./EditUserAdminRoot.module.css";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import DataUserType from "../../../../types/dataUser.type";
import fetchAPI from "../../../../utils/fetchAPI.utils";

/** Structure du formulaire de modification */
type EditForm = {
    firstname: string;
    lastname: string;
    address: string;
    email: string;
};

function EditUserAdminRoot() {
    /** Sécurise l'accès à la page aux administrateurs uniquement */
    useLockedPage("admin");

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    /** Formulaire contrôlé */
    const [form, setForm] = useState<EditForm>({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
    });

    /** Données d'origine de l'utilisateur à comparer */
    const [originalUser, setOriginalUser] = useState<DataUserType | null>(null);

    /** Gestion des états de chargement, soumission et erreurs */
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    /** Récupère l'utilisateur ciblé dès que l'ID est présent dans l'URL */
    useEffect(() => {
        async function fetchUser() {
            if (!id) {
                setErrorMsg("ID utilisateur manquant.");
                setLoading(false);
                return;
            }

            const { error, data } = await fetchAPI("GET", `/users/${id}`);
            if (error) {
                setErrorMsg(error);
                setLoading(false);
                return;
            }

            if (Array.isArray(data?.data) && data.data.length > 0) {
                const user = data.data[0] as DataUserType;
                setOriginalUser(user);
                setForm({
                    firstname: user.firstname || "",
                    lastname: user.lastname || "",
                    address: user.address || "",
                    email: user.email || "",
                });
            } else {
                setErrorMsg("Utilisateur introuvable.");
            }

            setLoading(false);
        }

        fetchUser();
    }, [id]);

    /** Mise à jour des champs du formulaire */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /** Vérifie si des modifications ont été apportées */
    const isDirty =
        !!originalUser &&
        (
            form.firstname !== (originalUser.firstname || "") ||
            form.lastname !== (originalUser.lastname || "") ||
            form.address !== (originalUser.address || "") ||
            form.email !== (originalUser.email || "")
        );

    /** Validation simple de l'e-mail */
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    /** Soumission du formulaire (modification de l'utilisateur) */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (saving || !id) return;

        setSaving(true);
        setErrorMsg(null);

        const body: Record<string, unknown> = {
            firstname: form.firstname.trim(),
            lastname: form.lastname.trim(),
            address: form.address.trim(),
            email: form.email.trim(),
            id: parseInt(id, 10),
        };

        const { error } = await fetchAPI("PUT", "/user", body);

        if (error) {
            setErrorMsg(error);
            setSaving(false);
            return;
        }

        setSaving(false);
        navigate("/admin/all-user-systeme");
    };

    /** Suppression de l'utilisateur ciblé */
    const handleDelete = async () => {
        if (!id) return;

        const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
        if (!confirmation) return;

        setSaving(true);
        setErrorMsg(null);

        const { error } = await fetchAPI("DELETE", "/api/users", { id: parseInt(id, 10) });

        if (error) {
            setErrorMsg(error);
            setSaving(false);
            return;
        }

        navigate("/admin/all-user-systeme");
    };

    /** Affichage si en cours de chargement */
    if (loading) return <p>Chargement des données utilisateur...</p>;

    /** Affichage en cas d'erreur */
    if (errorMsg) return <p className={css.ErrorMsg}>{errorMsg}</p>;

    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Modifier l’utilisateur n°{id}
                </h1>
            </header>

            <form id="edit-user-admin" className={css.ContainerRoot} onSubmit={handleSubmit}>
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
                        required
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
                        required
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="address">Adresse</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={handleChange}
                        className={css.Input}
                        autoComplete="street-address"
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
                        autoComplete="email"
                        required
                    />
                </div>
            </form>

            <div className={css.ButtonRow}>
                <button
                    type="button"
                    className={css.CancelButton}
                    onClick={() => navigate("/admin/all-user-systeme")}
                    disabled={saving}
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    form="edit-user-admin"
                    className={css.SaveButton}
                    disabled={saving || !isDirty || !emailValid}
                    title={
                        !emailValid
                            ? "Email invalide"
                            : isDirty
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

export default EditUserAdminRoot;
