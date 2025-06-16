import style from "../StyleRootComponent.module.css";
import useScrollToHash from "../../hook/useScrollToHash";

import AvisClientPortraitCorporateControllerData from "./AvisClientPortraitCorporateControllerData";
import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";

import TarifCardCorporate from "./ComponentsPortraitCorporateRoot/TarifsComponentsCorporate/TarifsCardCorporate";
import { TarifsPortraitCorporate, MailtoLinkPortraitCorporate } from "./TarifsPortraitCorporate";

import PortraitCorporateRootComponentA from "./ComponentsPortraitCorporateRoot/PortraitCorporateRootComponentA/PortraitCorporateRootComponentA";
import PortraitCorporateRootComponentB from "./ComponentsPortraitCorporateRoot/PortraitCorporateRootComponentB/PortraitCorporateRootComponentB";
import PortraitCorporateRootComponentC from "./ComponentsPortraitCorporateRoot/PortraitCorporateRootComponentC/PortraitCorporateRootComponentC";

function PortraitCorporateRoot() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section id="PortraitCorporateRoot" className={`PortraitCorporateRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Corporate : Valorisez votre image professionnelle !"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}
            <PortraitCorporateRootComponentA />

            {/* Container B : Client cible Entreprise */}
            <PortraitCorporateRootComponentB />

            {/* Container C : Client cible Entreprise */}
            <PortraitCorporateRootComponentC />

            {/* Container D : Carte des tarifs */}
            <TarifCardCorporate id="tarifs-portrait-corporate" tarifs={TarifsPortraitCorporate} mailtoLink={MailtoLinkPortraitCorporate} />

            {/* Container E : Avis clients */}
            <GeneratorCardAvisClient
                avisClients={AvisClientPortraitCorporateControllerData}
            />
        </section>
    )
}

export default PortraitCorporateRoot;
