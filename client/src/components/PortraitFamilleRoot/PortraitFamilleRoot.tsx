import style from "../StyleRootComponent.module.css";

import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitFamilleControllerData from "./AvisClientPortraitFamilleControllerData";

import TarifCardRoot from "../TarifsCard/TarifsCardRoot";
import { TarifsPortraitFamille, MailtoLinkPortraitFamille } from "./TarifsPortraitFamille";

import PortraitFamilleRootComponentA from "./ComponentPortraitFamilleRoot/PortraitFamilleRootComponentA/PortraitFamilleRootComponentA";
import PortraitFamilleRootComponentB from "./ComponentPortraitFamilleRoot/PortraitFamilleRootComponentB/PortraitFamilleRootComponentB";

function PortraitFamilleRoot() {
    return (
        <section className={`PortraitFamilleRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Famille : créez des souvenirs précieux avec ceux que vous aimez."}
                </h1>
            </header>

            {/* Container A */}
            <PortraitFamilleRootComponentA />

            {/* Container B */}
            <PortraitFamilleRootComponentB />

            {/* Container C */}
            <TarifCardRoot id="tarifs-portrait-famille" tarifs={TarifsPortraitFamille} mailtoLink={MailtoLinkPortraitFamille} />

            {/* Container D : Avis client */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitFamilleControllerData} />
        </section>
    )
}

export default PortraitFamilleRoot;
