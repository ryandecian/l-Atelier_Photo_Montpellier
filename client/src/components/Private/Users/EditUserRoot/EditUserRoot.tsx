import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import css from "./EditUserRoot.module.css";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import DataUserType from "../../../../types/dataUser.type";

function EditUserRoot() {
    const userInfo = useLockedPage("user");
    const navigate = useNavigate();

    const [editedUser, setEditedUser] = useState<Partial<DataUserType>>({});
    const [successMessage, setSuccessMessage] = useState("");

    // Préremplissage du formulaire dès que userInfo est disponible/mis à jour
    useEffect(() => {
        if (userInfo !== null) {
            setEditedUser(userInfo);
        }
    }, [userInfo]);

    if (!userInfo) return <p>Chargement...</p>;

    // Gestion des modifications de formulaire
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser((prev) => ({ ...prev, [name]: value }));
    };

    // Envoi des modifications au serveur
    const handleSave = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_DOMAIN_API_SERVER}/users/me`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // Auth via cookie HttpOnly
                body: JSON.stringify(editedUser),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.message || "Erreur lors de la mise à jour.");
            }

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
        navigate("/login", { replace: true });
    };

    return (
        <div className={css.EditUserRoot}>
            <div className={css.topBar}>
                <h1>👤 Mon Compte</h1>
                <button onClick={handleLogout} className={css.logoutBtn}>
                    Déconnexion
                </button>
            </div>

            {successMessage && <p className={css.success}>{successMessage}</p>}

            <div className={css.form}>
                <label htmlFor="firstname">Prénom :</label>
                <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    autoComplete="given-name"
                    value={editedUser.firstname ?? ""}
                    onChange={handleInputChange}
                />

                <label htmlFor="lastname">Nom :</label>
                <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    autoComplete="family-name"
                    value={editedUser.lastname ?? ""}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email :</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={editedUser.email ?? ""}
                    onChange={handleInputChange}
                />

                <label htmlFor="address">Adresse :</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    value={editedUser.address ?? ""}
                    onChange={handleInputChange}
                />

                <button onClick={handleSave} className={css.ButtonSave}>
                    💾 Enregistrer les modifications
                </button>
            </div>
        </div>
    );
}

export default EditUserRoot;
