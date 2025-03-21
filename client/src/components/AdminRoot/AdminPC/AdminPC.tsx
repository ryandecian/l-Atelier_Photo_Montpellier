import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./AdminPC.module.css";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  role: string;
  date_save: string;
};

function AdminPC() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      navigate("/compte"); // 🔁 redirige vers compte si non connecté
      return;
    }

    // Étape 1 : vérifie le rôle
    fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.data?.role || data.data.role !== "admin") {
          navigate("/compte"); // 🔁 si pas admin, redirige
        }
      })
      .catch((err) => {
        console.error(err);
        navigate("/compte"); // 🔁 en cas d’erreur
      });

    // Étape 2 : charge les utilisateurs si tout va bien
    fetch(`${import.meta.env.VITE_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Erreur lors de la récupération.");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.data || data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={style.AdminPC}>
      <h1>👑 Interface Admin</h1>

      {loading && <p>Chargement...</p>}
      {error && <p className={style.error}>{error}</p>}

      {!loading && !error && (
        <table className={style.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Adresse</th>
              <th>Rôle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.firstname}</td>
                <td>{u.lastname}</td>
                <td>{u.email}</td>
                <td>{u.address || "—"}</td>
                <td>{u.role}</td>
                <td>
                  <button className={style.modifyBtn} disabled>Modifier</button>
                  <button className={style.deleteBtn} disabled>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPC;
