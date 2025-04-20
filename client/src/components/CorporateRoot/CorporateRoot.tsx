import style from "../StyleRootComponent.module.css";
import AvisClientCorporateControllerData from "./AvisClientCorporateControllerData";
import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";

import CorporateRootComponentA from "./ComponentsCorporateRoot/CorporateRootComponentA/CorporateRootComponentA";
import CorporateRootComponentB from "./ComponentsCorporateRoot/CorporateRootComponentB/CorporateRootComponentB";
import CorporateRootComponentC from "./ComponentsCorporateRoot/CorporateRootComponentC/CorporateRootComponentC";

function CorporateRoot() {
    return (
        <section className={`CorporateRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Corporate : valorisez votre image professionnelle !"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}
            <CorporateRootComponentA />

            {/* Container B : Client cible Entreprise */}
            < CorporateRootComponentB />

            {/* Container C : Client cible Entreprise */}
            < CorporateRootComponentC />

            {/* Container D : Avis clients */}
            <GeneratorCardAvisClient
                avisClients={AvisClientCorporateControllerData}
            />
        </section>
    )
}

export default CorporateRoot;
