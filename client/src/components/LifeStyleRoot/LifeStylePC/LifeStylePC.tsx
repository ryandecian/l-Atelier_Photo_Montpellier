import style from './LifeStylePC.module.css';
import LifeStyleRootComposantA from '../ComponentsLifeStyleRoot/LifeStyleRootComposantA/LifeStyleRootComposantA';
import LifeStyleRootComposantB from '../ComponentsLifeStyleRoot/LifeStyleRootComposantB/LifeStyleRootComposantB';
import LifeStyleRootComposantC from '../ComponentsLifeStyleRoot/LifeStyleRootComposantC/LifeStyleRootComposantC';
import LifeStyleRootComposantD from '../ComponentsLifeStyleRoot/LifeStyleRootComposantD/LifeStyleRootComposantD';
import LifeStyleRootComposantE from '../ComponentsLifeStyleRoot/LifeStyleRootComposantE/LifeStyleRootComposantE';
import LifeStyleRootComposantF from '../ComponentsLifeStyleRoot/LifeStyleRootComposantF/LifeStyleRootComposantF';
import LifeStyleRootComposantG from '../ComponentsLifeStyleRoot/LifeStyleRootComposantG/LifeStyleRootComposantG';
import LifeStyleRootComposantH from '../ComponentsLifeStyleRoot/LifeStyleRootComposantH/LifeStyleRootComposantH';
import Container4ImagesRoot from '../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot';
import ControllerDataImageLifeStyle from '../ControllerDataImageLifeStyle';

function LifeStylePC() {
    return (
        <section className={style.LifeStylePC}>

            <header className={style.ContainerTitle}>
                <h1 className={style.Title}>
                    Portrait LifeStyle : fusion de l'instant et de la lumière
                </h1>
            </header>

            {/* Container 1 : Titre et textes */}
            <LifeStyleRootComposantA />

            {/* Container 2 : Cards */}
            <LifeStyleRootComposantB />
            
            {/* Container 3 : Portrait Solo */}
            <LifeStyleRootComposantC />

            {/* Container 4 : Container image portrait solo */}
            <Container4ImagesRoot 
            img1={ControllerDataImageLifeStyle[6].src}
            MetaNameImg1={ControllerDataImageLifeStyle[6].alt}
            img2={ControllerDataImageLifeStyle[7].src}
            MetaNameImg2={ControllerDataImageLifeStyle[7].alt}
            img3={ControllerDataImageLifeStyle[8].src}
            MetaNameImg3={ControllerDataImageLifeStyle[8].alt}
            img4={ControllerDataImageLifeStyle[9].src}
            MetaNameImg4={ControllerDataImageLifeStyle[9].alt}
            />
            
            {/* Container 5 : Portrait couple */}
            <LifeStyleRootComposantD />

            {/* Container 6 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ControllerDataImageLifeStyle[10].src}
            MetaNameImg1={ControllerDataImageLifeStyle[10].alt}
            img2={ControllerDataImageLifeStyle[11].src}
            MetaNameImg2={ControllerDataImageLifeStyle[11].alt}
            img3={ControllerDataImageLifeStyle[12].src}
            MetaNameImg3={ControllerDataImageLifeStyle[12].alt}
            img4={ControllerDataImageLifeStyle[13].src}
            MetaNameImg4={ControllerDataImageLifeStyle[13].alt}
            />
            
            {/* Container 7 : Portrait famille - amis */}
            <LifeStyleRootComposantE />

            {/* Container 8 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ControllerDataImageLifeStyle[14].src}
            MetaNameImg1={ControllerDataImageLifeStyle[14].alt}
            img2={ControllerDataImageLifeStyle[15].src}
            MetaNameImg2={ControllerDataImageLifeStyle[15].alt}
            img3={ControllerDataImageLifeStyle[16].src}
            MetaNameImg3={ControllerDataImageLifeStyle[16].alt}
            img4={ControllerDataImageLifeStyle[17].src}
            MetaNameImg4={ControllerDataImageLifeStyle[17].alt}
            />
            
            {/* Container 9 : Portrait nouveau-nés */}
            <LifeStyleRootComposantF />
            
            {/* Container 11 : Portrait grossesse */}
            <LifeStyleRootComposantG />
            
            {/* Container 13 : Portrait Lives */}
            <LifeStyleRootComposantH />

            {/* Container 14 : Container image portrait couple */}
            <Container4ImagesRoot 
            img1={ControllerDataImageLifeStyle[26].src}
            MetaNameImg1={ControllerDataImageLifeStyle[26].alt}
            img2={ControllerDataImageLifeStyle[27].src}
            MetaNameImg2={ControllerDataImageLifeStyle[27].alt}
            img3={ControllerDataImageLifeStyle[28].src}
            MetaNameImg3={ControllerDataImageLifeStyle[28].alt}
            img4={ControllerDataImageLifeStyle[29].src}
            MetaNameImg4={ControllerDataImageLifeStyle[29].alt}
            />
        </section>
    );
}

export default LifeStylePC;
