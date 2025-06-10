import style from "../StyleRootComponent.module.css";
import useScrollToHash from "../../hook/useScrollToHash";

import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitHobbieControllerData from "./AvisClientPortraitHobbyControllerData";

import TarifCardRoot from "../TarifsCard/TarifsCardRoot";
import { TarifsPortraitHobbie, MailtoLinkPortraitHobbie } from "./TarifsPortraitHobby";

import PortraitHobbieRootComponentA from "./ComponentPortraitHobbyRoot/PortraitHobbyRootComponentA/PortraitHobbyRootComponentA";
import PortraitHobbieRootComponentB from "./ComponentPortraitHobbyRoot/PortraitHobbyRootComponentB/PortraitHobbyRootComponentB";

function PortraitHobbieRoot() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`PortraitHobbieRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Hobby : Mettez en lumière ce qui vous anime !"}
                </h1>
            </header>

            {/* Container A */}
            <PortraitHobbieRootComponentA />

            {/* Container B */}
            <PortraitHobbieRootComponentB />

            {/* Container C : Carte tarifs */}
            <TarifCardRoot id="tarifs-portrait-hobbie" tarifs={TarifsPortraitHobbie} mailtoLink={MailtoLinkPortraitHobbie} />

            {/* Container D : Avis client */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitHobbieControllerData}/>
        </section>
    )
}

export default PortraitHobbieRoot;
