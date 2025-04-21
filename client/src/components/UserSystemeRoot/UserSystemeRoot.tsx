// Ne touche pas à l'import de hooks et types
import { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../hook/useAuthCheck";
import useLogout from "../../hook/useLogout";
import DataUserType from "../../types/dataUser.type";
import style from "./UserSystemeRoot.module.css";

function UserSystemeRoot() {
  const { isLoggedIn, userInfo, isChecking } = useAuthCheck();
  const logout = useLogout();
  const navigate = useNavigate();

  const [users, setUsers] = useState<DataUserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editedUser, setEditedUser] = useState<Partial<DataUserType>>({});
  const [successMessage, setSuccessMessage] = useState("");

  // 🔐 Auth + rôle admin
  useEffect(() => {
    if (isChecking) return;

    if (!isLoggedIn || !userInfo) {
      navigate("/login");
      return;
    }

    if (userInfo.role !== "admin") {
      navigate("/compte");
      return;
    }

    fetch(`${import.meta.env.VITE_URL_SERVER_LAPM}/users`, {
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Erreur de récupération.");
        }
        return res.json();
      })
      .then((data) => setUsers(data.data || []))
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : "Erreur inconnue.")
      )
      .finally(() => setLoading(false));
  }, [isChecking, isLoggedIn, userInfo, navigate]);

  const handleDeleteUser = async (id: number) => {
    if (!confirm("⚠️ Supprimer cet utilisateur ?")) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_URL_SERVER_LAPM}/users/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Échec de la suppression");

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erreur inconnue.");
    }
  };

  const handleEditClick = (user: DataUserType) => {
    setEditUserId(user.id);
    setEditedUser({ ...user });
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
    setEditedUser({});
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = async () => {
    const original = users.find((u) => u.id === editUserId);
    if (!original) return alert("Utilisateur introuvable.");

    const updatedUser = {
      firstname: editedUser.firstname ?? original.firstname,
      lastname: editedUser.lastname ?? original.lastname,
      email: editedUser.email ?? original.email,
      address: editedUser.address ?? original.address,
      role: editedUser.role ?? original.role,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_URL_SERVER_LAPM}/users/${editUserId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) throw new Error("Erreur lors de la modification.");

      setUsers((prev) =>
        prev.map((u) => (u.id === editUserId ? { ...u, ...updatedUser } : u))
      );

      setEditUserId(null);
      setEditedUser({});
      setSuccessMessage("✅ Modifications enregistrées avec succès.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erreur inconnue.");
    }
  };

  if (isChecking || loading) return <p>Chargement...</p>;

  return (
    <div className={style.UserSystemeRoot}>
      <div className={style.topBar}>
        <h1>👑 Interface Admin</h1>
        <button onClick={logout} className={style.logoutBtn}>🚪 Déconnexion</button>
      </div>

      {successMessage && <p className={style.success}>{successMessage}</p>}
      {error && <p className={style.error}>{error}</p>}

      {!error && (
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

export default UserSystemeRoot;
