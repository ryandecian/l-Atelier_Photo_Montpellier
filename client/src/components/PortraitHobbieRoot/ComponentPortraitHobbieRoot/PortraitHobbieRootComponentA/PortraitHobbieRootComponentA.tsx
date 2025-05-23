import style from "../../../StyleRootComponent.module.css";
import css from "../../../StyleRootComponent.module.css";
// import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
// import ImagesPortraitHobbieControllerData from "../../ImagesPortraitHobbieControllerData";

function PortraitHobbieRootComponentA() {
  return (
    <section className={`PortraitHobbieRootComponentA ${style.ContainerRoot}`}>
        <header className={style.ContainerTitle}>
            <h2 className={style.TitleH2}>
                {"Parce que chaque Hobbie a son histoire, offrez-vous un portrait fidèle à votre complicité"}
            </h2>
        </header>

        <p className={style.TextP4}>
            Un portrait de couple, ce n’est pas seulement une jolie photo à deux. <br />
            C’est un 
            <span className={style.SpanBold}>
                {" instant suspendu, "}
            </span>
            une respiration dans vos quotidiens bien remplis, une façon de 
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

        {/* <Container4ImagesRoot
            img1={ImagesPortraitHobbieControllerData[0].src}
            MetaNameImg1={ImagesPortraitHobbieControllerData[0].alt}
            img2={ImagesPortraitHobbieControllerData[1].src}
            MetaNameImg2={ImagesPortraitHobbieControllerData[1].alt}
            img3={ImagesPortraitHobbieControllerData[2].src}
            MetaNameImg3={ImagesPortraitHobbieControllerData[2].alt}
            img4={ImagesPortraitHobbieControllerData[3].src}
            MetaNameImg4={ImagesPortraitHobbieControllerData[3].alt}
        /> */}

        <article className={style.ContainerText}>
            <h3 className={css.TitleNH3}>
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
                Que ce soit en studio ou en extérieur, je mets tout en œuvre pour que l’expérience soit aussi belle que les images.
            </p>

            <p className={style.TextP4}>
                🎯 Résultat : un reportage visuel sensible, fidèle à votre lien.
            </p>
        </article>
    </section>
  );
}

export default PortraitHobbieRootComponentA;
