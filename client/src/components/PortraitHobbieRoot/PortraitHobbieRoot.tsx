import style from "../StyleRootComponent.module.css";
// import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";
// import AvisClientPortraitHobbieControllerData from "./AvisClientPortraitHobbieControllerData";

import PortraitHobbieRootComponentA from "./ComponentPortraitHobbieRoot/PortraitHobbieRootComponentA/PortraitHobbieRootComponentA";

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

            {/* H2 nb 1 : Parce que chaque Hobbie a son histoire, offrez-vous un portrait fidèle à votre complicité. */}
            {/* H2 nb 2 : Votre passion raconte une histoire : faisons-la parler en images. */}

            {/* Container B */}

            {/* Container C */}

            {/* Container D : Avis client */}
            {/* <GeneratorCardAvisClient avisClients={AvisClientPortraitHobbieControllerData}/> */}
        </section>
    )
}

export default PortraitHobbieRoot;
