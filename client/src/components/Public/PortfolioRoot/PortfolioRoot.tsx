import style from "../StyleRootComponent.module.css";
import PortfolioRootComponentA from "./ComponentPortfolioRoot/PortfolioRootComponentA/PortfolioRootComponentA";
import PortfolioRootComponentB from "./ComponentPortfolioRoot/PortfolioRootComponentB/PortfolioRootComponentB";
import PortfolioRootComponentC from "./ComponentPortfolioRoot/PortfolioRootComponentC/PortfolioRootComponentC";
import PortfolioRootComponentD from "./ComponentPortfolioRoot/PortfolioRootComponentD/PortfolioRootComponentD";
import PortfolioRootComponentE from "./ComponentPortfolioRoot/PortfolioRootComponentE/PortfolioRootComponentE";
import PortfolioRootComponentF from "./ComponentPortfolioRoot/PortfolioRootComponentF/PortfolioRootComponentF";

function PortfolioRoot() {
    return (
        <section className={`PortfolioRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Mon Portfolio photo - L'Atelier Photo Montpellier</h1>
            </header>

            {/* Composant A : Introduction */}
            <PortfolioRootComponentA />

            {/* Composant B : Photographies de paysages natunels */}
            <PortfolioRootComponentB />

            {/* Composant C : Photographies de rue - Street Photography */}
            <PortfolioRootComponentC />

            {/* Composant D : Photographies urbaine et architectures */}
            <PortfolioRootComponentD />

            {/* Composant E : Un regard artistique multiple */}
            <PortfolioRootComponentE />

            {/* Composant F : Portrait de particuliers et professionnels */}
            <PortfolioRootComponentF />
    </section>
  );
}


export default PortfolioRoot;
