import style from "../../../StyleRootComponent.module.css";
// import css from "../../GrossesseStyleRoot.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesGrossesseControllerData from "../../ImagesGrossesseControllerData";

function GrossesseRootComponentA() {
    return (
        <section className={`GrossesseRootComponentA ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Prêt(e) à figer ces moments uniques avec sensibilité et simplicité ?"}
                </h2>
            </header>

            <p className={style.TextP4}>
                Avant même de sortir l’appareil, on prend le temps d’échanger. <br />
                Quel style vous inspire ? Intimiste, lumineux, naturel ? <br />
                Préférez-vous une séance en studio, en pleine nature, ou chez vous dans votre cocon ? <br />
            </p>

            <p className={style.TextP4}>
                Nous définissons ensemble une 
                <span className={style.SpanBold}>
                    {" ambiance visuelle, "}
                </span>
                des envies particulières (objets symboliques, photos de famille, fratrie…). <br />
                Puis, le jour J, je m’adapte à votre rythme – particulièrement si bébé est tout petit. Pas de pression, pas de chrono serré.
            </p>

            <Container4ImagesRoot
                img1={ImagesGrossesseControllerData[4].src}
                MetaNameImg1={ImagesGrossesseControllerData[4].alt}
                img2={ImagesGrossesseControllerData[5].src}
                MetaNameImg2={ImagesGrossesseControllerData[5].alt}
                img3={ImagesGrossesseControllerData[6].src}
                MetaNameImg3={ImagesGrossesseControllerData[6].alt}
                img4={ImagesGrossesseControllerData[7].src}
                MetaNameImg4={ImagesGrossesseControllerData[7].alt}
            />
        </section>
    )
}

export default GrossesseRootComponentA;
