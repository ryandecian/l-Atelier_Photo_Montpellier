import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./ComptePC.module.css";

function ComptePC() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/login"); // redirige si pas connecté
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
          throw new Error(data.message || "Erreur lors de la récupération");
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data.data || data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={style.ComptePC}>
      <h1>👤 Espace Compte</h1>

      {loading && <p>Chargement...</p>}
      {error && <p className={style.error}>{error}</p>}

      {!loading && !error && userData && (
        <div className={style.card}>
          <p><strong>Prénom :</strong> {userData.firstname}</p>
          <p><strong>Nom :</strong> {userData.lastname}</p>
          <p><strong>Email :</strong> {userData.email}</p>
          <p><strong>Adresse :</strong> {userData.address || "—"}</p>
          <p><strong>Rôle :</strong> {userData.role}</p>
          <p><strong>Inscrit le :</strong> {new Date(userData.date_save).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default ComptePC;
