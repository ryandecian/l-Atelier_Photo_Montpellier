import style from "./HomeRootComposantC.module.css"
import ContainerImgHomeRoot from "../ComposantHomeRoot/ContainerImgHomeRoot/ContainerImgHomeRoot";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";

/* Import des images*/
import img5 from "../../../../assets/Images/ImageHomePage/Homeimg5.jpg";
import img6 from "../../../../assets/Images/ImageHomePage/Homeimg6.jpg";
import img7 from "../../../../assets/Images/ImageHomePage/Homeimg7.jpg";
import img8 from "../../../../assets/Images/ImageHomePage/Homeimg8.jpg";

function HomeRootComposantC() {
    const data = {
        img5: img5,
        MetaNameimg5: "Les mariés vers la mairie",
        img6: img6,
        MetaNameimg6: "Portrait Mariage a là Tour Magne",
        img7: img7,
        MetaNameimg7: "Photo de mariage avec enfant",
        img8: img8,
        MetaNameimg8: "Les mariés en Selfie à Palavas",
    }
    return (
        <section className={style.HomeRootComposantC}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Votre mariage, votre engagement, ce moment
                </h2>
            </header>

            <ContainerImgHomeRoot
                img1={data.img5}
                MetaNameImg1={data.MetaNameimg5}
                img2={data.img6}
                MetaNameImg2={data.MetaNameimg6}
                img3={data.img7}
                MetaNameImg3={data.MetaNameimg7}
                img4={data.img8}
                MetaNameImg4={data.MetaNameimg8}
            />

            <article className={style.ContainerText}>
                <p className={`${style.Text} ${style.TargetText1}`}>
                    Le jour de votre mariage est un moment unique, et chaque détail mérite d'être capturé avec soin 
                    et émotion. Photographe spécialisée dans le mariage professionnel, basée à Montpellier, je mets 
                    tout en œuvre pour immortaliser les moments les plus authentiques et les plus précieux de cette 
                    journée exceptionnelle. Que ce soit lors des préparatifs, pendant la cérémonie, lors des séances 
                    de couple ou encore pendant la soirée dansante, je vous accompagne avec une approche discrète et 
                    naturelle, en créant des images (voir des vidéos) qui racontent réellement votre histoire. Mon 
                    objectif ? Vous offrir des souvenirs intemporels et sincères.
                </p>
            </article>
            <article className={style.ContainerText}>
                    <p className={style.Text}>
                        Découvrez plus en détail {" "}
                        <span className={style.SpanLink}>
                            <Link to={ListDataRouter[13].path}>
                                {"mes prestations de mariage"}
                            </Link>
                        </span>
                        {" "} et comment je peux vous aider à revivre votre journée dans tous ses moments !
                    </p>
                </article>

        </section>
    );
}

export default HomeRootComposantC;