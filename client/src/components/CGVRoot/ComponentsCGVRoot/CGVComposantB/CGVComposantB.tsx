import style from "./CGVComposantB.module.css";

function CGVComposantB() {
    return (
        <section className={style.CGVComposantB}>
                <h2 className={style.TitleH2}>
                    Partie 2 - Dispositions spécifiques aux particuliers
                </h2>

                {/* Container 5 : Objet */}
                <article className={style.ContainerArticle}>
                    <h3 className={style.TitleH3}>
                        Article 5 – Déroulement de la séance et obligations du client
                    </h3>

                    <ul className={style.ContainerList}>
                        <li className={style.ElementLi}></li>
                        <li className={style.ElementLi}></li>
                    </ul>
                </article>
                
                <article className={style.ContainerArticle}>
                    <h3 className={style.TitleH3}></h3>
                    <p className={style.Text}></p>
                    <h4 className={style.TitleH4}></h4>
                    <ul className={style.ContainerList}>
                        <li className={style.ElementLi}></li>
                    </ul>
                </article>

                <article className={style.ContainerArticle}></article>
                <article className={style.ContainerArticle}></article>
        </section>
    );
}

export default CGVComposantB;
