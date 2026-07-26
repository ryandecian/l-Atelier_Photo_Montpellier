/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des Components */
import { Home_A_Component } from "./components/Home_A.component";
import { CarteMentale_Component } from "./components/CarteMentale.component";

/* Import des Components de Data */
import { avisClientHome_Data } from "./avisClientHome.data";
import { imagesHome_img_Data } from "./imagesHome.img.data";

/* Import des composants d'Elements */
import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { PremiumCardImgModal_Element } from "../../elements/premium-card-img-modal/PremiumCardImgModal.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../router/router";

/* Import des Utils */
// import { pauseOtherVideos_Utils } from "../../../utils/pauseOtherVideos.utils";

function Home_Root() {
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            {/* Container A : Accueil avec H1 */}
            <Home_A_Component />

            {/* ---------- ---------- ---------- ---------- ---------- */}
            <h2 className={style.TitleH2}>
                Vivez votre Mariage à Montpellier - Je Crée vos Souvenirs
            </h2>


            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Le jour de votre mariage, vous n’avez pas envie de passer 3 heures à poser devant l’objectif en souriant 
                bêtement. <br />
                Vous voulez <strong>vivre votre journée à 100 %</strong>, rire aux éclats, écraser une larme discrète et 
                danser jusqu'au bout de la nuit. Votre seule crainte ? Vous retrouver avec des photos figées qui ne vous ressemblent pas.
            </p>

            <Container4Images_Element
                img1={imagesHome_img_Data[0].src}
                metaNameImg1={imagesHome_img_Data[0].alt}
                img2={imagesHome_img_Data[1].src}
                metaNameImg2={imagesHome_img_Data[1].alt}
                img3={imagesHome_img_Data[2].src}
                metaNameImg3={imagesHome_img_Data[2].alt}
                img4={imagesHome_img_Data[3].src}
                metaNameImg4={imagesHome_img_Data[3].alt}
            />

            <CarteMentale_Component />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Des photos, des expériences, des mots, ils m'ont fait confiance !
            </h2>

            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientHome_Data} />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Un peu plus sur moi ?`}
            </h2>

            <div className={style.ContainerFloat}>
                <figure className={style.FloatLeftImg_Po}>
                    <PremiumCardImgModal_Element
                        className={style.ImgOnFigure}
                        src="./images/anne-saunier/lapm-photographe-professionnelle-anne-saunier-grabels-l-atelier-photo-montpellier.jpg"
                        alt="Portrait de la photographe professionnelle Anne SAUNIER"
                    />
                    <figcaption className={style.Figcaption}>
                        Anne SAUNIER
                    </figcaption>
                </figure>

                <p className={style.TextP4}>
                    Ma passion pour la photographie a commencé avec l’argentique, dans une salle de bains de la maison familiale
                    transformée en labo photo. Après une pause, c’est par l’image immobilière que j’ai renoué avec l’art du
                    cadrage et de la lumière. Puis, avec le studio, j’ai perfectionné mon travail sur l’éclairage, notamment
                    grâce au flash. Aujourd’hui, je mets cette expertise au service du portrait et du reportage de mariage,
                    toujours à la recherche d’authenticité et d’émotion.
                </p>

                <p className={style.TextP4}>
                    Comme une séance de massage, un shooting photo commence souvent avec un peu d’appréhension.
                    Mon rôle ? Vous guider avec bienveillance pour que ce moment devienne fluide, naturel et agréable.
                    Pour en savoir encore un peu plus sur moi rendez-vous sur ma page{" "}
                    <Link to={`${router[7].path}#top`} className={style.Link}>
                        {`QUI SUIS-JE`}
                    </Link>
                </p>

                <p className={style.TextP4}>
                    {`📸 Laissez-vous guider, repartez avec des images que vous aimez. `}
                    <Link to={`${router[8].path}#top`} className={style.Link}>
                        {`Découvrez mon Portfolio !`}
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default Home_Root;
