/* Import des modules CSS */
import css from "./login.module.css";

/* Import des composants React */
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/* Import des composants Router */
import ListDataRouter from "../../../router/router";

/* Import des Types */
import DataUserType from "../../../types/dataUser.type";

function Login_Root() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function formulaireLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch(`${import.meta.env.VITE_DOMAIN_API_SERVER}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Identifiants incorrects.");
            }

            /* On ne stocke que le token */
            localStorage.setItem("jwtTokenClientLAPM", data.jwtTokenClientLAPM);

            /* Décodage uniquement pour redirection */
            const payload = jwtDecode<DataUserType>(data.jwtTokenClientLAPM);

            /* Redirection selon le rôle */
            if (payload.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/compte");
            }
        }
        catch (err: unknown) {
            if (err instanceof Error) {
                console.error("Erreur login:", err.message);
                setError(err.message);
            } else {
                setError("Erreur inconnue lors de la connexion.");
            }
        }
    }

    return (
        <section className={css.LoginRoot}>
            <h1>Connexion 🔐</h1>
            <form onSubmit={formulaireLogin} className={css.form}>
                <label htmlFor="email">Email</label>
                <input
                    className={css.input}
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Mot de passe</label>
                <input
                    className={css.input}
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit" className={css.Button}>Se connecter</button>
                {error && <p className={css.error}>{error}</p>}

                <Link to={ListDataRouter[31].path} className={css.linkReset}>
                    Créer un compte ?
                </Link>
                
                <Link to={ListDataRouter[29].path} className={css.linkReset}>
                    Mot de passe oublié ?
                </Link>
            </form>
        </section>
    );
}

export default Login_Root;
