import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fetchAPI from "../../../utils/fetchAPI.utils";
import css from "./ResetPasswordConfirm.module.css";
import style from "../../StyleRootComponent.module.css";

function ResetPasswordConfirmRoot() {
    /* States locaux */
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    /* Récupération du token depuis la query string ?token=... */
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    /* Détection d'erreur réseau/serveur offline pour message personnalisé */
    function isNetworkError(text: string | null): boolean {
        if (!text) return false;
        const t = text.toLowerCase();
        return (
            t.includes("failed to fetch") ||
            t.includes("networkerror") ||
            t.includes("network error") ||
            t.includes("typeerror") ||
            t.includes("load failed")
        );
    }

    /* Validation front basique du mot de passe */
    function validatePassword(pw: string, confirm: string): string | null {
        if (pw.length < 8) return "Le mot de passe doit contenir au moins 8 caractères.";
        if (pw !== confirm) return "Les mots de passe ne correspondent pas.";
        return null;
    }

    /* Soumission du formulaire : POST /reset-password/confirm { token, password } */
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMessage(null);
        setError(null);

        /* Sécurité : token obligatoire */
        if (!token) {
            setError("Lien invalide ou token manquant.");
            return;
        }

        /* Validation front */
        const validationError = validatePassword(password, confirmPassword);
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);

        try {
            const res = await fetchAPI("POST", "/reset-password/confirm", { token, password });

            /* 1) Erreur “métier” renvoyée par le backend */
            if (res.data && typeof (res.data as Record<string, unknown>).error === "string") {
                const serverErr = (res.data as { error: string }).error;
                setError(serverErr);
                setMessage(null);
                return;
            }

            /* 2) Erreur réseau/offline */
            if (res.error) {
                setError(
                    isNetworkError(res.error)
                        ? "Le serveur est indisponible pour le moment. Merci de réessayer plus tard."
                        : res.error
                );
                return;
            }

            /* 3) Succès : message du serveur */
            const payload = res.data as Record<string, unknown> | null;
            const serverMsg = payload && typeof payload.message === "string" ? (payload.message as string) : "";

            if (serverMsg) {
                setMessage(serverMsg);
                setError(null);
                setPassword("");
                setConfirmPassword("");
                return;
            }

            /* 4) Fallback neutre */
            setMessage("Votre mot de passe a été réinitialisé.");
            setError(null);
            setPassword("");
            setConfirmPassword("");
        }
        catch (err: unknown) {
            console.error("reset-password/confirm error:", err);
            setError("Une erreur inattendue s'est produite.");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Réinitialisation du mot de passe
                </h1>
            </header>

            {/* Alerte immédiate si aucun token dans l'URL */}
            {!token && (
                <p className={css.error}>
                    Lien invalide : aucun token trouvé. Veuillez relancer une demande de réinitialisation.
                </p>
            )}

            <section className={css.ResetPasswordConfirm}>
                <form onSubmit={handleSubmit} className={css.form}>
                    <label htmlFor="password" className={css.label}>
                        Nouveau mot de passe
                    </label>
                    <input
                        className={css.Input}
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Votre nouveau mot de passe"
                        autoComplete="new-password"
                        disabled={!token}
                    />

                    <label htmlFor="confirmPassword" className={css.label}>
                        Confirmer le mot de passe
                    </label>
                    <input
                        className={css.Input}
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirmez votre mot de passe"
                        autoComplete="new-password"
                        disabled={!token}
                    />

                    <button type="submit" className={css.Button} disabled={loading || !token}>
                        {loading ? "Envoi en cours..." : "Valider le nouveau mot de passe"}
                    </button>

                    {message && <p className={css.success}>{message}</p>}
                    {error && <p className={css.error}>{error}</p>}

                    <Link to="/login" className={css.linkBack}>
                        ← Retour à la connexion
                    </Link>
                </form>
            </section>
        </div>
    );
}

export default ResetPasswordConfirmRoot;
