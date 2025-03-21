import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import style from "./AdminPC.module.css";

// Typage d’un utilisateur
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
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // 🔐 Vérifie l'accès admin et récupère la liste des utilisateurs
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const role = localStorage.getItem("userRole");

    if (!token || role !== "admin") {
      navigate("/compte");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/users`, {
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
        setUsers(data.data || data);
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

  // 🗑️ Suppression d’un utilisateur
  const handleDeleteUser = async (id: number) => {
    const confirmDelete = window.confirm("⚠️ Supprimer cet utilisateur ?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("jwtToken");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Échec de la suppression");

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Erreur inconnue lors de la suppression.");
      }
    }
  };

  // ✏️ Lance la modification
  const handleEditClick = (user: User) => {
    setEditUserId(user.id);
    setEditedUser({ ...user });
  };

  // ❌ Annule la modification
  const handleCancelEdit = () => {
    setEditUserId(null);
    setEditedUser({});
  };

  // 🔄 Met à jour les champs en cours d'édition
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  // 💾 Enregistre les modifications
  const handleSaveEdit = async () => {
    const token = localStorage.getItem("jwtToken");
    const original = users.find((u) => u.id === editUserId);

    if (!original) {
      alert("Utilisateur introuvable.");
      return;
    }

    const updatedUser = {
      firstname: editedUser.firstname ?? original.firstname,
      lastname: editedUser.lastname ?? original.lastname,
      email: editedUser.email ?? original.email,
      address: editedUser.address ?? original.address,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${editUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Erreur lors de la modification.");
      }

      setUsers((prev) =>
        prev.map((u) =>
          u.id === editUserId ? { ...u, ...updatedUser } : u
        )
      );

      setEditUserId(null);
      setEditedUser({});
      setSuccessMessage("✅ Modifications enregistrées avec succès.");

      // ⏳ Message temporaire
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Erreur inconnue lors de la modification.");
      }
    }
  };

  return (
    <div className={style.AdminPC}>
      <h1>👑 Interface Admin</h1>

      {/* ✅ Message de succès */}
      {successMessage && <p className={style.success}>{successMessage}</p>}

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

                {editUserId === u.id ? (
                  <>
                    <td><input name="firstname" value={editedUser.firstname || ""} onChange={handleInputChange} /></td>
                    <td><input name="lastname" value={editedUser.lastname || ""} onChange={handleInputChange} /></td>
                    <td><input name="email" value={editedUser.email || ""} onChange={handleInputChange} /></td>
                    <td><input name="address" value={editedUser.address || ""} onChange={handleInputChange} /></td>
                    <td>
                      <select name="role" value={editedUser.role || ""} onChange={handleInputChange}>
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={handleSaveEdit}>💾 Enregistrer</button>
                      <button onClick={handleCancelEdit}>❌ Annuler</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{u.firstname}</td>
                    <td>{u.lastname}</td>
                    <td>{u.email}</td>
                    <td>{u.address || "—"}</td>
                    <td>{u.role}</td>
                    <td>
                      <button onClick={() => handleEditClick(u)}>Modifier</button>
                      <button onClick={() => handleDeleteUser(u.id)}>Supprimer</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPC;
