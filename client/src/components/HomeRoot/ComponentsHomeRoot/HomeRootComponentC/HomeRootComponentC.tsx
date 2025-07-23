import style from "../../../StyleRootComponent.module.css"
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";
import ImagesHomeControllerData from "../../ImagesHomeControllerData";

function HomeRootComponentC() {
    return (
        <section className={`HomeRootComponentC ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Chaque portrait a son histoire à raconter
                </h2>
            </header>

            <Container4ImagesRoot
                img1={ImagesHomeControllerData[0].src}
                MetaNameImg1={ImagesHomeControllerData[0].alt}
                img2={ImagesHomeControllerData[1].src}
                MetaNameImg2={ImagesHomeControllerData[1].alt}
                img3={ImagesHomeControllerData[2].src}
                MetaNameImg3={ImagesHomeControllerData[2].alt}
                img4={ImagesHomeControllerData[3].src}
                MetaNameImg4={ImagesHomeControllerData[3].alt}
            />

            <article className={style.ContainerText}>
                <p className={`${style.TextP4} ${style.TargetText1}`}>
                    Et je cherche à capturer ces histoires. Pour votre entreprise, pour vos réseaux 
                    sociaux, pour une connivence…je cherche à trouver la photo de portrait qui fait 
                    votre force, votre énergie, {" "}
                    <span className={style.SpanBold}>
                        {"votre rayonnement."}
                    </span>
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    Que vous cherchiez un {" "}
                    <span className={style.SpanBold}>
                        {"portrait corporate"}
                    </span>
                    {" "} pour affirmer votre crédibilité, un {" "}
                    <span className={style.SpanBold}>
                        {"portrait lifestyle"}
                    </span>
                    {" "} qui capte l’ambiance d’un moment, ou encore un moment familial empreint 
                    de complicité, chaque séance est conçue pour vous mettre en lumière dans toute 
                    votre singularité. En tant que photographe professionnelle {" "} 
                    <span className={style.SpanBold}>
                        {"je peux travailler en studio ou en extérieur"}
                    </span>
                    , selon vos envies, dans une atmosphère calme et chaleureuse.
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    Et pour moi la réussite d’un shooting tient à ce que vous repartiez non seulement 
                    après avoir passé un bon moment, mais surtout avec 
                    <span className={style.SpanBold}>
                        {" des photos qui vous plaisent, "}
                    </span> 
                    que vous avez envie de partager sur vos réseaux, et que vous puissiez vous dire {" "}
                    <span className={style.SpanLine}>
                        {`"ah oui je m’aime bien dessus ! "`}
                    </span>
                    {" "} Commencez à planifier dès maintenant {" "}
                    <span className={style.SpanLink}>
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
