import style from "../../../StyleRootComponent.module.css";
import Container4ImagesPortraitRoot from "../../../ContainerImageRoot/Container4ImagesPortraitRoot/Container4ImagesPortraitRoot";
import ImagesPortraitCorporateControllerData from "../../ImagesPortraitCorporateControllerData";

function PortraitCorporateRootComponentA() {
    return (
        <section className={`PortraitCorporateRootComponentA ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Votre visage, votre signature, ce que vous souhaitez transmettre y sera !
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"Votre signature visuelle, "}
                    </span>
                    c’est la première impression que vous laissez. Elle influence la perception que vos clients, partenaires et recruteurs ont 
                    de vous.
                    <span className={style.SpanBold}>
                        {" Dans un monde où l’image joue un rôle majeur, "}
                    </span>
                    un portrait professionnel de qualité devient un véritable levier de communication et de différenciation. 
                </p>
                <p className={style.TextP4}>
                    Un portrait soigné, cohérent avec votre activité et votre personnalité, permet de renforcer votre crédibilité : une photo bien 
                    réalisée inspire confiance et professionnalisme. Elle montre que 
                    <span className={style.SpanBold}>
                        {" vous prenez soin de votre image et, par extension, de votre activité."}
                    </span>
                </p>
                <p className={style.TextP4}>
                    Dans un univers où tout va vite, une signature visuelle impactante vous aide à sortir du lot et à marquer les esprits. 
                </p>

                {/* Container 1 : Container image portrait Corporate */}
                <Container4ImagesPortraitRoot 
                img1={ImagesPortraitCorporateControllerData[0].src}
                MetaNameImg1={ImagesPortraitCorporateControllerData[0].alt}
                img2={ImagesPortraitCorporateControllerData[1].src}
                MetaNameImg2={ImagesPortraitCorporateControllerData[1].alt}
                img3={ImagesPortraitCorporateControllerData[2].src}
                MetaNameImg3={ImagesPortraitCorporateControllerData[2].alt}
                img4={ImagesPortraitCorporateControllerData[3].src}
                MetaNameImg4={ImagesPortraitCorporateControllerData[3].alt}
                />

                <br />

                <p className={style.TextP4}>
                    Pourquoi faire appel à l’Atelier Photo Montpellier ? Car un portrait réalisé par mes soins garantit une lumière maîtrisée, 
                    une posture naturelle et
                    <span className={style.SpanBold}>
                        {" une image qui vous met réellement en valeur. "}
                    </span>
                    Elle affirme votre présence et véhicule le message que vous souhaitez faire passer comme le sérieux, l’écoute, la compétence... 
                    En prenant le temps d’échanger sur vos attentes, je serai en force de proposition pour que vos photos s’inscrivent dans votre 
                    communication globale d’entreprise. 
                    <span className={style.SpanBold}>
                        {" Et vous pourrez même être tenté par une vidéo d’entreprise "}
                    </span> (renseignements à demander directement) pour vous démarquer.
                </p>
            </article>
        </section>
    )
}

export default PortraitCorporateRootComponentA;
