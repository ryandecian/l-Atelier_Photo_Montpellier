import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import style from "./CompteRoot.module.css";
import useAuthCheck from "../../hook/useAuthCheck.utils.hook";
import DataUserType from "../../types/dataUser.type";

function CompteRoot() {
  const { isLoggedIn, userInfo, isChecking } = useAuthCheck();
  const [editedUser, setEditedUser] = useState<Partial<DataUserType>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  
  // Vérification du Role
  useEffect(() => {
    if (!isChecking && userInfo?.role === "admin") {
      navigate("/admin");
    }
  }, [isChecking, userInfo, navigate]);

  // Remplit les champs dès que les données du token sont prêtes
  useEffect(() => {
    if (userInfo) {
      setEditedUser(userInfo);
    }
  }, [userInfo]);

  // En attente de vérification du token
  if (isChecking) return <p>Chargement...</p>;

  // Gère les modifications de formulaire
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Envoie les modifications au serveur
  const handleSave = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_DOMAIN_API_SERVER}/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Auth via cookie HttpOnly
        body: JSON.stringify(editedUser),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Erreur lors de la mise à jour.");
      }

      const data = await response.json();
      setEditedUser(data.data || data);
      setSuccessMessage("✅ Modifications enregistrées avec succès.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Erreur inconnue.");
    }
  };

  // Déconnexion : suppression du token client
  const handleLogout = () => {
    localStorage.removeItem("jwtTokenClientLAPM");
    navigate("/login");
  };

  // Sécurité supplémentaire (même si redirection faite dans le hook)
  if (!isLoggedIn || !userInfo) return <p>Accès refusé</p>;

  return (
    <div className={style.ComptePC}>
      <div className={style.topBar}>
        <h1>👤 Mon Compte</h1>
        <button onClick={handleLogout} className={style.logoutBtn}>Déconnexion</button>
      </div>

      {successMessage && <p className={style.success}>{successMessage}</p>}

      <div className={style.form}>
        <label>Prénom :</label>
        <input
          name="firstname"
          value={editedUser.firstname || ""}
          onChange={handleInputChange}
        />

        <label>Nom :</label>
        <input
          name="lastname"
          value={editedUser.lastname || ""}
          onChange={handleInputChange}
        />

        <label>Email :</label>
        <input
          name="email"
          value={editedUser.email || ""}
          onChange={handleInputChange}
        />

        <label>Adresse :</label>
        <input
          name="address"
          value={editedUser.address || ""}
          onChange={handleInputChange}
        />

        <button onClick={handleSave} className={style.ButtonSave}>💾 Enregistrer les modifications</button>
      </div>
    </div>
  );
}

export default CompteRoot;
