import style from "../../StyleRootComponent.module.css";

function Blog_20250616_Root() {
    return (
        <section className={`Blog_20250616_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Photo professionnelle pour CV : comment capter l’attention des recruteurs à Montpellier`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Découvrez pourquoi un portrait professionnel soigné peut faire toute la différence sur votre CV et 
                renforcer l’impact de votre candidature auprès des recruteurs.
            </p>

            <h2 className={style.TitleH2}>
                {`Pourquoi ajouter une photo professionnelle à son CV ?`}
            </h2>
        </section>
    );
}

export default Blog_20250616_Root;
