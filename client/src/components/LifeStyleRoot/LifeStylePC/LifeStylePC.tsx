import style from './LifeStylePC.module.css';
import LifeStyleRootComposantA from '../ComponentsLifeStyleRoot/LifeStyleRootComposantA/LifeStyleRootComposantA';
import LifeStyleRootComposantB from '../ComponentsLifeStyleRoot/LifeStyleRootComposantB/LifeStyleRootComposantB';
import LifeStyleRootComposantC from '../ComponentsLifeStyleRoot/LifeStyleRootComposantC/LifeStyleRootComposantC';
import ContainerImgLifeStyleRoot from '../ComponentsLifeStyleRoot/ContainerImgLifeStyleRoot/ContainerImgLifeStyleRoot';
import LifeStyleRootComposantD from '../ComponentsLifeStyleRoot/LifeStyleRootComposantD/LifeStyleRootComposantD';

/* Import des images */
import img1 from "../../../assets/Images/ImageLifeStyle/Portrait_Femme_Feel_Good.jpg";
import img2 from "../../../assets/Images/ImageLifeStyle/LifeStyleImg9.jpg";
import img3 from "../../../assets/Images/ImageLifeStyle/LifeStyleImg8.jpg";
import img4 from "../../../assets/Images/ImageLifeStyle/Portrait_Duo_Exterieur.jpg";
import img5 from "../../../assets/Images/ImageLifeStyle/Mere_Fils_Noir_et_Blanc.jpg";
import img6 from "../../../assets/Images/ImageLifeStyle/LifeStyleImg7.jpg";

function LifeStylePC() {
    const DataImage = {
        img1: img1,
        MetaNameImg1: "Portrait Femme Feel Good",
        img2: img2,
        MetaNameImg2: "Test",
        img3: img3,
        MetaNameImg3: "Test",
        img4: img4,
        MetaNameImg4: "Portrait Duo Exterieur",
        img5: img5,
        MetaNameImg5: "Mère Fils Noir et Blanc",
        img6: img6,
        MetaNameImg6: "Test",
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
        </section>
    );
}

export default LifeStylePC;
