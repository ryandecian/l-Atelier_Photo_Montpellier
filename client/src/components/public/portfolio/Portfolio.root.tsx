/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";

/* Import des Components */
import { PortfolioA_Component } from "./components/PortfolioA.component";
import { PortfolioB_Component } from "./components/PortfolioB.component";
import { PortfolioC_Component } from "./components/PortfolioC.component";
import { PortfolioD_Component } from "./components/PortfolioD.component";
import { PortfolioE_Component } from "./components/PortfolioE.component";
import { PortfolioF_Component } from "./components/PortfolioF.component";

function Portfolio_Root() {
    return (
        <section className={`Portfolio_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Mon Portfolio photo - L'Atelier Photo Montpellier</h1>
            </header>

            {/* Composant A : Introduction */}
            <PortfolioA_Component />

            {/* Composant B : Photographies de paysages naturels */}
            <PortfolioB_Component />

            {/* Composant C : Photographies de rue - Street Photography */}
            <PortfolioC_Component />

            {/* Composant D : Photographies urbaine et architectures */}
            <PortfolioD_Component />

            {/* Composant E : Un regard artistique multiple */}
            <PortfolioE_Component />

            {/* Composant F : Portrait de particuliers et professionnels */}
            <PortfolioF_Component />
    </section>
  );
}

export default Portfolio_Root;
