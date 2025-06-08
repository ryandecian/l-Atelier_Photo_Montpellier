import style from "../StyleRootComponent.module.css";
import useScrollToHash from "../../hook/useScrollToHash";

import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitDuoControllerData from "./AvisClientPortraitDuoControllerData";

import TarifCardRoot from "../TarifsCard/TarifsCardRoot";
import { TarifsPortraitDuo, MailtoLinkPortraitDuo } from "./TarifsPortraitDuo";

import PortraitDuoRootComponentA from "./ComponentPortraitDuoRoot/PortraitDuoRootComponentA/PortraitDuoRootComponentA";
import PortraitDuoRootComponentB from "./ComponentPortraitDuoRoot/PortraitDuoRootComponentB/PortraitDuoRootComponentB";
import PortraitDuoRootComponentC from "./ComponentPortraitDuoRoot/PortraitDuoRootComponentC/PortraitDuoRootComponentC";

function PortraitDuoRoot() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`PortraitDuoRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait duo et couple : immortalisez votre complicité avec authenticité"}
                </h1>
            </header>

            {/* Container A */}
            <PortraitDuoRootComponentA />

            {/* Container B */}
            <PortraitDuoRootComponentB />

            {/* Container C */}
            <PortraitDuoRootComponentC />

            {/* Container D : Carte des tarifs */}
            <TarifCardRoot id="tarifs-portrait-duo" tarifs={TarifsPortraitDuo} mailtoLink={MailtoLinkPortraitDuo} />

            {/* Container D : Avis client */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitDuoControllerData}/>
        </section>
    )
}

export default PortraitDuoRoot;
