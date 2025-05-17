import style from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitDuoControllerData from "../../ImagesPortraitDuoControllerData";

function PortraitDuoRootComponentA() {
  return (
    <section className={`PortraitDuoRootComponentA ${style.ContainerRoot}`}>
        <header className={style.ContainerTitle}>
            <h2 className={style.TitleH2}>
                {"Parce que chaque duo a son histoire, offrez-vous un portrait fidèle à votre complicité"}
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
    </section>
  );
}

export default PortraitDuoRootComponentA;
