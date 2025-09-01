import { useState } from "react";
import { Link } from "react-router-dom";
import fetchAPI from "../../../utils/fetchAPI.utils";
import css from "./ResetPasswordRoot.module.css";

function ResetPasswordRoot() {
    /* States locaux */
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    /* Détection d'erreur réseau/serveur offline pour message personnalisé */
    function isNetworkError(text: string | null): boolean {
        if (!text) {
            return false;
        }
        const t = text.toLowerCase();
        return (
            t.includes("failed to fetch") ||
            t.includes("networkerror") ||
            t.includes("network error") ||
            t.includes("typeerror") ||
            t.includes("load failed")
        );
    }

    /* Soumission du formulaire de demande de réinitialisation */
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMessage(null);
        setError(null);
        setLoading(true);

        /* Appel API */
        const res = await fetchAPI("POST", "/reset-password", { email });

        /* 1) Priorité aux erreurs métier renvoyées par le backend (toujours dans res.data.error) */
        if (res.data && typeof (res.data as Record<string, unknown>).error === "string") {
            const serverErr = (res.data as { error: string }).error;
            setError(serverErr);
            setMessage(null);
            setLoading(false);
            return;
        }

        /* 2) Si pas d'erreur métier, on gère les erreurs réseau/offline (res.error) */
        if (res.error) {
            setError(
                isNetworkError(res.error)
                    ? "Le serveur est indisponible pour le moment. Merci de réessayer plus tard."
                    : res.error
            );
            setLoading(false);
            return;
        }

        /* 3) Succès : le message de succès est dans res.data.message */
        const payload = res.data as Record<string, unknown> | null;
        const serverMsg = payload && typeof payload.message === "string" ? (payload.message as string) : "";

        if (serverMsg) {
            setMessage(serverMsg);
            setError(null);
            setEmail("");
            setLoading(false);
            return;
        }

        /* 4) Fallback de sécurité si ni error ni message ne sont présents */
        setMessage("📩 Demande traitée.");
        setError(null);
        setEmail("");
        setLoading(false);
    }

    return (
        <section className={css.ResetPasswordRoot}>
            <h1>Réinitialisation du mot de passe 🔑</h1>

            <form onSubmit={handleSubmit} className={css.form}>
                <label htmlFor="email" className={css.label}>Email</label>
                <input
                    className={css.Input}
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="votre@email.com"
                />

                <button type="submit" className={css.Button} disabled={loading}>
                    {loading ? "Envoi en cours..." : "Envoyer le lien de réinitialisation"}
                </button>

                {message && <p className={css.success}>{message}</p>}
                {error && <p className={css.error}>{error}</p>}

                <Link to="/login" className={css.linkBack}>
                    ← Retour à la connexion
                </Link>
            </form>
        </section>
    );
}

export default ResetPasswordRoot;
