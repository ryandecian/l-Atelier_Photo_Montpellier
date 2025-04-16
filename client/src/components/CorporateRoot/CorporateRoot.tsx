import style from "../StyleRootComponent.module.css";
import Container4ImagesPortraitRoot from "../ContainerImageRoot/Container4ImagesPortraitRoot/Container4ImagesPortraitRoot";
import ImagesCorporateControllerData from "./ImagesCorporateControllerData";

import CorporateRootComponentA from "./ComponentsCorporateRoot/CorporateRootComponentA/CorporateRootComponentA";

function CorporateRoot() {
    return (
        <section className={`CorporateRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    L'importance de votre signature visuelle : bien plus qu'une simple photo !
                </h1>
            </header>

            {/* Container A : Titre et textes */}
            <CorporateRootComponentA />

            {/* Container 1 : Container image portrait solo */}
            <Container4ImagesPortraitRoot 
            img1={ImagesCorporateControllerData[0].src}
            MetaNameImg1={ImagesCorporateControllerData[0].alt}
            img2={ImagesCorporateControllerData[1].src}
            MetaNameImg2={ImagesCorporateControllerData[1].alt}
            img3={ImagesCorporateControllerData[2].src}
            MetaNameImg3={ImagesCorporateControllerData[2].alt}
            img4={ImagesCorporateControllerData[3].src}
            MetaNameImg4={ImagesCorporateControllerData[3].alt}
            />
        </section>
    )
}

export default CorporateRoot;
