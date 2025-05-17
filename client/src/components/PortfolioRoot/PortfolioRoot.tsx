import style from "../StyleRootComponent.module.css";

function PortfolioRoot() {
    return (
        <section className={`PortfolioRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portfolio"}
                </h1>
            </header>

            {/* Container A : Client cible Particulier */}

            {/* Container B : Client cible Entreprise */}

            {/* Container C : Client cible Entreprise */}

            {/* Container D : Avis clients */}
        </section>
    )
}

export default PortfolioRoot;
