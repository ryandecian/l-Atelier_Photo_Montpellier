/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des Components */
import { Home_A_Component } from "./components/Home_A.component";
// import { CarteMentale_Component } from "./components/CarteMentale.component";

/* Import des Components de Data */
import { avisClientHome_Data } from "./avisClientHome.data";
import { faqHome_Data } from "./faq.data";
import { imagesHome_img_Data } from "./imagesHome.img.data";

/* Import des composants d'Elements */
import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { PremiumCardImgModal_Element } from "../../elements/premium-card-img-modal/PremiumCardImgModal.element";
import { FAQ_Element } from "../../elements/faq/FAQ.element";

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

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                C’est là que j’interviens. À l'Atelier Photo Montpellier, je ne vous demande pas de poser (enfin quelque fois si…). <br />
                Je capture le vrai, ces <strong>instants éphémères</strong> qui se déroulent tout au long de la journée : 
                les éclats de rire volés, les regards complices, et cette folle énergie <strong>qui fera de votre mariage un moment unique.</strong>
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

            {/* <CarteMentale_Component /> */}

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Préparatifs : Le moteur chauffe
            </h2>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Les préparatifs sont le véritable début  de votre journée de mariage, ce n'est pas juste l'avant-match, 
                c'est le moment crucial où la journée prend racine. Vous n'êtes pas encore mariés, mais l'effervescence, 
                elle, est bien là. <strong>Ce sont ces heures que vous voudrez revivre </strong> une fois le tumulte 
                passé, parce que c'est là que l'appréhension et l'excitation sont à leur comble.
            </p>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Autour de vous, ça bouillonne. Les témoins qui virent le stress en proposant à boire, à manger, la famille 
                aux petits soins, et cette énergie électrique qui monte crescendo. Je suis là pour capturer d’infimes gestes : 
                le pinceau qui trace le maquillage de la mariée, un endroit qui met en lumière les alliances, le nœud 
                papillon qui se boucle, la veste qu'on ajuste ou ce coup d'œil dans le miroir quand vous réalisez que, 
                dans quelques minutes, vous serez attendu(e).
            </p>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                <strong>Je ne fige rien. Je documente le mouvement, les détails, le chaos organisé.</strong>
            </p>

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
            
            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Photos de couple : Une parenthèse rien qu'à vous
            </h2>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Je ne vous demande pas de poser. Je vous invite simplement à marcher, à vous rapprocher, à échanger 
                quelques mots, à profiter de ce premier instant en tant que mari et femme. Les plus belles images naissent 
                de ces gestes spontanés : une main qui cherche l'autre, un éclat de rire, un regard qui en dit plus que 
                de longs discours.
            </p>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Cette séance dure généralement entre vingt et quarante-cinq minutes, sans jamais vous couper de vos 
                invités plus longtemps que nécessaire. C'est une respiration au cœur de votre journée, un moment précieux 
                qui vous appartient vraiment... et qui laissera souvent les images les plus fortes de votre mariage. 
                Autour de Montpellier, ou sur le site en lui-même, je sélectionne avec vous les lieux qui vont matcher 
                afin de réaliser des photos de couple naturelles et lumineuses, spontanées comme posées pour quelques une.
            </p>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                <strong>Je ne photographie pas deux personnes. Je raconte le lien qui les unit.</strong>
            </p>
            
            <Container4Images_Element
                img1={imagesHome_img_Data[8].src}
                metaNameImg1={imagesHome_img_Data[8].alt}
                img2={imagesHome_img_Data[9].src}
                metaNameImg2={imagesHome_img_Data[9].alt}
                img3={imagesHome_img_Data[10].src}
                metaNameImg3={imagesHome_img_Data[10].alt}
                img4={imagesHome_img_Data[11].src}
                metaNameImg4={imagesHome_img_Data[11].alt}
            />
            
            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Cérémonies : Le cœur de votre engagement
            </h2>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Chaque mariage est unique. Certains couples choisissent une cérémonie à la mairie, d'autres une cérémonie 
                laïque ou religieuse, et beaucoup vivent plusieurs temps forts au cours de la même journée. Quel que soit 
                votre choix, chacun de ces instants mérite d'être raconté avec la même attention.
            </p>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                À la mairie, tout s'accélère. L'entrée dans la salle, les regards échangés avec vos proches, les mains 
                qui se cherchent, les sourires parfois mêlés de quelques larmes, puis ce fameux « oui » qui marque 
                officiellement le début de votre nouvelle histoire. Des instants simples, authentiques et chargés d'émotion.
            </p>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Lors d'une cérémonie d'engagement, chaque détail raconte votre personnalité. Les discours de vos proches, 
                les rituels symboliques, les promesses que vous vous adressez, les applaudissements, les éclats de rire 
                ou les silences remplis d'émotion créent une atmosphère unique que j'aime capturer avec discrétion.
            </p>

            <p className={`${style.TextP4} ${style.TargetText1}`}>
                <strong>Je ne photographie pas un "oui". Je raconte tout ce qui l'entoure</strong>
            </p>
                        
            <Container4Images_Element
                img1={imagesHome_img_Data[12].src}
                metaNameImg1={imagesHome_img_Data[12].alt}
                img2={imagesHome_img_Data[13].src}
                metaNameImg2={imagesHome_img_Data[13].alt}
                img3={imagesHome_img_Data[14].src}
                metaNameImg3={imagesHome_img_Data[14].alt}
                img4={imagesHome_img_Data[15].src}
                metaNameImg4={imagesHome_img_Data[15].alt}
            />
            
            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Réception - Soirée: L'histoire continue
            </h2>
            
            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Pendant que vous partagez ces instants avec vos proches, je continue à raconter votre histoire. Je 
                photographie les échanges spontanés, les accolades, les regards complices, les discours qui font rire ou 
                qui émeuvent, les verres qui s'entrechoquent et toutes ces petites scènes qui, mises bout à bout, feront 
                revivre l'ambiance de votre réception.
            </p>
            
            <p className={`${style.TextP4} ${style.TargetText1}`}>
                J'accorde aussi une attention particulière à tout ce que vous avez préparé avec soin. La décoration de 
                votre salle, les centres de table, le plan de table, le bouquet, les compositions florales, les alliances, 
                la papeterie, la pièce montée ou encore les lumières qui transforment l'atmosphère au fil de la soirée. 
                Tous ces détails racontent votre personnalité et méritent d'avoir leur place dans votre reportage.
            </p>
            
            <p className={`${style.TextP4} ${style.TargetText1}`}>
                <strong>Je ne photographie pas seulement ce qui se voit. Je capture aussi tout ce qui se ressent.</strong>
            </p>
                                    
            <Container4Images_Element
                img1={imagesHome_img_Data[16].src}
                metaNameImg1={imagesHome_img_Data[16].alt}
                img2={imagesHome_img_Data[17].src}
                metaNameImg2={imagesHome_img_Data[17].alt}
                img3={imagesHome_img_Data[18].src}
                metaNameImg3={imagesHome_img_Data[18].alt}
                img4={imagesHome_img_Data[19].src}
                metaNameImg4={imagesHome_img_Data[19].alt}
            />
            
            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Des photos de mariage qui racontent aussi tout ce que vous n’avez pas vu
            </h2>
                    
            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Bien sûr, vous aurez de magnifiques photos de vous, celles que vous aurez envie d'encadrer, de partager 
                et de regarder encore dans vingt ans.
            </p>
                    
            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Mais votre mariage ne se résume pas à ces quelques images.
            </p>
                    
            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Le jour de votre mariage, vous allez manquer une partie de ce qui se passe. Pendant que vous vivez 
                pleinement chaque instant, des dizaines d'autres s'écrivent autour de vous. Mon travail, c'est de vous 
                les faire découvrir.
            </p>
                    
            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Je ne vous fais pas poser toute la journée. Je photographie autant les émotions que tout ce qui les fait 
                naître : les gestes spontanés, les regards, les détails que vous avez imaginés pendant des mois et toute 
                cette vie qui se déroule autour de vous sans que vous puissiez la voir.
            </p>
                    
            <p className={`${style.TextP4} ${style.TargetText1}`}>
                Au final, vous ne recevez pas seulement une galerie de belles photos. Vous retrouvez l'histoire complète 
                de votre mariage, avec ses instants forts, ses émotions et tous ces petits fragments qui, une fois réunis, 
                feront revivre cette journée exactement comme vous l'avez ressentie.
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                FAQ : Questions fréquentes sur la photographie de mariage à Montpellier ?
            </h2>

            <FAQ_Element items={faqHome_Data} />
            
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
