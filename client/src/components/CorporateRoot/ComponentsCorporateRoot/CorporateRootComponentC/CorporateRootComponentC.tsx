import style from "../../../StyleRootComponent.module.css";
import { LinkExt } from "../../../../router/router";

function CorporateRootComponentC() {
    return (
        <section className={`CorporateRootComponentC ${style.ContainerRootRacine}`}>
            <head className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Un service clé en main pour les entreprises : simplicité et efficacité !"}
                </h2>
            </head>
        </section>
    )
}

export default CorporateRootComponentC;
