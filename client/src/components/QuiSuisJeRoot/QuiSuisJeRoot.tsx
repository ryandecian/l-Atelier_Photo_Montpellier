import style from "../StyleRootComponent.module.css";

function QuiSuisJeRoot() {

    return (
        <section className={`QuiSuisJe ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Mon Parcours de Photographe : De l'Argentique au Numérique, Une Passion Retrouvée
                </h1>
            </header>

            {/* Container A */}
            {/* <QuiSuisJeComponentA /> */}

            {/* Container B */}
            {/* <QuiSuisJeComponentB /> */}
        </section>
    )
}

export default QuiSuisJeRoot;
