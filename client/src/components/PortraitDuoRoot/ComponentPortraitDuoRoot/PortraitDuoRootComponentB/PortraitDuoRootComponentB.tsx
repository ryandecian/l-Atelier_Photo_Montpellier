import style from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitDuoControllerData from "../../ImagesPortraitDuoControllerData";

function PortraitDuoRootComponentB() {
  return (
    <article className={`PortraitDuoRootComponentB ${style.ContainerRoot}`}>
            <h2 className={style.TitleH2}>
                {"Envie d’un portrait de couple qui a du sens ?"}
            </h2>

        <p className={style.TextP4}>
            Avant de déclencher l’appareil, on échange sur votre histoire, votre dynamique, ce que vous aimez faire à deux. <br />
            Je vous propose un lieu adapté : un décor sobre au studio, un coin de nature autour de Montpellier, ou même chez vous si vous le souhaitez.
        </p>

        <p className={style.TextP4}>
            Nous définissons ensemble 
            <span className={style.SpanBold}>
                {" l’ambiance visuelle : "}
            </span>
            lumineux et spontané, doux et minimaliste, cinématographique ? <br />
            Puis on crée ce moment rien qu’à vous, loin des clichés, proche de vous.
        </p>

        <Container4ImagesRoot
            img1={ImagesPortraitDuoControllerData[4].src}
            MetaNameImg1={ImagesPortraitDuoControllerData[4].alt}
            img2={ImagesPortraitDuoControllerData[5].src}
            MetaNameImg2={ImagesPortraitDuoControllerData[5].alt}
            img3={ImagesPortraitDuoControllerData[6].src}
            MetaNameImg3={ImagesPortraitDuoControllerData[6].alt}
            img4={ImagesPortraitDuoControllerData[7].src}
            MetaNameImg4={ImagesPortraitDuoControllerData[7].alt}
        />

        <h3 className={style.TitleNH3}>
            {"🧡 Ce portrait est pour vous si..."}
        </h3>
        <ul className={style.ContainerUl}>
            <li className={style.TextLiP4}>
                <span className={style.SpanBold}>
                    {"Vous voulez garder un souvenir "}
                </span>
                {"vrai de votre lien"}
            </li>
            <li className={style.TextLiP4}>
                Vous n’avez jamais fait de 
                <span className={style.SpanBold}>
                    {" séance photo ensemble "}
                </span>
                 mais vous en rêviez
            </li>
            <li className={style.TextLiP4}>
                <span className={style.SpanBold}>
                    {"Vous avez traversé une étape de vie "}
                </span>
                {"et vous voulez l’honorer"}
            </li>
            <li className={style.TextLiP4}>
                Vous êtes timides et cherchez une 
                <span className={style.SpanBold}>
                    {" expérience douce, "}
                </span> bienveillante
            </li>
            <li className={style.TextLiP4}>
                {"Vous voulez simplement "}
                <span className={style.SpanBold}>
                    {"vous faire un cadeau ensemble"}
                </span>
            </li>
        </ul>
    </article>
  );
}

export default PortraitDuoRootComponentB;
