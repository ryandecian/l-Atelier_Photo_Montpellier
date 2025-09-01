import css from "./RegisterRoot.module.css";
import style from "../../StyleRootComponent.module.css";

function RegisterRoot() {
    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Créez votre compte !
                </h1>
            </header>
        </div>
    );
}

export default RegisterRoot;
