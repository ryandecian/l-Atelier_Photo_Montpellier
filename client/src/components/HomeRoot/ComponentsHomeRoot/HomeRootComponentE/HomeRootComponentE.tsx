import style from "../../../StyleRootComponent.module.css"
import GeneratorCardAvisClient from "../../../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientHomeControllerData from "../../AvisClientHomeControllerData";

function HomeRootComponentE() {
    return (
        <section className={`${style.HomeRootComponentE} ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Des photos, des expériences, des mots, ils m'ont fait confiance !
                </h2>
            </header>

            <GeneratorCardAvisClient avisClients={AvisClientHomeControllerData}/>
        </section>
    );
}

export default HomeRootComponentE;
