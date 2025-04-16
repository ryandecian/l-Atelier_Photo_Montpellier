import style from "../StyleRootComponent.module.css";

import CorporateRootComponentA from "./ComponentsCorporateRoot/CorporateRootComponentA/CorporateRootComponentA";
import CorporateRootComponentB from "./ComponentsCorporateRoot/CorporateRootComponentB/CorporateRootComponentB";
import CorporateRootComponentC from "./ComponentsCorporateRoot/CorporateRootComponentC/CorporateRootComponentC";

function CorporateRoot() {
    return (
        <section className={`CorporateRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"L'importance de votre signature visuelle : bien plus qu'une simple photo !"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}
            <CorporateRootComponentA />

            {/* Container B : Client cible Entreprise */}
            < CorporateRootComponentB />

            {/* Container C : Client cible Entreprise */}
            < CorporateRootComponentC />
        </section>
    )
}

export default CorporateRoot;
