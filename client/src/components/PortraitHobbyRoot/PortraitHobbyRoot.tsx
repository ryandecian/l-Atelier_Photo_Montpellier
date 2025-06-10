import style from "../StyleRootComponent.module.css";
import useScrollToHash from "../../hook/useScrollToHash";

import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitHobbyControllerData from "./AvisClientPortraitHobbyControllerData";

import TarifCardRoot from "../TarifsCard/TarifsCardRoot";
import { TarifsPortraitHobby, MailtoLinkPortraitHobby } from "./TarifsPortraitHobby";

import PortraitHobbyRootComponentA from "./ComponentPortraitHobbyRoot/PortraitHobbyRootComponentA/PortraitHobbyRootComponentA";
import PortraitHobbyRootComponentB from "./ComponentPortraitHobbyRoot/PortraitHobbyRootComponentB/PortraitHobbyRootComponentB";

function PortraitHobbyRoot() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`PortraitHobbyRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Hobby : Mettez en lumière ce qui vous anime !"}
                </h1>
            </header>

            {/* Container A */}
            <PortraitHobbyRootComponentA />

            {/* Container B */}
            <PortraitHobbyRootComponentB />

            {/* Container C : Carte tarifs */}
            <TarifCardRoot id="tarifs-portrait-hobby" tarifs={TarifsPortraitHobby} mailtoLink={MailtoLinkPortraitHobby} />

            {/* Container D : Avis client */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitHobbyControllerData}/>
        </section>
    )
}

export default PortraitHobbyRoot;
