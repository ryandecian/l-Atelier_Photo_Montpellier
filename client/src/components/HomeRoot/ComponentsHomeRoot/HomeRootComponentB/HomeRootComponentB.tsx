import style from "../../../StyleRootComponent.module.css";
import ListDataRouter from "../../../../router/router";
import { Link } from "react-router-dom";

function HomeRootComponentB() {
    return (
        <section className={`${style.HomeRootContainerB} ${style.ContainerRoot}`}> 
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    J'observe, je vous mets à l'aise, je fige l'instant avec justesse.
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    En tant que {" "}
                    <span className={style.SpanBold}>
                        {"photographe professionnelle"}
                    </span> 
                    {""} installée à Montpellier et {" "}
                    <span className={style.SpanBold}>
                        {"spécialisée en portraits"}
                    </span>
                    {" "} – qu’ils soient {" "} 
                    <span className={style.SpanLink}>
                        <Link to={ListDataRouter[11].path}>
                            {"corporate"}
                        </Link>
                    </span>
                    , {" "}
                    <span className={style.SpanLink}>
                        <Link to={ListDataRouter[12].path}>
                            {"lifestyle"}
                        </Link>
                    </span>
                    , {" "} 
                    réalisés en lumière naturelle ou au flash – je mets tout en œuvre pour saisir la 
                    personnalité unique de chacun. La photographie de portrait professionnel 
                    n’est pas seulement une technique, c’est une véritable passion que je 
                    développe afin que chacun et chacune puisse porter un regard sur lui 
                    (elle) positif et valorisant.
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"Ma vision du mariage"}
                    </span>
                    {" "} se décline sous la forme d’un reportage photographique. 
                    Plutôt que de créer de simples poses figées, je privilégie l’instantanéité 
                    et la spontanéité des émotions vécues durant la cérémonie. Je cherche à 
                    être au plus près de tous ces instants afin qu’ils restent gravés, et cette 
                    approche me permet de {" "}
                    <span className={style.SpanBold}>
                        {"raconter une histoire visuelle complète"}
                    </span>
                    , où chaque image capte la complicité, la tendresse et l’authenticité du grand jour.
                </p>
            </article>
        </section>
    );
}

export default HomeRootComponentB;
