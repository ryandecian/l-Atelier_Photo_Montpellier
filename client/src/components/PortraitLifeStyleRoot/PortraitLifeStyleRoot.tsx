import style from "../StyleRootComponent.module.css";
import useScrollToHash from "../../hook/useScrollToHash";

import ImagesPortraitLifeStyleControllerData from "./ImagesPortraitLifeStyleControllerData";
import Container4ImagesRoot from "../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";

import AvisClientPortraitLifeStyleControllerData from "./AvisClientPortraitLifeStyleControllerData";
import GeneratorCardAvisClient from "../GeneratorCardAvisClient/GeneratorCardAvisClient";

import PortraitLifeStyleRootComponentA from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentA/PortraitLifeStyleRootComponentA";
import PortraitLifeStyleRootComponentB from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentB/PortraitLifeStyleRootComponentB";
import PortraitLifeStyleRootComponentC from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentC/PortraitLifeStyleRootComponentC";
import PortraitLifeStyleRootComponentD from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentD/PortraitLifeStyleRootComponentD";
import PortraitLifeStyleRootComponentE from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentE/PortraitLifeStyleRootComponentE";
import PortraitLifeStyleRootComponentF from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentF/PortraitLifeStyleRootComponentF";
import PortraitLifeStyleRootComponentG from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentG/PortraitLifeStyleRootComponentG";
import PortraitLifeStyleRootComponentH from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentH/PortraitLifeStyleRootComponentH";

function PortraitLifeStyleRoot() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`PortraitLifeStyleRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait PortraitLifeStyle : fusion de l'instant et de la lumière
                </h1>
            </header>

            {/* Container A : Titre et textes */}
            <PortraitLifeStyleRootComponentA />

            {/* Container B : Cards */}
            <PortraitLifeStyleRootComponentB />
            
            {/* Container C : Portrait Solo */}
            <PortraitLifeStyleRootComponentC />

            {/* Container 1 : Container image portrait solo */}
            <Container4ImagesRoot 
            img1={ImagesPortraitLifeStyleControllerData[6].src}
            MetaNameImg1={ImagesPortraitLifeStyleControllerData[6].alt}
            img2={ImagesPortraitLifeStyleControllerData[7].src}
            MetaNameImg2={ImagesPortraitLifeStyleControllerData[7].alt}
            img3={ImagesPortraitLifeStyleControllerData[8].src}
            MetaNameImg3={ImagesPortraitLifeStyleControllerData[8].alt}
            img4={ImagesPortraitLifeStyleControllerData[9].src}
            MetaNameImg4={ImagesPortraitLifeStyleControllerData[9].alt}
            />
            
            {/* Container D : Portrait couple */}
            <PortraitLifeStyleRootComponentD />

            {/* Container 2 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesPortraitLifeStyleControllerData[10].src}
            MetaNameImg1={ImagesPortraitLifeStyleControllerData[10].alt}
            img2={ImagesPortraitLifeStyleControllerData[11].src}
            MetaNameImg2={ImagesPortraitLifeStyleControllerData[11].alt}
            img3={ImagesPortraitLifeStyleControllerData[12].src}
            MetaNameImg3={ImagesPortraitLifeStyleControllerData[12].alt}
            img4={ImagesPortraitLifeStyleControllerData[13].src}
            MetaNameImg4={ImagesPortraitLifeStyleControllerData[13].alt}
            />
            
            {/* Container E : Portrait famille - amis */}
            <PortraitLifeStyleRootComponentE />

            {/* Container 3 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesPortraitLifeStyleControllerData[14].src}
            MetaNameImg1={ImagesPortraitLifeStyleControllerData[14].alt}
            img2={ImagesPortraitLifeStyleControllerData[15].src}
            MetaNameImg2={ImagesPortraitLifeStyleControllerData[15].alt}
            img3={ImagesPortraitLifeStyleControllerData[16].src}
            MetaNameImg3={ImagesPortraitLifeStyleControllerData[16].alt}
            img4={ImagesPortraitLifeStyleControllerData[17].src}
            MetaNameImg4={ImagesPortraitLifeStyleControllerData[17].alt}
            />
            
            {/* Container F : Portrait nouveau-nés */}
            <PortraitLifeStyleRootComponentF />
            
            {/* Container G : Portrait grossesse */}
            <PortraitLifeStyleRootComponentG />
            
            {/* Container H : Portrait Lives */}
            <PortraitLifeStyleRootComponentH />

            {/* Container 4 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ImagesPortraitLifeStyleControllerData[26].src}
            MetaNameImg1={ImagesPortraitLifeStyleControllerData[26].alt}
            img2={ImagesPortraitLifeStyleControllerData[27].src}
            MetaNameImg2={ImagesPortraitLifeStyleControllerData[27].alt}
            img3={ImagesPortraitLifeStyleControllerData[28].src}
            MetaNameImg3={ImagesPortraitLifeStyleControllerData[28].alt}
            img4={ImagesPortraitLifeStyleControllerData[29].src}
            MetaNameImg4={ImagesPortraitLifeStyleControllerData[29].alt}
            />

            {/* Container 5 : Avis clients */}
            <GeneratorCardAvisClient avisClients = {AvisClientPortraitLifeStyleControllerData} />
        </section>
    );
}

export default PortraitLifeStyleRoot;
