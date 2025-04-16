import style from "../StyleRootComponent.module.css";

import CorporateRootComponentA from "./ComponentsCorporateRoot/CorporateRootComponentA/CorporateRootComponentA";
import CorporateRootComponentB from "./ComponentsCorporateRoot/CorporateRootComponentB/CorporateRootComponentB";

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

            {/* Container A : Client cible Entreprise */}
            < CorporateRootComponentB />
        </section>
    )
}

export default CorporateRoot;
