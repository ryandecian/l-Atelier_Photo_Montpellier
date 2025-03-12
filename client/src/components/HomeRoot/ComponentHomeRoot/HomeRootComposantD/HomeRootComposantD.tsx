import style from "./HomeRootComposantD.module.css"
import GeneratorCardAvisClient from "../../../GeneratorCardAvisClient/GeneratorCardAvisClient";
import ControllerDataAvisClientHome from "../../ControllerDataAvisClient";

function HomeRootComposantD() {
    return (
        <section className={style.HomeRootComposantD}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Des photos, des expériences, des mots, ils m'ont fait confiance !
                </h2>
            </header>

            <GeneratorCardAvisClient avisClients={ControllerDataAvisClientHome}/>
        </section>
    );
}

export default HomeRootComposantD;
