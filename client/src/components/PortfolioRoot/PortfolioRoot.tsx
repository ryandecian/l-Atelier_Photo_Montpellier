import style from "../StyleRootComponent.module.css";
import PortfolioRootComponentA from "./ComponentPortfolioRoot/PortfolioRootComponentA/PortfolioRootComponentA";
import PortfolioRootComponentB from "./ComponentPortfolioRoot/PortfolioRootComponentB/PortfolioRootComponentB";
import PortfolioRootComponentC from "./ComponentPortfolioRoot/PortfolioRootComponentC/PortfolioRootComponentC";
import PortfolioRootComponentD from "./ComponentPortfolioRoot/PortfolioRootComponentD/PortfolioRootComponentD";
import PortfolioRootComponentE from "./ComponentPortfolioRoot/PortfolioRootComponentE/PortfolioRootComponentE";

function PortfolioRoot() {
    return (
        <section className={`PortfolioRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Mon portfolio photo - L'Atelier Photo Montpellier</h1>
            </header>

            <p className={style.TextP4}>
                Bienvenue dans mon portfolio. Je suis photographe professionnelle à Montpellier, et ce que vous allez découvrir ici est un aperçu de 
                mon univers visuel. Je photographie aussi bien les gens que les lieux, les instants posés comme ceux saisis sur le vif. Ce portfolio 
                vous propose une sélection de mes travaux personnels et professionnels, à travers plusieurs catégories : paysages, photographie de rue, 
                images urbaine, portraits...
            </p>

            <p className={style.TextP4}>
                Mon approche est guidée par la lumière naturelle ou artificielle comme le flash, la recherche de cadrages soignés, et une sensibilité 
                artistique nourrie par l’émotion. Que ce soit en studio, en pleine nature ou en ville, chaque photo est l’occasion de raconter une 
                histoire, de révéler une ambiance, une personnalité ou une harmonie.
            </p>

            <p className={style.TextP4}>
                Photographe à Montpellier, je me déplace dans la région pour réaliser des portraits de particuliers, de futurs mariés, de familles, 
                ou de collaborateurs en entreprise. En parallèle, mon œil s’exerce aussi à capter la beauté de l’environnement, qu’il soit sauvage ou 
                urbain.
            </p>


            {/* Composant B : Photographies de paysages natunels */}
            <PortfolioRootComponentB />

            {/* Composant C : Photographies de rue - Street Photography */}
            <PortfolioRootComponentC />

            {/* Composant D : Photographies urbaine et architectures */}
            <PortfolioRootComponentD />

            {/* Composant E : Un regard artistique multiple */}
            <PortfolioRootComponentE />
            {/* Composant A : Portrait de particuliers et professionnels */}
            <PortfolioRootComponentA />
    </section>
  );
}


export default PortfolioRoot;
