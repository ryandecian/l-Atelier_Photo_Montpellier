import style from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitDuoControllerData from "../../ImagesPortraitDuoControllerData";

function PortraitDuoRootComponentA() {
  return (
    <section className={`PortraitDuoRootComponentA ${style.ContainerRoot}`}>
            <h2 className={style.TitleH2}>
                {"Parce que chaque duo a son histoire, offrez-vous un portrait fidèle à votre complicité"}
            </h2>

        <p className={style.TextP4}>
            Un portrait de couple, ce n’est pas seulement une jolie photo à deux. <br />
            C’est un 
            <span className={style.SpanBold}>
                {" instant suspendu, "}
            </span>
            une respiration dans votre quotidien bien rempli, une façon de 
            <span className={style.SpanBold}>
                {" vous (re)voir autrement, "}
            </span>
            ensemble.
        </p>

        <p className={style.TextP4}>
            Rires complices, gestes tendres, regards pleins de sous-entendus... <br />
            Je photographie 
            <span className={style.SpanBold}>
                {" ce qui existe déjà entre vous, "}
            </span>
            sans filtres, sans caricature, dans une ambiance douce, vraie et sans pression.
        </p>

        <Container4ImagesRoot
            img1={ImagesPortraitDuoControllerData[0].src}
            MetaNameImg1={ImagesPortraitDuoControllerData[0].alt}
            img2={ImagesPortraitDuoControllerData[1].src}
            MetaNameImg2={ImagesPortraitDuoControllerData[1].alt}
            img3={ImagesPortraitDuoControllerData[2].src}
            MetaNameImg3={ImagesPortraitDuoControllerData[2].alt}
            img4={ImagesPortraitDuoControllerData[3].src}
            MetaNameImg4={ImagesPortraitDuoControllerData[3].alt}
        />

            <h3 className={style.TitleNH3}>
                {"Pourquoi faire appel à l’Atelier Photo Montpellier ?"}
            </h3>

            <p className={style.TextP4}>
                Parce que je ne cherche pas à faire "poser" les couples. <br />
                Je crée 
                <span className={style.SpanBold}>
                    {" une bulle de confiance et d’intimité, "}
                </span>
                où vous pourrez simplement être vous-mêmes. <br />
                Avant la séance, on prend le temps d’échanger sur 
                <span className={style.SpanBold}>
                    {" ce qui vous lie, ce que vous voulez garder en image : "}
                </span>
                douceur ? force ? joie ? pudeur ?
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Que ce soit en studio ou en extérieur, "}
                </span>
                je mets tout en œuvre pour que l’expérience soit aussi belle que les images.
            </p>

            <p className={style.TextP4}>
                🎯 Résultat : un reportage visuel sensible, fidèle à votre lien.
            </p>
    </section>
  );
}

export default PortraitDuoRootComponentA;
