import style from './LifeStyleMobile.module.css';
import LifeStyleRootComposantA from '../ComponentsLifeStyleRoot/LifeStyleRootComposantA/LifeStyleRootComposantA';
import LifeStyleRootComposantB from '../ComponentsLifeStyleRoot/LifeStyleRootComposantB/LifeStyleRootComposantB';
import LifeStyleRootComposantC from '../ComponentsLifeStyleRoot/LifeStyleRootComposantC/LifeStyleRootComposantC';
import ContainerImgLifeStyleRoot from '../ComponentsLifeStyleRoot/ContainerImgLifeStyleRoot/ContainerImgLifeStyleRoot';

/* Import des images */
import img1 from "../../../assets/Images/ImageLifeStyle/Portrait_Femme_Feel_Good.jpg";
import img2 from "../../../assets/Images/ImageLifeStyle/LifeStyleImg9.jpg";
import img3 from "../../../assets/Images/ImageLifeStyle/LifeStyleImg8.jpg";

function LifeStyleMobile() {
    const DataImage = {
        img1: img1,
        MetaNameImg1: "Portrait Femme Feel Good",
        img2: img2,
        MetaNameImg2: "Test",
        img3: img3,
        MetaNameImg3: "Test",
    }
    return (
        <section className={style.LifeStyleMobile}>

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
            <ContainerImgLifeStyleRoot 
            img1={DataImage.img1}
            MetaNameImg1={DataImage.MetaNameImg1}
            img2={DataImage.img2}
            MetaNameImg2={DataImage.MetaNameImg2}
            img3={DataImage.img3}
            MetaNameImg3={DataImage.MetaNameImg3}
            />
        </section>
    );
}

export default LifeStyleMobile;
