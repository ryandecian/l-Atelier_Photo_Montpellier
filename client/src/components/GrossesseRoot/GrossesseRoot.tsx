import style from "../StyleRootComponent.module.css";
import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientGrossesseControllerData from "./AvisClientGrossesseControllerData";

import GrossesseRootComponentA from "./ComponentsGrossesseRoot/GrossesseRootComponentA/GrossesseRootComponentA";
import GrossesseRootComponentB from "./ComponentsGrossesseRoot/GrossesseRootComponentB/GrossesseRootComponentB";
import GrossesseRootComponentC from "./ComponentsGrossesseRoot/GrossesseRootComponentC/GrossesseRootComponentC";

function GrossesseRoot() {
    return (
        <section className={`GrossesseRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Grossesse & nouveau-né : capturer la magie de la vie dès ses premiers instants !"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}
            <GrossesseRootComponentA />

            {/* Container B : Client cible Particulier */}
            <GrossesseRootComponentB />

            {/* Container C : Client cible Entreprise */}
            <GrossesseRootComponentC />

            {/* Container D : Avis clients */}
            <GeneratorCardAvisClient avisClients={AvisClientGrossesseControllerData} />
        </section>
    )
}

export default GrossesseRoot;
