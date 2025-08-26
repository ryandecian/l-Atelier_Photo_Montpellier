import { useNavigate } from "react-router-dom";
import css from "./EditUserRoot.module.css";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";

function UserRoot() {
    const userInfo = useLockedPage("user");
    const navigate = useNavigate();

    return (
        <div className={css.ProfileContainer}>
            <div className={css.TopBar}>
                <h1 className={css.Title}>Profil</h1>
                <button className={css.EditButton} onClick={() => navigate("/mon-compte/edit")}>
                    Modifier
                </button>
            </div>

            <div className={css.FormContainer}>
                <div className={css.FormGroup}>
                    <label>Prénom</label>
                    <input type="text" value={userInfo?.firstname || ""} disabled />
                </div>

                <div className={css.FormGroup}>
                    <label>Nom</label>
                    <input type="text" value={userInfo?.lastname || ""} disabled />
                </div>

                <div className={css.FormGroup}>
                    <label>Adresse</label>
                    <input type="text" value={userInfo?.address || ""} disabled />
                </div>

                <div className={css.FormGroup}>
                    <label>Adresse e-mail</label>
                    <input type="email" value={userInfo?.email || ""} disabled />
                </div>
            </div>
        </div>
    );
}

export default UserRoot;
