import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../StyleRootComponent.module.css";
import css from "./EditUserRoot.module.css";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import DataUserType from "../../../../types/dataUser.type";
import fetchAPI from "../../../../utils/fetchAPI.utils";

type EditForm = {
    firstname: string;
    lastname: string;
    address: string;
    email: string;
    password: string; // stocké uniquement côté client, jamais renvoyé par l'API
};

function EditUserRoot() {
    const navigate = useNavigate();

    /**
     * Récupération des données de l’utilisateur connecté via le token (hook sécurisé).
     * ⚠️ Le serveur ne renvoie jamais le champ password → il reste donc vide.
     */
    const userInfo: DataUserType | null = useLockedPage("user");

    /**
     * State du formulaire contrôlé.
     * - Initialement vide
     * - Rempli ensuite par `useEffect` avec les infos de l’utilisateur
     */
    const [form, setForm] = useState<EditForm>({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        password: "",
    });

    /**
     * State pour gérer un "loading" pendant la requête PUT
     * et pour afficher un éventuel message d'erreur
     */
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    /**
     * useEffect → Remplit le formulaire avec les données utilisateur
     * (appelé lorsque userInfo est disponible / mis à jour).
     */
    useEffect(() => {
        if (userInfo) {
            setForm({
                firstname: userInfo.firstname || "",
                lastname: userInfo.lastname || "",
                address: userInfo.address || "",
                email: userInfo.email || "",
                password: "", // toujours vide par sécurité
            });
        }
    }, [userInfo]);

    /**
     * Fonction pour mettre à jour le state "form"
     * à chaque modification d’un input.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /**
     * Vérifie si le formulaire a été modifié :
     * - Comparaison des champs avec userInfo
     * - OU présence d’un mot de passe saisi
     * ⚠️ Utilisé pour activer/désactiver le bouton "Enregistrer"
     */
    const isDirty =
        !!userInfo &&
        (
            form.firstname !== (userInfo.firstname || "") ||
            form.lastname !== (userInfo.lastname || "") ||
            form.address !== (userInfo.address || "") ||
            form.email !== (userInfo.email || "")
        ) ||
        form.password !== "";

    /**
     * Validation simple de l’email (regex de base).
     */
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    /**
     * Fonction exécutée lors de la soumission du formulaire.
     * - Empêche le rechargement par défaut (e.preventDefault)
     * - Construit le "payload" nettoyé (.trim())
     * - Ajoute le champ password uniquement si non vide
     * - Envoie la requête PUT avec fetchAPI
     * - Redirige vers /compte/user en cas de succès
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return; // évite un double-clic sur "Enregistrer"

        setLoading(true);
        setErrorMsg(null);

        // Construction du payload
        const body: Record<string, unknown> = {
            firstname: form.firstname.trim(),
            lastname: form.lastname.trim(),
            address: form.address.trim(),
            email: form.email.trim(),
            ...(form.password ? { password: form.password } : {}), // ajouté uniquement si non vide
        };

        // Requête API
        const { error } = await fetchAPI("PUT", "/api/users/me", body);

        if (error) {
            setErrorMsg(error); // affiche l'erreur si problème serveur/API
            setLoading(false);
            return;
        }

        // En cas de succès → redirection vers la page profil
        setLoading(false);
        navigate("/compte/user");
    };

    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Modifier mes informations</h1>
            </header>

            {/* Affichage d’un éventuel message d’erreur */}
            {errorMsg && <p className={css.ErrorMsg}>{errorMsg}</p>}

            {/* Formulaire contrôlé */}
            <form id="edit-user-form" className={css.ContainerRoot} onSubmit={handleSubmit}>
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

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="password">Mot de passe</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        className={css.Input}
                        autoComplete="new-password"
                        placeholder="Laisser vide pour ne pas changer"
                    />
                </div>
            </form>

            {/* Boutons d’action */}
            <div className={css.ButtonRow}>
                <button
                    type="button"
                    className={css.CancelButton}
                    onClick={() => navigate("/compte/user")}
                    disabled={loading}
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    form="edit-user-form"
                    className={css.SaveButton}
                    disabled={loading || !isDirty || !emailValid}
                    title={
                        !emailValid
                            ? "Email invalide"
                            : isDirty
                                ? "Enregistrer les modifications"
                                : "Aucune modification"
                    }
                >
                    {loading ? "Enregistrement..." : "Enregistrer"}
                </button>
            </div>
        </div>
    );
}

export default EditUserRoot;
