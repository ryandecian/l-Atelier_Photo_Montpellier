import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./LoginRoot.module.css";

function LoginRoot() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formulaireLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setError(""); // Réinitialise le message d'erreur

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Vérifier si la réponse est correcte
      // Si le serveur renvoie une erreur, on l'affiche
      if (!response.ok) {
        throw new Error(data.message || "Identifiants incorrects."); // A revoir les message côté serveur
      }

      // Stocker les infos utilisateur + token
      localStorage.setItem("jwtToken", data.jwt);
      localStorage.setItem("userId", String(data.id));
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userRole", data.role);
      localStorage.setItem("userName", `${data.firstname} ${data.lastname}`);

      // Rediriger vers la bonne page
      if (data.role === "admin") {
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
        console.error("Erreur inconnue lors de la connexion.");
        setError("Erreur inconnue lors de la connexion.");
      }
    }
  };

  return (
    <section className={style.LoginRoot}>
      <h1>Connexion 🔐</h1>
      <form onSubmit={formulaireLogin} className={style.form}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required // Champ obligatoire
        />

        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required // Champ obligatoire
        />

        <button type="submit">Se connecter</button>
        {error && <p className={style.error}>{error}</p>}
      </form>
    </section>
  );
}

export default LoginRoot;
