import style from "../../../StyleRootComponent.module.css";
import css from "./CorporateRootComponentC.module.css"
import externalLinks from "../../../../constants/externalLinks";

function CorporateRootComponentC() {
    return (
        <section className={`CorporateRootComponentC ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Un service clé en main pour les entreprises : simplicité et efficacité !"}
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    Faire réaliser un portrait corporate ne 
                    <span className={style.SpanBold}>
                        {" doit pas être une contrainte. "}
                    </span>
                    Mon service clé en main est conçu pour s’adapter à votre emploi du temps tout en garantissant un rendu professionnel et fidèle 
                    à ce que vous voulez transmettre en terme de valeur d’entreprise.  
                </p>

                <h3 className={css.TitleH3}>
                    Shooting en entreprise ou en studio : à vous de choisir
                </h3>
                <p className={style.TextP4}>
                    - En entreprise : 
                    <span className={style.SpanBold}>
                        {" Je me déplace avec mon matériel "}
                    </span>
                    pour une séance fluide et optimisée, sans perturber votre organisation. Idéal pour capter l’ambiance de votre environnement 
                    professionnel et renforcer votre image de marque. <br />

                    - En studio : Une maîtrise parfaite de la lumière et 
                    <span className={style.SpanBold}>
                        {" un cadre neutre "}
                    </span>
                    qui met en avant votre personnalité. L’idéal pour un rendu intemporel, élégant et homogène, parfait pour une équipe entière ou 
                    une mise en valeur individuelle.  
                </p>

                <h3 className={css.TitleH3}>
                    Organisation optimisée : 
                </h3>
                <p className={style.TextP4}>
                    Je mets en place un 
                    <span className={style.SpanBold}>
                        {" planning structuré "}
                    </span>
                    pour éviter les temps d’attente et assurer un déroulement fluide. Chaque collaborateur dispose d’un créneau précis, avec 
                    <span className={style.SpanBold}>
                        {" une séance rapide et efficace. "}
                    </span>
                </p>

                <h3 className={css.TitleH3}>
                    Mise en confiance et direction naturelle
                </h3>
                <p className={style.TextP4}>
                    Même les plus réticents à l’objectif se sentiront à l’aise. Je guide avec bienveillance pour obtenir un portrait naturel, 
                    professionnel et authentique. 
                </p>

                <h3 className={css.TitleH3}>
                    Uniformité et cohérence visuelle : 
                </h3>
                <p className={style.TextP4}>
                    Que vous soyez une équipe de 5 ou de 50 personnes, je veille à une harmonisation des portraits pour 
                    <span className={style.SpanBold}>
                        {" un rendu homogène "}
                    </span>
                    et cohérent sur votre site web, LinkedIn et autres supports de communication. 
                </p>

                <h3 className={css.TitleH3}>
                    Livraison rapide et adaptée à vos besoins : 
                </h3>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"Les photos sont soigneusement retouchées "}
                    </span>
                    et livrées sous plusieurs formats, optimisés pour LinkedIn, site internet, presse ou supports print. 
                </p>

                <p className={style.TextP4}>
                    Besoin d’un conseil ? {" "}
                    <span className={style.SpanLink}>
                        <a href={externalLinks.emailAnne}>
                            {" Discutons de votre projet ! "}
                        </a>
                    </span>
                </p>
            </article>
        </section>
    )
}

export default CorporateRootComponentC;
