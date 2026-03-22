/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";

/* Import des Components */
import { Home_A_Component } from "./components/Home_A.component";

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
import { pauseOtherVideos_Utils } from "../../../utils/pauseOtherVideos.utils";

function Home_Root() {
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            {/* Container A : Accueil avec H1 */}
            <Home_A_Component />

            {/* ---------- ---------- ---------- ---------- ---------- */}
            <h2 className={style.TitleH2}>
                Votre mariage, ce moment tant attendu !
            </h2>

            <Container4Images_Element
                img1={imagesHome_img_Data[4].src}
                metaNameImg1={imagesHome_img_Data[4].alt}
                img2={imagesHome_img_Data[5].src}
                metaNameImg2={imagesHome_img_Data[5].alt}
                img3={imagesHome_img_Data[6].src}
                metaNameImg3={imagesHome_img_Data[6].alt}
                img4={imagesHome_img_Data[7].src}
                metaNameImg4={imagesHome_img_Data[7].alt}
            />

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Il y a des jours où le temps semble suspendu, où chaque battement de cœur résonne fort et où chaque
                minute passe à la vitesse d’une seconde.{" "}
                <span className={style.SpanBold}>
                    {"Votre mariage est bien plus qu’un événement !."}
                </span>{" "}
                C’est une promesse murmurée entre vous deux et une acclamation partagée avec ceux que vous aimez.
                En tant que photographe de mariage à Montpellier, je ne me contente pas de prendre des photos.{" "}
                <span className={style.SpanBold}>
                    {"Je capture l’essence même de votre union."}
                </span>
            </p>

            <p className={style.TextP4}>
                Discrète mais toujours présente, je me fonds parmi vos invités pour saisir les éclats de rire, les
                étreintes sincères, les petites attentions qui font toute la différence. Je travaille comme un témoin
                invisible,
                <span className={style.SpanBold}>
                    {" figeant l’instant sans jamais le forcer. "}
                </span>
                Et après la fête, lorsque tout semble redevenu silencieux, il restera ces images, ce déroulé de
                cette journée, ces clichés que vous
                <span className={style.SpanBold}>
                    {" redécouvrirez au fil des années, "}
                </span>
                que vous partagerez avec vos proches et que vous transmettrez peut-être un jour.
            </p>

            <p className={style.TextP4}>
                Découvrez plus en détail{" "}
                <span className={style.SpanLink}>
                    <Link to={router[13].path}>
                        {"mes prestations de mariage !"}
                    </Link>
                </span>
            </p>

            <h2 className={style.TitleH2}>
                Créez vos portraits et vidéos sur-mesure avec une qualité professionnelle
            </h2>

            <p className={style.TextP4}>
                J’observe, je vous mets à l’aise, je capture l’instant avec justesse.
            </p>

            <p className={style.TextP4}>
                <strong>Photographe </strong> à Montpellier, je réalise des{" "}
                <span className={style.SpanLink}>
                    <Link to={`${router[12].path}#top`}>
                        {"portraits"}
                    </Link>
                </span>
                <strong> naturels et professionnels</strong>, en lumière naturelle ou en studio, toujours
                avec l’envie de révéler la personnalité de chacun.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanLink}>
                    <Link to={`${router[36].path}#top`}>
                        {"En vidéo"}
                    </Link>
                </span>
                , je procède de la même manière : je <strong>définis clairement votre besoin </strong>
                pour créer un film court, authentique et utile, qui transmet le message juste.
            </p>

            <p className={style.TextP4}>
                Pour les{" "}
                <span className={style.SpanLink}>
                    <Link to={`${router[13].path}#top`}>
                        {"mariages"}
                    </Link>
                </span>
                <strong>, j’adopte une approche reportage :</strong> des instants vrais, des émotions
                spontanées, une histoire sincère qui reflète votre journée.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanLink}>
                    <Link to={`${router[7].path}#top`}>
                        {"Découvrez mon parcours, de mes débuts à l'Atelier Photo Montpellier."}
                    </Link>
                </span>
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Des portraits professionnels et naturels adaptés à chaque personnalité et chaque besoin
            </h2>

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

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Et je cherche à capturer ces histoires. Pour votre entreprise, pour vos réseaux
                sociaux, pour une connivence… je cherche à trouver la photo de portrait qui fait
                votre force, votre énergie,{" "}
                <span className={style.SpanBold}>
                    {"votre rayonnement."}
                </span>
            </p>

            <p className={style.TextP4}>
                Que vous cherchiez un{" "}
                <span className={style.SpanBold}>
                    {"portrait corporate"}
                </span>{" "}
                pour affirmer votre crédibilité, un{" "}
                <span className={style.SpanBold}>
                    {"portrait lifestyle"}
                </span>{" "}
                qui capte l’ambiance d’un moment, ou encore un moment familial empreint
                de complicité, chaque séance est conçue pour vous mettre en lumière dans toute
                votre singularité. En tant que photographe professionnelle{" "}
                <span className={style.SpanBold}>
                    {"je peux travailler en studio ou en extérieur"}
                </span>
                , selon vos envies, dans une atmosphère calme et chaleureuse.
            </p>

            <p className={style.TextP4}>
                Et pour moi la réussite d’un shooting tient à ce que vous repartiez non seulement
                après avoir passé un bon moment, mais surtout avec
                <span className={style.SpanBold}>
                    {" des photos qui vous plaisent, "}
                </span>
                que vous avez envie de partager sur vos réseaux, et que vous puissiez vous dire{" "}
                <span className={style.SpanLine}>
                    {`"ah oui je m’aime bien dessus ! "`}
                </span>
                Commencez à planifier dès maintenant{" "}
                <span className={style.SpanLink}>
                    <Link to={router[12].path}>
                        {"votre séance"}
                    </Link>
                </span>
                {" !"}
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Des vidéos claires et professionnelles pensées pour l’entreprise comme pour le mariage
            </h2>

            <section className={style.ContainerVideo}>
                <h3 className={style.VideoTitle}>
                    Mariage de Laure et Charles - Immersion dans leur journée spéciale
                </h3>

                <video
                    className={style.VideoPlayer}
                    src="/video/video-mariage-laure-et-charles/video-mariage-laure-et-charles.mp4"
                    controls
                    preload="none"
                    controlsList="nodownload"
                    onPlay={(e) => pauseOtherVideos_Utils(e.currentTarget)}
                    onContextMenu={(e) => e.preventDefault()}
                    poster="/video/video-mariage-laure-et-charles/video-mariage-laure-et-charles.jpg"
                    playsInline
                />

                <p className={style.VideoDescription}>
                    Une courte vidéo présentant l’ambiance du mariage de Laure et Charles.
                </p>
            </section>

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
                    <span className={style.SpanLink}>
                        <Link to={`${router[7].path}#top`}>
                            {`QUI SUIS-JE`}
                        </Link>
                    </span>
                </p>

                <p className={style.TextP4}>
                    {`📸 Laissez-vous guider, repartez avec des images que vous aimez. `}
                    <span className={style.SpanLink}>
                        <Link to={`${router[8].path}#top`}>
                            {`Découvrez mon Portfolio !`}
                        </Link>
                    </span>
                </p>
            </div>
        </section>
    );
}

export default Home_Root;
