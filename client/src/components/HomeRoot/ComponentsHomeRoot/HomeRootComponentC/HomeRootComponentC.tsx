import styleRoot from "../../../StyleRootComponent.module.css"
import css from "./HomeRootComponentC.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";
import ControllerDataImageHome from "../../ControllerDataImageHome";

function HomeRootComponentC() {
    return (
        <section className={`${styleRoot.HomeRootComponentC} ${styleRoot.ContainerRoot}`}>
            <header className={styleRoot.ContainerTitle}>
                <h2 className={styleRoot.TitleH2}>
                    Chaque portrait a son histoire à raconter
                </h2>
            </header>

            <Container4ImagesRoot
                img1={ControllerDataImageHome[0].src}
                MetaNameImg1={ControllerDataImageHome[0].alt}
                img2={ControllerDataImageHome[1].src}
                MetaNameImg2={ControllerDataImageHome[1].alt}
                img3={ControllerDataImageHome[2].src}
                MetaNameImg3={ControllerDataImageHome[2].alt}
                img4={ControllerDataImageHome[3].src}
                MetaNameImg4={ControllerDataImageHome[3].alt}
            />

            <article className={styleRoot.ContainerText}>
                <p className={`${styleRoot.TextP4} ${css.TargetText1}`}>
                    Et je cherche à capturer ces histoires. Pour son entreprise, pour ses réseaux 
                    sociaux, pour une connivence…je cherche à trouver la photo de portrait qui fait 
                    votre force, votre énergie, {" "}
                    <span className={styleRoot.SpanBold}>
                        {"votre rayonnement."}
                    </span>
                </p>
            </article>
            <article className={styleRoot.ContainerText}>
                <p className={styleRoot.TextP4}>
                    Que vous cherchiez un {" "}
                    <span className={styleRoot.SpanBold}>
                        {"portrait corporate"}
                    </span>
                    {" "} pour affirmer votre crédibilité, un {" "}
                    <span className={styleRoot.SpanBold}>
                        {"portrait lifestyleRoot"}
                    </span>
                    {" "} qui capte l’ambiance d’un moment, ou encore un moment familial empreint 
                    de complicité, chaque séance est conçue pour vous mettre en lumière dans toute 
                    votre singularité. En tant que photographe professionnelle {" "} 
                    <span className={styleRoot.SpanBold}>
                        {"je peux travailler en studio ou en extérieur"}
                    </span>
                    , selon vos envies, dans une atmosphère calme et chaleureuse.
                </p>
            </article>
            <article className={styleRoot.ContainerText}>
                <p className={styleRoot.TextP4}>
                    Et pour moi la réussite d’un shooting tient à ce que vous repartiez non seulement 
                    après avoir passé un bon moment, mais surtout avec des photos qui vous plaisent, 
                    que vous avez envie de partager sur vos réseaux, et vous puissiez vous dire {" "}
                    <span className={styleRoot.SpanLine}>
                        {"ah oui je m’aime bien dessus !"}
                    </span>
                    {" "} Commencez à planifier dès maintenant {" "}
                    <span className={styleRoot.SpanLink}>
                            <Link to={ListDataRouter[12].path}>
                                {"votre séance"}
                            </Link>
                    </span>
                    {" !"}
                </p>
            </article>
        </section>
    );
}

export default HomeRootComponentC;
