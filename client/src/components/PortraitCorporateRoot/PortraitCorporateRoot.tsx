import style from "../StyleRootComponent.module.css";
import AvisClientPortraitCorporateControllerData from "./AvisClientPortraitCorporateControllerData";
import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";

import PortraitCorporateRootComponentA from "./ComponentsPortraitCorporateRoot/PortraitCorporateRootComponentA/PortraitCorporateRootComponentA";
import PortraitCorporateRootComponentB from "./ComponentsPortraitCorporateRoot/PortraitCorporateRootComponentB/PortraitCorporateRootComponentB";
import PortraitCorporateRootComponentC from "./ComponentsPortraitCorporateRoot/PortraitCorporateRootComponentC/PortraitCorporateRootComponentC";

function PortraitCorporateRoot() {
    return (
        <section className={`PortraitCorporateRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Corporate : valorisez votre image professionnelle !"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}
            <PortraitCorporateRootComponentA />

            {/* Container B : Client cible Entreprise */}
            < PortraitCorporateRootComponentB />

            {/* Container C : Client cible Entreprise */}
            < PortraitCorporateRootComponentC />

            {/* Container D : Avis clients */}
            <GeneratorCardAvisClient
                avisClients={AvisClientPortraitCorporateControllerData}
            />
        </section>
    )
}

export default PortraitCorporateRoot;
