import styleRoot from "../../../StyleRootComponent.module.css";
import ListDataRouter from "../../../../router/router";
import { Link } from "react-router-dom";

function HomeRootComponentB() {
    return (
        <section className={`${styleRoot.HomeRootContainerB} ${styleRoot.ContainerRoot}`}> 
            <header className={styleRoot.ContainerTitle}>
                <h2 className={styleRoot.TitleH2}>
                    J'observe, je vous mets à l'aise, je fige l'instant avec justesse.
                </h2>
            </header>

            <article className={styleRoot.ContainerText}>
                <p className={styleRoot.TextP4}>
                    En tant que {" "}
                    <span className={styleRoot.SpanBold}>
                        {"photographe professionnelle"}
                    </span> 
                    {""} installée à Montpellier et {" "}
                    <span className={styleRoot.SpanBold}>
                        {"spécialisée en portraits"}
                    </span>
                    {" "} – qu’ils soient {" "} 
                    <span className={styleRoot.SpanLink}>
                        <Link to={ListDataRouter[11].path}>
                            {"corporate"}
                        </Link>
                    </span>
                    , {" "}
                    <span className={styleRoot.SpanLink}>
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
            <article className={styleRoot.ContainerText}>
                <p className={styleRoot.TextP4}>
                    <span className={styleRoot.SpanBold}>
                        {"Ma vision du mariage"}
                    </span>
                    {" "} se décline sous la forme d’un reportage photographique. 
                    Plutôt que de créer de simples poses figées, je privilégie l’instantanéité 
                    et la spontanéité des émotions vécues durant la cérémonie. Je cherche à 
                    être au plus près de tous ces instants afin qu’ils restent gravés, et cette 
                    approche me permet de {" "}
                    <span className={styleRoot.SpanBold}>
                        {"raconter une histoire visuelle complète"}
                    </span>
                    , où chaque image capte la complicité, la tendresse et l’authenticité du grand jour.
                </p>
            </article>
        </section>
    );
}

export default HomeRootComponentB;
