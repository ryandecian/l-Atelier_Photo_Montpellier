import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../StyleRootComponent.module.css";
import css from "./InsertAlbumAdminRoot.module.css";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import InsertAlbum_type from "../../../../types/InsertAlbum.type";
import fetchAPI from "../../../../utils/fetchAPI.utils";

/* Typage minimal local de la réponse utile pour l’affichage des erreurs */
type FetchApiRes = {
    data?: { error?: string };
    error?: string;
};

/* Aliasing pour rester cohérent avec ton usage */
type EditForm = InsertAlbum_type;

function InsertAlbumAdminRoot() {
    /* Sécurisation : accès réservé aux administrateurs */
    useLockedPage("admin");

    const navigate = useNavigate();

    /* State du formulaire contrôlé : valeurs initiales vides */
    const [form, setForm] = useState<EditForm>({
        date: "",
        lien: "",
        access_code: "",
        user_id: 0,
    });

    /* États UI : soumission en cours et message d’erreur à afficher */
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    /* Handler générique de mise à jour des champs
       - Conversion explicite en number pour user_id */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "user_id") {
            setForm((prev) => ({ ...prev, user_id: value === "" ? 0 : Number(value) }));
            return;
        }
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /* Validation minimale côté front :
       - Tous les champs non vides
       - user_id > 0 (number)
       - Le format de date est géré côté backend, pas de blocage ici */
    const canSubmit =
        form.date.trim().length > 0 &&
        form.lien.trim().length > 0 &&
        form.access_code.trim().length > 0 &&
        Number.isFinite(form.user_id) &&
        form.user_id > 0;

    /* Soumission :
       - POST /album
       - Priorité au message d’erreur serveur : res.data.error (si string)
       - Fallback sur res.error (erreur technique/outillage) */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) {
            return;
        }

        setLoading(true);
        setErrorMsg(null);

        const body: Record<string, unknown> = {
            date: form.date.trim(),        /* Exemple : "12/05/2025" */
            lien: form.lien.trim(),
            access_code: form.access_code.trim(),
            user_id: form.user_id,         /* number */
        };

        const res = (await fetchAPI("POST", "/album", body)) as FetchApiRes;

        /* 1) Erreur métier renvoyée par le serveur (affichage prioritaire) */
        const serverError = res?.data?.error;
        if (typeof serverError === "string") {
            setErrorMsg(serverError);
            setLoading(false);
            return;
        }

        /* 2) Erreur technique éventuelle (réseau, fetchAPI, etc.) */
        const toolError = res?.error;
        if (typeof toolError === "string") {
            setErrorMsg(toolError);
            setLoading(false);
            return;
        }

        setLoading(false);
        navigate("/admin/album");
    };

    /* Rendu */
    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Création d'un album</h1>
            </header>

            {/* Message d'erreur éventuel */}
            {errorMsg && <p className={css.ErrorMsg}>{errorMsg}</p>}

            {/* Formulaire contrôlé */}
            <form id="insert-album-form" className={css.ContainerRoot} onSubmit={handleSubmit}>
                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="date">Date</label>
                    <input
                        id="date"
                        name="date"
                        type="text"
                        value={form.date}
                        onChange={handleChange}
                        className={css.Input}
                        placeholder="12/05/2025"
                        required
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
                        required
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="user_id">ID Utilisateur</label>
                    <input
                        id="user_id"
                        name="user_id"
                        type="number"
                        value={form.user_id}
                        onChange={handleChange}
                        className={css.Input}
                        min={1}
                        required
                    />
                </div>
            </form>

            {/* Boutons d’action */}
            <div className={css.ButtonRow}>
                <button
                    type="button"
                    className={css.CancelButton}
                    onClick={() => navigate("/admin/album")}
                    disabled={loading}
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    form="insert-album-form"
                    className={css.SaveButton}
                    disabled={loading || !canSubmit}
                    title={canSubmit ? "Créer l'album" : "Renseignez tous les champs requis"}
                >
                    {loading ? "Enregistrement..." : "Enregistrer"}
                </button>
            </div>
        </div>
    );
}

export default InsertAlbumAdminRoot;
