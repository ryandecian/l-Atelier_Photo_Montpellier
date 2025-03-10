import style from './LifeStylePC.module.css';
import LifeStyleRootComposantA from '../ComponentsLifeStyleRoot/LifeStyleRootComposantA/LifeStyleRootComposantA';
import LifeStyleRootComposantB from '../ComponentsLifeStyleRoot/LifeStyleRootComposantB/LifeStyleRootComposantB';
import LifeStyleRootComposantC from '../ComponentsLifeStyleRoot/LifeStyleRootComposantC/LifeStyleRootComposantC';
import ContainerImgLifeStyleRoot from '../ComponentsLifeStyleRoot/ContainerImgLifeStyleRoot/ContainerImgLifeStyleRoot';
import LifeStyleRootComposantD from '../ComponentsLifeStyleRoot/LifeStyleRootComposantD/LifeStyleRootComposantD';
import LifeStyleRootComposantE from '../ComponentsLifeStyleRoot/LifeStyleRootComposantE/LifeStyleRootComposantE';
import LifeStyleRootComposantF from '../ComponentsLifeStyleRoot/LifeStyleRootComposantF/LifeStyleRootComposantF';
import LifeStyleRootComposantG from '../ComponentsLifeStyleRoot/LifeStyleRootComposantG/LifeStyleRootComposantG';
import LifeStyleRootComposantH from '../ComponentsLifeStyleRoot/LifeStyleRootComposantH/LifeStyleRootComposantH';

/* Import des images */
import img1 from "../../../assets/Images/ImageLifeStyle/Life_style_exterieur_domicile.jpg";
import img2 from "../../../assets/Images/ImageLifeStyle/Portrait_François_Feel_good.jpg";
import img3 from "../../../assets/Images/ImageLifeStyle/Life_style_exterieur.jpg";
import img4 from "../../../assets/Images/ImageLifeStyle/portrait_tandem_exterieur.jpg";
import img5 from "../../../assets/Images/ImageLifeStyle/portrait_couple_jeune_studio.jpg";
import img6 from "../../../assets/Images/ImageLifeStyle/portrait_couple_studio_bis.jpg";

function LifeStylePC() {
    const DataImage = {
        img1: img1,
        MetaNameImg1: "Life style exterieur domicile",
        img2: img2,
        MetaNameImg2: "Portrait François Feel good",
        img3: img3,
        MetaNameImg3: "Life style exterieur",
        img4: img4,
        MetaNameImg4: "portrait tandem exterieur",
        img5: img5,
        MetaNameImg5: "portrait couple jeune studio",
        img6: img6,
        MetaNameImg6: "portrait couple studio bis",
    }
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
            
            {/* Container 2 : Portrait Solo */}
            <LifeStyleRootComposantC />

            {/* Container 4 : Container image portrait solo */}
            <ContainerImgLifeStyleRoot 
            img1={DataImage.img1}
            MetaNameImg1={DataImage.MetaNameImg1}
            img2={DataImage.img2}
            MetaNameImg2={DataImage.MetaNameImg2}
            img3={DataImage.img3}
            MetaNameImg3={DataImage.MetaNameImg3}
            />
            
            {/* Container 5 : Portrait couple */}
            <LifeStyleRootComposantD />

            {/* Container 6 : Container image portrait couple */}
            <ContainerImgLifeStyleRoot 
            img1={DataImage.img4}
            MetaNameImg1={DataImage.MetaNameImg4}
            img2={DataImage.img5}
            MetaNameImg2={DataImage.MetaNameImg5}
            img3={DataImage.img6}
            MetaNameImg3={DataImage.MetaNameImg6}
            />
            
            {/* Container 7 : Portrait famille - amis */}
            <LifeStyleRootComposantE />
            
            {/* Container 8 : Portrait nouveau-nés */}
            <LifeStyleRootComposantF />
            
            {/* Container 9 : Portrait grossesse */}
            <LifeStyleRootComposantG />
            
            {/* Container 10 : Portrait Lives */}
            <LifeStyleRootComposantH />
        </section>
    );
}

export default LifeStylePC;
