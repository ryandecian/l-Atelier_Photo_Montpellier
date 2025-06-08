import style from "../StyleRootComponent.module.css";
import useScrollToHash from "../../hook/useScrollToHash";

import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitGrossesseControllerData from "./AvisClientPortraitGrossesseControllerData";
import TarifCardRoot from "../TarifsCard/TarifsCardRoot";
import { TarifsPortraitGrossesse, MailtoLinkPortraitGrossesse } from "./TarifsPortraitGrossesse";

import PortraitGrossesseRootComponentA from "./ComponentsPortraitGrossesseRoot/PortraitGrossesseRootComponentA/PortraitGrossesseRootComponentA";
import PortraitGrossesseRootComponentB from "./ComponentsPortraitGrossesseRoot/PortraitGrossesseRootComponentB/PortraitGrossesseRootComponentB";
import PortraitGrossesseRootComponentC from "./ComponentsPortraitGrossesseRoot/PortraitGrossesseRootComponentC/PortraitGrossesseRootComponentC";

function PortraitGrossesseRoot() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`PortraitGrossesseRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Grossesse & nouveau-né : capturer la magie de la vie dès ses premiers instants !"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}
            <PortraitGrossesseRootComponentA />

            {/* Container B : Client cible Particulier */}
            <PortraitGrossesseRootComponentB />

            {/* Container C : Client cible Entreprise */}
            <PortraitGrossesseRootComponentC />

            {/* Container D : Carte Tarifs */}
            <TarifCardRoot id="tarifs-portrait-grossesse" tarifs={TarifsPortraitGrossesse} mailtoLink={MailtoLinkPortraitGrossesse} />

            {/* Container F : Avis clients */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitGrossesseControllerData} />
        </section>
    )
}

export default PortraitGrossesseRoot;
