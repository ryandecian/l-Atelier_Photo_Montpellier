/* Import des modules CSS */
import style from "../../../StyleRootComponent.module.css";
import css from "./DataUserRoot.module.css";

/* Import des composants React */
import { useNavigate } from "react-router-dom";

/* Import des Hooks */
import { useLockedPage_Hook } from "../../../../hook/useLockedPage.security.hook";

function DataUser_Root() {
    const userInfo = useLockedPage_Hook("all");
    const navigate = useNavigate();

    return (
        <div className={style.ContainerRootRacine} style={{ position: "relative" }}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Mes informations</h1>
            </header>

            <div className={css.ContainerRoot}>
                <div className={css.FormGroup}>
                    <label className={css.Label}>Prénom</label>
                    <input
                        type="text"
                        value={userInfo?.firstname || ""}
                        disabled
                        className={css.Input}
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label}>Nom</label>
                    <input
                        type="text"
                        value={userInfo?.lastname || ""}
                        disabled
                        className={css.Input}
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label}>Adresse</label>
                    <input
                        type="text"
                        value={userInfo?.address || ""}
                        disabled
                        className={css.Input}
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label}>Adresse e-mail</label>
                    <input
                        type="email"
                        value={userInfo?.email || ""}
                        disabled
                        className={css.Input}
                    />
                </div>
            </div>
            <div className={style.ContainerRoot}>
                <button
                    className={css.EditButton}
                    onClick={() => navigate("/compte/user/edit-user")}
                >
                    Modifier
                </button>
            </div>
        </div>
    );
}

export default DataUser_Root;
