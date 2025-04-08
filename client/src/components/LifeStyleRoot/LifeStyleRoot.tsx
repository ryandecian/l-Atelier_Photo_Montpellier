import style from "../StyleRootComponent.module.css";
import ImagesLifeStyleControllerData from "./ImagesLifeStyleControllerData";
import Container4ImagesRoot from "../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";

function LifeStyleRoot() {
    return (
        <section className={`LifeStyleRoot ${style.ContainerRoot}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.Title}>
                    Portrait LifeStyle : fusion de l'instant et de la lumière
                </h1>
            </header>

            {/* Container 1 : Titre et textes */}

            {/* Container 2 : Cards */}
            
            {/* Container 3 : Portrait Solo */}

            {/* Container 4 : Container image portrait solo */}
            <Container4ImagesRoot 
            img1={ImagesLifeStyleControllerData[6].src}
            MetaNameImg1={ImagesLifeStyleControllerData[6].alt}
            img2={ImagesLifeStyleControllerData[7].src}
            MetaNameImg2={ImagesLifeStyleControllerData[7].alt}
            img3={ImagesLifeStyleControllerData[8].src}
            MetaNameImg3={ImagesLifeStyleControllerData[8].alt}
            img4={ImagesLifeStyleControllerData[9].src}
            MetaNameImg4={ImagesLifeStyleControllerData[9].alt}
            />
            
            {/* Container 5 : Portrait couple */}

            {/* Container 6 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesLifeStyleControllerData[10].src}
            MetaNameImg1={ImagesLifeStyleControllerData[10].alt}
            img2={ImagesLifeStyleControllerData[11].src}
            MetaNameImg2={ImagesLifeStyleControllerData[11].alt}
            img3={ImagesLifeStyleControllerData[12].src}
            MetaNameImg3={ImagesLifeStyleControllerData[12].alt}
            img4={ImagesLifeStyleControllerData[13].src}
            MetaNameImg4={ImagesLifeStyleControllerData[13].alt}
            />
            
            {/* Container 7 : Portrait famille - amis */}

            {/* Container 8 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesLifeStyleControllerData[14].src}
            MetaNameImg1={ImagesLifeStyleControllerData[14].alt}
            img2={ImagesLifeStyleControllerData[15].src}
            MetaNameImg2={ImagesLifeStyleControllerData[15].alt}
            img3={ImagesLifeStyleControllerData[16].src}
            MetaNameImg3={ImagesLifeStyleControllerData[16].alt}
            img4={ImagesLifeStyleControllerData[17].src}
            MetaNameImg4={ImagesLifeStyleControllerData[17].alt}
            />
            
            {/* Container 9 : Portrait nouveau-nés */}
            
            {/* Container 11 : Portrait grossesse */}
            
            {/* Container 13 : Portrait Lives */}

            {/* Container 14 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesLifeStyleControllerData[26].src}
            MetaNameImg1={ImagesLifeStyleControllerData[26].alt}
            img2={ImagesLifeStyleControllerData[27].src}
            MetaNameImg2={ImagesLifeStyleControllerData[27].alt}
            img3={ImagesLifeStyleControllerData[28].src}
            MetaNameImg3={ImagesLifeStyleControllerData[28].alt}
            img4={ImagesLifeStyleControllerData[29].src}
            MetaNameImg4={ImagesLifeStyleControllerData[29].alt}
            />
        </section>
    );
}

export default LifeStyleRoot;
