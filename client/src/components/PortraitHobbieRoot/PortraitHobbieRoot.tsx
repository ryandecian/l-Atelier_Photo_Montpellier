import style from "../StyleRootComponent.module.css";
// import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
// import AvisClientPortraitHobbieControllerData from "./AvisClientPortraitHobbieControllerData";

import PortraitHobbieRootComponentA from "./ComponentPortraitHobbieRoot/PortraitHobbieRootComponentA/PortraitHobbieRootComponentA";
import PortraitHobbieRootComponentB from "./ComponentPortraitHobbieRoot/PortraitHobbieRootComponentB/PortraitHobbieRootComponentB";

function PortraitHobbieRoot() {
    return (
        <section className={`PortraitHobbieRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait Hobby : mettez en lumière ce qui vous anime !"}
                </h1>
            </header>

            {/* Container A */}
            <PortraitHobbieRootComponentA />

            {/* Container B */}
            <PortraitHobbieRootComponentB />

            {/* Container C */}

            {/* Container D : Avis client */}
            {/* <GeneratorCardAvisClient avisClients={AvisClientPortraitHobbieControllerData}/> */}
        </section>
    )
}

export default PortraitHobbieRoot;
