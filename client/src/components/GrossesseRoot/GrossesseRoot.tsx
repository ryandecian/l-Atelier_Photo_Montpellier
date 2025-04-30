import style from "../StyleRootComponent.module.css";
// import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";

import GrossesseRootComponentA from "./ComponentsGrossesseRoot/GrossesseRootComponentA/GrossesseRootComponentA";

function GrossesseRoot() {
    return (
        <section className={`GrossesseRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Grossesse & nouveau-né : capturer la magie de la vie dès ses premiers instants !"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}
            <GrossesseRootComponentA />

            {/* Container B : Client cible Particulier */}
            {/* <GrossesseRootComponentB /> */}

            {/* Container B : Client cible Entreprise */}

            {/* Container C : Client cible Entreprise */}

            {/* Container D : Avis clients */}
        </section>
    )
}

export default GrossesseRoot;
