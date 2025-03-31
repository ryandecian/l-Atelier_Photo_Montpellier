import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ComptePC.module.css";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  role: string;
  date_save: string;
};

function ComptePC() {
  const [user, setUser] = useState<User | null>(null);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔐 Vérifie la connexion et récupère les infos utilisateur
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Erreur de récupération.");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data.data || data);
        setEditedUser(data.data || data);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erreur inconnue.");
        }
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  // 🔄 Gère les modifications des champs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  // 💾 Sauvegarde les modifications
  const handleSave = async () => {
    const token = localStorage.getItem("jwtToken");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editedUser),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Erreur lors de la mise à jour.");
      }

      const data = await response.json();
      setUser(data.data || data);
      setSuccessMessage("✅ Modifications enregistrées avec succès.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Erreur inconnue.");
      }
    }
  };

  // 🚪 Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <div className={style.ComptePC}>
      <div className={style.topBar}>
        <h1>👤 Mon Compte</h1>
        <button onClick={handleLogout} className={style.logoutBtn}>Déconnexion</button>
      </div>

      {loading && <p>Chargement...</p>}
      {error && <p className={style.error}>{error}</p>}
      {successMessage && <p className={style.success}>{successMessage}</p>}

      {!loading && !error && user && (
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

          <button onClick={handleSave}>💾 Enregistrer les modifications</button>
        </div>
      )}
    </div>
  );
}

export default ComptePC;
