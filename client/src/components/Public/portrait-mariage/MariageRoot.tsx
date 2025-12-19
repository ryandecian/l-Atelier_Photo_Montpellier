import style from "../../StyleRootComponent.module.css";

import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";
import { imagesPortraitMariage_Data } from "./imagesPortraitMariage.data";

import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";
import { avisClientPortraitMariage_Data } from "./avisClientPortraitMariage.data";

import { TarifCard_Element} from "../../elements/tarifs-card/TarifsCard.element";
import { tarifsPortraitMariage_Data, mailtoLinkPortraitMariage_Data } from "./tarifsPortraitMariage.data";

import { Link } from "react-router-dom";
import ListDataRouter from "../../../router/router";

function PortraitMariageRoot() {
    return (
        <section className={`PortraitMariageRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Photo & Vidéo de mariage : Un récit complet, une émotion intacte.
                </h1>
            </header>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Votre mariage ne se résume pas à une suite de belles images."}
                </span>
                C’est une histoire qui se vit, qui se ressent, qui s’entend parfois… et qui mérite d’être racontée 
                avec justesse. En tant que
                <span className={style.SpanBold}>
                    {" photographe de mariage et vidéaste professionnelle, "}
                </span>
                je vous propose une approche globale: un regard unique, une cohérence visuelle, et deux langages 
                complémentaires — la photo pour figer l’instant, la vidéo pour en restituer le mouvement et l’émotion.
            </p>
            <p className={style.TextP4}>
                Mon travail repose sur un  
                <span className={style.SpanBold}>
                    {" reportage "}
                </span>
                sincère, élégant et humain. Pas de mise en scène forcée, pas de poses figées à rallonge. Je documente
                votre journée telle qu’elle se déroule, en restant attentive à ce qui compte vraiment : 
                <span className={style.SpanBold}>
                    {" les liens "}
                </span>
                qui garantissent des souvenirs à la hauteur de vos attentes.
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Le reportage photo et vidéo : raconter votre mariage de l’intérieur
            </h2>

            <p className={style.TextP4}>
                Je travaille dans un esprit documentaire : observer, anticiper, capter sans interrompre, tout en 
                restant attentive au cadrage, 
                <span className={style.SpanBold}>
                    {" à la lumière, à la beauté et à la force des images. "}
                </span> 
                En photo comme en vidéo, mon rôle est le même : être présente sans être envahissante, saisir les instants
                vrais et laisser la place à la spontanéité.
                <span className={style.SpanBold}>
                    {" La photo fige l’instant. La vidéo prolonge l’émotion."}
                </span>
                Les deux se répondent, sans se répéter, pour raconter votre histoire avec cohérence et sensibilité — 
                <span className={style.SpanBold}>
                    {" des images que vous serez fiers de regarder et de partager avec vos proches. "}
                </span> 
                
             </p>

            {/* Container Images 1 */}
            <Container4Images_Element
            img1={imagesPortraitMariage_Data[0].src}
            metaNameImg1={imagesPortraitMariage_Data[0].alt}
            img2={imagesPortraitMariage_Data[1].src}
            metaNameImg2={imagesPortraitMariage_Data[1].alt}
            img3={imagesPortraitMariage_Data[2].src}
            metaNameImg3={imagesPortraitMariage_Data[2].alt}
            img4={imagesPortraitMariage_Data[3].src}
            metaNameImg4={imagesPortraitMariage_Data[3].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Un échange continu pour obtenir des photos et vidéos qui vous corresponde
            </h2>

            <p className={style.TextP4}>
                Un mariage réussi, visuellement, ne s’improvise pas.
                Avant le jour J, nous prenons le temps d’échanger. Vraiment.
                Je cherche à comprendre :

                <span className={style.SpanBold}>
                    {" qui vous êtes, ce qui est important pour vous, ce que vous attendez de vos souvenirs."}
                </span> 
                 Certains couples veulent un rendu très naturel, presque brut.
                D’autres aiment une esthétique plus travaillée, plus éditoriale.
                D’autres encore sont sensibles aux codes actuels (images modernes, dynamiques, inspiration réseaux sociaux).

            </p>
            <p className={style.TextP4}>
                Il n’y a pas de bonne ou de mauvaise approche.
                <span className={style.SpanBold}>
                    {" il y a la vôtre  "}
                </span> 
                et mon rôle est de m’y adapter, pas de vous faire rentrer dans un moule.
                <span className={style.SpanBold}>
                    
                </span> 
               
            </p>

            {/* Container Images 2 */}
            <Container4Images_Element
            img1={imagesPortraitMariage_Data[4].src}
            metaNameImg1={imagesPortraitMariage_Data[4].alt}
            img2={imagesPortraitMariage_Data[5].src}
            metaNameImg2={imagesPortraitMariage_Data[5].alt}
            img3={imagesPortraitMariage_Data[6].src}
            metaNameImg3={imagesPortraitMariage_Data[6].alt}
            img4={imagesPortraitMariage_Data[7].src}
            metaNameImg4={imagesPortraitMariage_Data[7].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Repérage des lieux et gestion de la lumière en reportage de mariage
            </h2>

            <p className={style.TextP4}>
                Lorsque c’est nécessaire, je repère les 
                <span className={style.SpanBold}>
                    {" lieux en amont. . "}
                </span> 
                Pourquoi ? Parce que la lumière, les espaces et les circulations jouent un rôle clé, en photo comme en vidéo.
                
                <span className={style.SpanBold}>
                    {" Ce travail préparatoire me permet de : "}
                </span> 
                •	d’anticiper les meilleurs moments pour les images,
                •	de choisir des zones adaptées sans vous faire perdre de temps,
                •	de garantir une cohérence visuelle tout au long de la journée.

                <span className={style.SpanBold}>
                    {" Le jour J, vous n’avez rien à gérer. Vous vivez. Je m’adapte. "}
                </span> 
                
            </p>
            
            {/* Container Images 3 */}
            <Container4Images_Element
            img1={imagesPortraitMariage_Data[8].src}
            metaNameImg1={imagesPortraitMariage_Data[8].alt}
            img2={imagesPortraitMariage_Data[9].src}
            metaNameImg2={imagesPortraitMariage_Data[9].alt}
            img3={imagesPortraitMariage_Data[10].src}
            metaNameImg3={imagesPortraitMariage_Data[10].alt}
            img4={imagesPortraitMariage_Data[11].src}
            metaNameImg4={imagesPortraitMariage_Data[11].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Photo, vidéo… et respect de votre personnalité
            </h2>

            <p className={style.TextP4}>
                Votre mariage est un
                <span className={style.SpanBold}>
                    {" reflet de votre personnalité "}
                </span>
                et de vos goûts. Vous souhaitez des photos qui traduisent l’esprit de votre union, mais aussi de 
                vos valeurs et de vos envies esthétiques. C’est pourquoi je m’engage à respecter votre
                <span className={style.SpanBold}>
                    {" vision de l’image, "}
                </span>
                qu’elle soit simple et épurée, 
                <span className={style.SpanBold}>
                    {" sophistiquée et raffinée, "}
                </span>
                ou
                <span className={style.SpanBold}>
                    {" très moderne et dynamique, "}
                </span>
                inspirée des dernières
                <span className={style.SpanBold}>
                    {" tendances Instagram."}
                </span>
            </p>
            <p className={style.TextP4}>
                Certains couples préfèrent des clichés
                <span className={style.SpanBold}>
                    {" très naturels "}
                </span>
                avec un minimum d’intervention, tandis que d’autres souhaitent des photos plus 
                avec des mises en scène plus soignées. Je m’adapte à votre demande et vous accompagne dans le 
                choix du style qui vous correspond le mieux, tout en veillant à ce que chaque photo conserve son 
                authenticité. Mon objectif est d’être votre
                <span className={style.SpanBold}>
                    {" partenaire en photos ou en vidéos, "}
                </span>
                celui qui capte chaque sourire, chaque regard, chaque moment avec fidélité.
            </p>
            
            {/* Container Images 4 */}
            <Container4Images_Element
            img1={imagesPortraitMariage_Data[12].src}
            metaNameImg1={imagesPortraitMariage_Data[12].alt}
            img2={imagesPortraitMariage_Data[13].src}
            metaNameImg2={imagesPortraitMariage_Data[13].alt}
            img3={imagesPortraitMariage_Data[14].src}
            metaNameImg3={imagesPortraitMariage_Data[14].alt}
            img4={imagesPortraitMariage_Data[15].src}
            metaNameImg4={imagesPortraitMariage_Data[15].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Mon rôle : vous assurer un mariage fluide, serein et en confiance
            </h2>

            <p className={style.TextP4}>
                Le mariage est une journée intense.Beaucoup d’émotions, parfois du  {" "}
                <span className={style.SpanBold}>
                    {"stress, souvent peu de temps."}
                </span>
                {" "} Mon rôle va au-delà de la prise de vue :
                je suis aussi là pour créer un climat calme, fluide, rassurant. Quelques indications simples quand il le faut,
                beaucoup d’observation le reste du temps.
                L’objectif : que vous soyez 
                {" "}
                <span className={style.SpanBold}>
                    {"détendus, disponibles à ce que vous vivez"}
                </span>
                {" "} pas focalisés sur l’objectif ou la caméra. {" "}
                <span className={style.SpanBold}>
                    {" "}
                </span>
                
            </p>
            <p className={style.TextP4}>
                L'idée n'est pas de vous imposer des poses mais plutôt de vous aider à {" "}
                <span className={style.SpanBold}>
                    {"être vous-même."}
                </span>
                {" "} Une vidéo de mariage tout comme une bonne photo de mariage réside souvent dans la {" "}
                <span className={style.SpanBold}>
                    {"sincérité du moment"}
                </span>
                {" "} et dans la {" "}
                <span className={style.SpanBold}>
                    {"simplicité des gestes,"}
                </span>
                {" "} et je serai là pour m’assurer que tout se déroule dans la plus grande fluidité.
            </p>
            
            {/* Container Images 5 */}
            <Container4Images_Element
            img1={imagesPortraitMariage_Data[16].src}
            metaNameImg1={imagesPortraitMariage_Data[16].alt}
            img2={imagesPortraitMariage_Data[17].src}
            metaNameImg2={imagesPortraitMariage_Data[17].alt}
            img3={imagesPortraitMariage_Data[18].src}
            metaNameImg3={imagesPortraitMariage_Data[18].alt}
            img4={imagesPortraitMariage_Data[19].src}
            metaNameImg4={imagesPortraitMariage_Data[19].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
            Mon objectif : créer des souvenirs durables en photo comme en vidéo pour votre mariage            </h2>

            <p className={style.TextP4}>
                En tant que photographe et vidéaste professionnel installée à Montpellier mon engagement est simple : {" "}
                <span className={style.SpanBold}>
                    {"vous livrer des images qui traversent le temps."}
                </span>
                {" "} Des photos que vous aurez plaisir à imprimer, encadrer, transmettre.
                Des vidéos que vous aurez envie de revoir, pas seulement de stocker.
                Un reportage  
                {" "}
                <span className={style.SpanBold}>
                    {"fidèle à votre journée"}
                </span>
                {" "} sans artifice inutile, sans effets de mode excessifs. {" "}
                <span className={style.SpanBold}>
                    {"Grâce à une expérience complète,"}
                </span>
                {" "} une {" "}
                <span className={style.SpanBold}>
                    {"implication sincère"}
                </span>
                {" "} et une écoute attentive de vos attentes, je m’assure que votre mariage soit non 
                seulement magnifiquement documenté mais qu’il soit aussi un {" "}
                <span className={style.SpanBold}>
                    {"souvenir authentique"}
                </span>
                {" "} que vous chérirez toute votre vie.
            </p>
                    
            <p className={style.TextP4}>
                Si vous êtes prêts à faire de votre mariage un événement inoubliable, {" "}
                <span className={style.SpanLink}>
                    <Link to={ListDataRouter[3].path}>
                        {" contactez-moi "}
                    </Link>
                </span>
                {" "} pour commencer à discuter de ce que vous attendez de vos 
                <span className={style.SpanBold}>
                    {" photos de mariage ou de votre vidéo de mariage."}
                </span>
                {" "} Pour connaître mes prestations tarifaires, rendez-vous sur ma {" "}
                <span className={style.SpanLink}>
                    <Link to={ListDataRouter[2].path}>
                        {" page tarif."}
                    </Link>
                </span>
            </p>  

            {/* Carte Tarifs */}
            <TarifCard_Element id="tarifs-portrait-mariage" tarifs={tarifsPortraitMariage_Data} mailtoLink={mailtoLinkPortraitMariage_Data} />

            {/* Avis Client : */}
            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientPortraitMariage_Data} />

        </section>
    );
}

export default PortraitMariageRoot;
