import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../StyleRootComponent.module.css";
import css from "./InsertAlbumAdminRoot.module.css";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import InsertAlbum_type from "../../../../types/InsertAlbum.type";
import fetchAPI from "../../../../utils/fetchAPI.utils";

/* Composant : InsertAlbumAdminRoot
   Objectif : Page d'insertion d'un album côté admin.
   Champs requis : date (string "12/05/2025"), lien (string), access_code (string), user_id (number).
   Envoi : POST /album
*/
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

    /* États de contrôle : chargement (soumission) et message d'erreur éventuel */
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    /* Handler générique de mise à jour des champs
       - Conversion explicite en number pour user_id
       - Trim au moment de la soumission (pas ici) */
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
       - Le format exact de date est géré et sécurisé côté backend */
    const canSubmit =
        form.date.trim().length > 0 &&
        form.lien.trim().length > 0 &&
        form.access_code.trim().length > 0 &&
        Number.isFinite(form.user_id) &&
        form.user_id > 0;

    /* Soumission :
       - POST /album
       - Payload limité aux 4 champs requis
       - Redirection vers /admin/album si succès */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) {
            return;
        }

        setLoading(true);
        setErrorMsg(null);

        const body: Record<string, unknown> = {
            date: form.date.trim(),       /* Exemple attendu : "12/05/2025" */
            lien: form.lien.trim(),
            access_code: form.access_code.trim(),
            user_id: form.user_id,        /* number */
        };

        const { error } = await fetchAPI("POST", "/album", body);

        if (error) {
            setErrorMsg(error);
            setLoading(false);
            return;
        }

        setLoading(false);
        navigate("/admin/album");
    };

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
                        placeholder="ex 02/09/2025"
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
                        placeholder="Lien Synology brut"
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
