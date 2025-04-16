import style from "../../../StyleRootComponent.module.css";
import { LinkExt } from "../../../../router/router";
import Container4ImagesPortraitRoot from "../../../ContainerImageRoot/Container4ImagesPortraitRoot/Container4ImagesPortraitRoot";
import ImagesCorporateControllerData from "../../ImagesCorporateControllerData";

function CorporateRootComponentB() {
    return (
        <section className={`CorporateRootComponentB ${style.ContainerRoot}`}>

            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Prêt(e) à donner du poids à votre signature visuelle d’entreprise ? 
                </h2>
            </header>

            <p className={style.TextP4}>
                Avant de déclencher l’appareil, je vous propose un
                <span className={style.SpanBold}>
                    {" temps d’échange et de repérage. "}
                </span>
                L’objectif ? Définir ensemble le ton, le style et l’ambiance qui correspondent le mieux à votre image de marque. 
            </p>
            <p className={style.TextP4}>
                Si nous réalisons 
                <span className={style.SpanBold}>
                    {" la séance dans vos locaux, "}
                </span>
                cette étape permet d’identifier les meilleurs espaces pour un fond valorisant, une lumière naturelle intéressante ou une 
                <span className={style.SpanBold}>
                    {" mise en scène cohérente avec votre activité. "}
                </span>
                En studio, j’ajuste l’éclairage et le fond pour un rendu sobre et intemporel, parfait pour une identité forte et homogène. 
            </p>
            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Ce travail en amont "}
                </span>
                garantit des portraits professionnels impactants et cohérents, adaptés à vos différents supports : signature mail, site web, LinkedIn, 
                presse ou communication interne.  
            </p>
            <p className={style.TextP4}>
                Votre image mérite le meilleur – {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.emailAnne}>
                        {"Prêt(e) à passer devant l’objectif ?"}
                    </a>
                </span>
            </p>

            {/* Container 2 : Container image portrait Corporate */}
            <Container4ImagesPortraitRoot 
                img1={ImagesCorporateControllerData[4].src}
                MetaNameImg1={ImagesCorporateControllerData[4].alt}
                img2={ImagesCorporateControllerData[5].src}
                MetaNameImg2={ImagesCorporateControllerData[5].alt}
                img3={ImagesCorporateControllerData[6].src}
                MetaNameImg3={ImagesCorporateControllerData[6].alt}
                img4={ImagesCorporateControllerData[7].src}
                MetaNameImg4={ImagesCorporateControllerData[7].alt}
                />
        </section>
    )
}

export default CorporateRootComponentB;
