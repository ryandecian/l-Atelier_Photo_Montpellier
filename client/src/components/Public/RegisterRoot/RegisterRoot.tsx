/* RegisterRoot.tsx */
import { useState } from "react";
import { Link } from "react-router-dom";
import fetchAPI from "../../../utils/fetchAPI.utils";
import css from "./RegisterRoot.module.css";
import style from "../../StyleRootComponent.module.css";
import ListDataRouter from "../../../router/router";

function RegisterRoot() {
    /* States locaux */
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [adress, setAdress] = useState<string>(""); /* optionnel */

    /* Consentement CGV / données personnelles */
    const [consentCGV, setConsentCGV] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

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

    /* Validation front basique (adress est optionnel) */
    function validate(): string | null {
        if (!firstname.trim() || !lastname.trim()) {
            return "Le prénom et le nom sont obligatoires.";
        }
        if (!email.trim()) {
            return "L'email est obligatoire.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return "Veuillez saisir une adresse email valide.";
        }
        if (password.length < 8) {
            return "Le mot de passe doit contenir au moins 8 caractères.";
        }
        if (password !== confirmPassword) {
            return "Les mots de passe ne correspondent pas.";
        }
        /* Vérification du consentement CGV */
        if (!consentCGV) {
            return "Vous devez accepter les CGV et le traitement de vos données personnelles pour créer un compte.";
        }
        return null;
    }

    /* Soumission : POST /register */
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMessage(null);
        setError(null);

        /* Validation front */
        const v = validate();
        if (v) {
            setError(v);
            return;
        }

        setLoading(true);

        try {
            /* Corps : adress optionnel → envoyé seulement si non vide après trim */
            const base = {
                firstname: firstname.trim(),
                lastname: lastname.trim(),
                email: email.trim(),
                password
            } as Record<string, unknown>;

            const body = adress.trim()
                ? { ...base, adress: adress.trim() }
                : base;

            const res = await fetchAPI("POST", "/user/register", body);

            /* 1) Erreur métier renvoyée par le backend */
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

            /* 3) Succès */
            const payload = res.data as Record<string, unknown> | null;
            const serverMsg = payload && typeof payload.message === "string" ? (payload.message as string) : "";

            if (serverMsg) {
                setMessage(serverMsg);
                setError(null);
                /* Reset de base (on garde l'email si tu veux pré-remplir la connexion) */
                setPassword("");
                setConfirmPassword("");
                setAdress("");
                setConsentCGV(false);
                return;
            }

            /* 4) Fallback neutre */
            setMessage("Votre compte a été créé.");
            setError(null);
            setPassword("");
            setConfirmPassword("");
            setAdress("");
            setConsentCGV(false);
        } catch (err: unknown) {
            console.error("register error:", err);
            setError("Une erreur inattendue s'est produite.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Créez votre compte !
                </h1>
            </header>

            <section className={css.RegisterRoot}>
                <form onSubmit={handleSubmit} className={css.form}>
                    <div className={css.row}>
                        <div className={css.col}>
                            <label 
                                htmlFor="firstname" 
                                className={css.label}
                            >
                                Prénom {` `}
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                className={css.Input}
                                id="firstname"
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required /* Champ obligatoire */
                                placeholder="Votre prénom"
                                autoComplete="given-name"
                            />
                        </div>

                        <div className={css.col}>
                            <label 
                                htmlFor="lastname" 
                                className={css.label}
                            >
                                Nom {` `}
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                className={css.Input}
                                id="lastname"
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required /* Champ obligatoire */
                                placeholder="Votre nom"
                                autoComplete="family-name"
                            />
                        </div>
                    </div>

                    <label 
                        htmlFor="email" 
                        className={css.label}
                    >
                        Email {` `}
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={css.Input}
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required /* Champ obligatoire */
                        placeholder="votre@email.com"
                        autoComplete="email"
                    />

                    <label 
                        htmlFor="password" 
                        className={css.label}
                    >
                        Mot de passe {` `}
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={css.Input}
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required /* Champ obligatoire */
                        placeholder="Au moins 8 caractères"
                        autoComplete="new-password"
                    />

                    <label 
                        htmlFor="confirmPassword" 
                        className={css.label}
                    >
                        Confirmer le mot de passe {` `}
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={css.Input}
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required /* Champ obligatoire */
                        placeholder="Répétez votre mot de passe"
                        autoComplete="new-password"
                    />

                    <label 
                        htmlFor="adress" 
                        className={css.label}
                    >
                        Adresse {` `}
                        <span className={css.optional}>(optionnel)</span>
                    </label>
                    <textarea
                        className={css.Textarea}
                        id="adress"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                        placeholder="N°, rue, complément, ville, code postal"
                        autoComplete="address-line1"
                        rows={3}
                    />

                    {/* Bloc consentement CGV / données personnelles */}
                    <div className={css.ConsentRow}>
                        <input
                            id="consentCGV"
                            name="consentCGV"
                            type="checkbox"
                            className={css.Checkbox}
                            checked={consentCGV}
                            onChange={(e) => setConsentCGV(e.target.checked)}
                            required
                            aria-describedby="consentHelp"
                        />
                        <label htmlFor="consentCGV" className={css.ConsentLabel}>
                            J’ai lu et j’accepte les{" "}
                            <Link to={ListDataRouter[9].path} className={css.link} target="_blank" rel="noopener noreferrer">
                                Conditions Générales de Vente
                            </Link>{" "}
                            et j’autorise le traitement de mes données personnelles pour la gestion de mon compte.
                        </label>
                    </div>
                    <p id="consentHelp" className={css.ConsentHelp}>
                        Vous pouvez retirer votre consentement à tout moment depuis votre espace ou en nous contactant.
                    </p>

                    <button
                        type="submit"
                        className={css.Button}
                        disabled={loading || !consentCGV}
                    >
                        {loading ? "Création en cours..." : "Créer mon compte"}
                    </button>

                    {message && <p className={css.success}>{message}</p>}
                    {error && <p className={css.error}>{error}</p>}

                    <div className={css.footerLinks}>
                        <Link to="/login" className={css.linkBack}>
                            ← J’ai déjà un compte
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default RegisterRoot;
