import style from "../../StyleRootComponent.module.css";

import { Link } from "react-router-dom";
import ListDataRouter from "../../../router/router";

import GeneratorCardAvisClient from "../../Elements/GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientHomeControllerData from "./AvisClientHomeControllerData";

import Container4ImagesRoot from "../../Elements/container-image/Container4ImagesRoot/Container4ImagesRoot";
import ImagesHomeControllerData from "./ImagesHomeControllerData";

import PremiumCardImgSudoRoot from "../../Elements/PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

import HomeRootComponentA from "./ComponentsHomeRoot/HomeRootComponentA/HomeRootComponentA";

function HomeRoot() {
    return (
        <section className={`HomeRoot ${style.ContainerRootRacine}`}>
            {/* Container A : Accueil avec H1 */}
            <HomeRootComponentA />

            {/* ---------- ---------- ---------- ---------- ---------- */}

                <h2 className={style.TitleH2}>
                    J'observe, je vous mets à l'aise, je fige l'instant avec justesse.
                </h2>

                <p className={style.TextP4}>
                    En tant que {" "}
                    <span className={style.SpanBold}>
                        {"photographe professionnelle"}
                    </span> 
                    {""} installée à Montpellier et {" "}
                    <span className={style.SpanBold}>
                        {"spécialisée en portraits"}
                    </span>
                    {" "} – qu’ils soient {" "} 
                    <span className={style.SpanLink}>
                        <Link to={ListDataRouter[11].path}>
                            {"corporate"}
                        </Link>
                    </span>
                    , {" "}
                    <span className={style.SpanLink}>
                        <Link to={ListDataRouter[12].path}>
                            {"lifestyle"}
                        </Link>
                    </span>
                    , {" "} 
                    réalisés en lumière naturelle ou au flash – je mets tout en œuvre pour 
                    saisir la
                    <span className={style.SpanBold}>
                        {" personnalité unique de chacun. "}
                    </span>  
                    La photographie de portrait professionnel 
                    n’est pas seulement une technique, c’est une véritable passion que je 
                    développe afin que chacun et chacune puisse 
                    <span className={style.SpanBold}>
                        {" porter un regard sur lui (elle) positif et valorisant."}
                    </span> 
                </p>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"Ma vision du mariage"}
                    </span>
                    {" "} se décline sous la forme d’un 
                    <span className={style.SpanBold}>
                        {" reportage photographique."}
                    </span>
                    Plutôt que de créer de simples poses figées, je privilégie l’instantanéité 
                    et la spontanéité des émotions vécues durant la cérémonie. Je cherche à 
                    être au plus près de tous ces instants afin qu’ils restent gravés, et cette 
                    approche me permet de {" "}
                    <span className={style.SpanBold}>
                        {"raconter une histoire visuelle complète"}
                    </span>
                    , où chaque image capte la complicité, la tendresse et l’authenticité du grand jour.
                </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}

                <h2 className={style.TitleH2}>
                    Chaque portrait a son histoire à raconter
                </h2>

            <Container4ImagesRoot
                img1={ImagesHomeControllerData[0].src}
                MetaNameImg1={ImagesHomeControllerData[0].alt}
                img2={ImagesHomeControllerData[1].src}
                MetaNameImg2={ImagesHomeControllerData[1].alt}
                img3={ImagesHomeControllerData[2].src}
                MetaNameImg3={ImagesHomeControllerData[2].alt}
                img4={ImagesHomeControllerData[3].src}
                MetaNameImg4={ImagesHomeControllerData[3].alt}
            />

                <p className={`${style.TextP4} ${style.TargetText1}`}>
                    Et je cherche à capturer ces histoires. Pour votre entreprise, pour vos réseaux 
                    sociaux, pour une connivence…je cherche à trouver la photo de portrait qui fait 
                    votre force, votre énergie, {" "}
                    <span className={style.SpanBold}>
                        {"votre rayonnement."}
                    </span>
                </p>
                <p className={style.TextP4}>
                    Que vous cherchiez un {" "}
                    <span className={style.SpanBold}>
                        {"portrait corporate"}
                    </span>
                    {" "} pour affirmer votre crédibilité, un {" "}
                    <span className={style.SpanBold}>
                        {"portrait lifestyle"}
                    </span>
                    {" "} qui capte l’ambiance d’un moment, ou encore un moment familial empreint 
                    de complicité, chaque séance est conçue pour vous mettre en lumière dans toute 
                    votre singularité. En tant que photographe professionnelle {" "} 
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
                    que vous avez envie de partager sur vos réseaux, et que vous puissiez vous dire {" "}
                    <span className={style.SpanLine}>
                        {`"ah oui je m’aime bien dessus ! "`}
                    </span>
                    {" "} Commencez à planifier dès maintenant {" "}
                    <span className={style.SpanLink}>
                        <Link to={ListDataRouter[12].path}>
                            {"votre séance"}
                        </Link>
                    </span>
                    {" !"}
                </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}
            
                <h2 className={style.TitleH2}>
                    Votre mariage, ce moment tant attendu !
                </h2>

            <Container4ImagesRoot
                img1={ImagesHomeControllerData[4].src}
                MetaNameImg1={ImagesHomeControllerData[4].alt}
                img2={ImagesHomeControllerData[5].src}
                MetaNameImg2={ImagesHomeControllerData[5].alt}
                img3={ImagesHomeControllerData[6].src}
                MetaNameImg3={ImagesHomeControllerData[6].alt}
                img4={ImagesHomeControllerData[7].src}
                MetaNameImg4={ImagesHomeControllerData[7].alt}
            />

                <p className={`${style.TextP4} ${style.TargetText1}`}>
                    Il y a des jours où le temps semble suspendu, où chaque battement de cœur résonne fort et où chaque 
                    minute passe à la vitesse d’une seconde. {" "}
                    <span className={style.SpanBold}>
                        {"Votre mariage est bien plus qu’un événement."}
                    </span>
                   {" "} C’est une promesse murmurée entre vous deux et une acclamation partagée avec ceux que vous aimez. 
                   En tant que photographe de mariage à Montpellier, je ne me contente pas de prendre des photos. {" "}
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
                    que vous partagerez avec 
                    vos proches et que vous transmettrez peut-être un jour.  
                </p>
                    <p className={style.TextP4}>
                        Découvrez plus en détail {" "}
                        <span className={style.SpanLink}>
                            <Link to={ListDataRouter[13].path}>
                                {"mes prestations de mariage !"}
                            </Link>
                        </span>
                    </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}

                <h2 className={style.TitleH2}>
                    Des photos, des expériences, des mots, ils m'ont fait confiance !
                </h2>

            <GeneratorCardAvisClient avisClients={AvisClientHomeControllerData}/>

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Un peu plus sur moi ?`}
            </h2>

        <div className={style.ContainerFloat}>
            <figure className={style.FloatLeftImg_Po}>
                <PremiumCardImgSudoRoot 
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
                Comme une séance de massage, un shooting photo commence souvent avec un peu d’appréhension. On ne sait pas 
                comment poser, on doute… Mais rapidement, la tension s’efface. Mon rôle ? Vous guider avec bienveillance 
                pour que ce moment devienne fluide, naturel, et surtout agréable c’est ma première mission. La deuxième 
                c’est qu’à la vue de vos photos vous faisiez WOUAH ! Pour en savoir encore un peu plus sur moi rendez vous 
                sur ma page {` `}
                <span className={style.SpanLink}>
                    <Link to={`${ListDataRouter[7].path}#top`}>
                        {`QUI SUIS-JE`}
                    </Link>
                </span>
            </p>
            <p className={style.TextP4}>
                {`📸 **Laissez-vous guider, repartez avec des images qui vous AIMEZ. `}
                <span className={style.SpanLink}>
                    <Link to={`${ListDataRouter[8].path}#top`}>
                        {`Découvez mon Portfolio !`}
                    </Link>
                </span>
            </p>
        </div>

        </section>
    );
}

export default HomeRoot;
