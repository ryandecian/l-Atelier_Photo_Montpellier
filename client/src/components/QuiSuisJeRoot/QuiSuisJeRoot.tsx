import style from "../StyleRootComponent.module.css";

function QuiSuisJeRoot() {

    return (
        <section className={`QuiSuisJe ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait Solo : Une séance photos pour renouer avec votre image !
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
