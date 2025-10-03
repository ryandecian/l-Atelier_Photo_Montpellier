import style from "../../StyleRootComponent.module.css";

import Container4ImagesRoot from "../../Elements/container-image/container-4-Images/Container4Images.element";
import ControllerDataImagePortraitMariage from "./ImagesPortraitMariageControllerData";

import GeneratorCardAvisClient from "../../Elements/GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitMariageControllerData from "./AvisClientPortraitMariageControllerData";

import TarifCardRoot from "../../Elements/TarifsCard/TarifsCardRoot";
import { TarifsPortraitMariage, MailtoLinkPortraitMariage } from "./TarifsPortraitMariage";

import { Link } from "react-router-dom";
import ListDataRouter from "../../../router/router";

function PortraitMariageRoot() {
    return (
        <section className={`PortraitMariageRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait Mariage : Un reportage Authentique et Personnalisé.
                </h1>
            </header>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Le mariage est l’un des moments les plus significatifs de votre vie, "}
                </span>
                un instant unique où les émotions, les rires, et parfois même les larmes, se mêlent pour
                créer des souvenirs impérissables. En tant que
                <span className={style.SpanBold}>
                    {" photographe de mariage professionnelle, "}
                </span>
                mon objectif est de capturer ces moments d’émotion de manière authentique, sans poser ni artifice, 
                dans le respect de votre vision et de vos attentes.
            </p>
            <p className={style.TextP4}>
                Ma démarche repose sur un 
                <span className={style.SpanBold}>
                    {" style de reportage "}
                </span>
                qui permet de figer l’essence même de votre journée, de l’intimité des préparatifs à 
                l’effervescence de la fête. Chaque image que je capture raconte une histoire, la vôtre, celle d’une 
                journée où l’amour et les émotions se vivent en toute spontanéité. Mais au-delà de la simple prise 
                de vue, mon approche se distingue par une
                <span className={style.SpanBold}>
                    {" implication active "}
                </span>
                et une
                <span className={style.SpanBold}>
                    {" préparation minutieuse "}
                </span>
                qui garantissent des souvenirs à la hauteur de vos attentes.
            </p>

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Le Style "Reportage" : Capturer l'Authenticité de Votre Mariage
            </h2>

            <p className={style.TextP4}>
                Loin des photos posées et figées, je privilégie un style de
                <span className={style.SpanBold}>
                    {" reportage photographique "}
                </span> 
                qui met l'accent sur
                <span className={style.SpanBold}>
                    {" l'instantanéité "}
                </span>
                et
                <span className={style.SpanBold}>
                    {" l'authenticité. "}
                </span> 
                Mon rôle est de vous accompagner tout au long de votre journée sans perturber le fil naturel 
                des événements. J’agis en toute discrétion, en capturant les moments tels qu’ils se produisent : 
                un regard échangé, une main tendue, un éclat de rire ou une larme discrète.
            </p>
            <p className={style.TextP4}>
                L’idée n’est pas seulement de réaliser des clichés, mais de 
                <span className={style.SpanBold}>
                    {" raconter votre histoire. "}
                </span> 
                Celle de votre journée exceptionnelle, remplie de moments fugaces mais d’une immense signification. 
                Vous pourrez revivre ces instants chaque fois que vous regarderez les photos, avec la même émotion que 
                lors du mariage.
            </p>

            {/* Container Images 1 */}
            <Container4ImagesRoot
            img1={ControllerDataImagePortraitMariage[0].src}
            MetaNameImg1={ControllerDataImagePortraitMariage[0].alt}
            img2={ControllerDataImagePortraitMariage[1].src}
            MetaNameImg2={ControllerDataImagePortraitMariage[1].alt}
            img3={ControllerDataImagePortraitMariage[2].src}
            MetaNameImg3={ControllerDataImagePortraitMariage[2].alt}
            img4={ControllerDataImagePortraitMariage[3].src}
            MetaNameImg4={ControllerDataImagePortraitMariage[3].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Une Implication Préalable : Comprendre Votre Vision
            </h2>

            <p className={style.TextP4}>
                Un mariage est un moment qui vous est cher, et c’est pourquoi je m’investis pleinement avant le 
                grand jour. Chaque couple a ses propres attentes, ses propres envies, et ses propres goûts.
                <span className={style.SpanBold}>
                    {" Une discussion approfondie, "}
                </span> 
                en amont de la journée est donc essentielle. Je prends le temps d’apprendre à vous connaître, 
                de comprendre vos préférences et ce que vous attendez des photos de votre mariage.
            </p>
            <p className={style.TextP4}>
                Nous discuterons ensemble de vos envies concernant le style de photos que vous souhaitez. 
                    Voulez-vous un
                <span className={style.SpanBold}>
                    {" style simple et naturel, "}
                </span> 
                proche du documentaire ? Ou un
                <span className={style.SpanBold}>
                    {" style plus sophistiqué "}
                </span> 
                et travaillé, avec des photos plus posées et scénarisées ? Peut-être êtes-vous un couple 
                influencé par les
                <span className={style.SpanBold}>
                    {" tendances Instagram "}
                </span> 
                et préférez-vous des images plus modernes et stylisées ? Quelle que soit votre vision, 
                je serai à l’écoute de vos attentes pour réaliser des photos qui vous ressemblent.
            </p>

            {/* Container Images 2 */}
            <Container4ImagesRoot
            img1={ControllerDataImagePortraitMariage[4].src}
            MetaNameImg1={ControllerDataImagePortraitMariage[4].alt}
            img2={ControllerDataImagePortraitMariage[5].src}
            MetaNameImg2={ControllerDataImagePortraitMariage[5].alt}
            img3={ControllerDataImagePortraitMariage[6].src}
            MetaNameImg3={ControllerDataImagePortraitMariage[6].alt}
            img4={ControllerDataImagePortraitMariage[7].src}
            MetaNameImg4={ControllerDataImagePortraitMariage[7].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Le Repérage des Lieux : Une Préparation Essentielle
            </h2>

            <p className={style.TextP4}>
                Un autre aspect fondamental de mon approche est le
                <span className={style.SpanBold}>
                    {" repérage préalable des lieux. "}
                </span> 
                Si nécessaire, je me rends sur les lieux de votre mariage avant le jour J afin de repérer les 
                meilleures zones pour les photos, observer la lumière naturelle et évaluer les angles les plus favorables. 
                Ce repérage me permet également de mieux comprendre l’agencement des lieux et de
                <span className={style.SpanBold}>
                    {" prévoir les meilleurs moments "}
                </span> 
                pour capturer des images naturelles, tout en respectant vos envies. Vous pourrez ainsi 
                <span className={style.SpanBold}>
                    {" vous concentrer sur l’essentiel : vivre pleinement votre journée, "}
                </span> 
                pendant que je m’assure de capturer chaque instant clé dans le respect de l’ambiance.
            </p>
            
            {/* Container Images 3 */}
            <Container4ImagesRoot
            img1={ControllerDataImagePortraitMariage[8].src}
            MetaNameImg1={ControllerDataImagePortraitMariage[8].alt}
            img2={ControllerDataImagePortraitMariage[9].src}
            MetaNameImg2={ControllerDataImagePortraitMariage[9].alt}
            img3={ControllerDataImagePortraitMariage[10].src}
            MetaNameImg3={ControllerDataImagePortraitMariage[10].alt}
            img4={ControllerDataImagePortraitMariage[11].src}
            MetaNameImg4={ControllerDataImagePortraitMariage[11].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Respect des Attentes : Un Mariage Qui Vous Ressemble
            </h2>

            <p className={style.TextP4}>
                Votre mariage est un
                <span className={style.SpanBold}>
                    {" réflexe de votre personnalité "}
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
                    {" partenaire photographique, "}
                </span>
                celui qui capte chaque sourire, chaque regard, chaque moment avec fidélité.
            </p>
            
            {/* Container Images 4 */}
            <Container4ImagesRoot
            img1={ControllerDataImagePortraitMariage[12].src}
            MetaNameImg1={ControllerDataImagePortraitMariage[12].alt}
            img2={ControllerDataImagePortraitMariage[13].src}
            MetaNameImg2={ControllerDataImagePortraitMariage[13].alt}
            img3={ControllerDataImagePortraitMariage[14].src}
            MetaNameImg3={ControllerDataImagePortraitMariage[14].alt}
            img4={ControllerDataImagePortraitMariage[15].src}
            MetaNameImg4={ControllerDataImagePortraitMariage[15].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Une Expérience Sereine et Détendue
            </h2>

            <p className={style.TextP4}>
                Le mariage est souvent une journée pleine de {" "}
                <span className={style.SpanBold}>
                    {"stress"}
                </span>
                {" "} et d’émotions. C’est pourquoi, pendant toute la séance photo, je vous aide à rester {" "}
                <span className={style.SpanBold}>
                    {"détendus"}
                </span>
                {" "} et à vous sentir {" "}
                <span className={style.SpanBold}>
                    {"à l’aise"}
                </span>
                {" "} devant l’objectif. Que vous soyez nerveux à l’idée d’être sous les projecteurs ou que vous 
                ne sachiez pas comment vous comporter devant un appareil photo, je serai là pour vous guider avec 
                des conseils simples sur la posture, l’expression et les moments à capturer.
            </p>
            <p className={style.TextP4}>
                L'idée n'est pas de vous imposer des poses mais plutôt de vous aider à {" "}
                <span className={style.SpanBold}>
                    {"être vous-même."}
                </span>
                {" "} Une bonne photo de mariage réside souvent dans la {" "}
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
            <Container4ImagesRoot
            img1={ControllerDataImagePortraitMariage[16].src}
            MetaNameImg1={ControllerDataImagePortraitMariage[16].alt}
            img2={ControllerDataImagePortraitMariage[17].src}
            MetaNameImg2={ControllerDataImagePortraitMariage[17].alt}
            img3={ControllerDataImagePortraitMariage[18].src}
            MetaNameImg3={ControllerDataImagePortraitMariage[18].alt}
            img4={ControllerDataImagePortraitMariage[19].src}
            MetaNameImg4={ControllerDataImagePortraitMariage[19].alt}
            />

            {/* ---------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                Conclusion : Des Photos Qui Vous Rappellent un Moment Unique
            </h2>

            <p className={style.TextP4}>
                Mon engagement en tant que photographe de mariage est de vous offrir bien plus que des photos : 
                je souhaite vous offrir une {" "}
                <span className={style.SpanBold}>
                    {"expérience complète,"}
                </span>
                {" "} où chaque image devient un {" "}
                <span className={style.SpanBold}>
                    {"souvenir vivant"}
                </span>
                {" "} de votre journée. Grâce à une {" "}
                <span className={style.SpanBold}>
                    {"expérience complète,"}
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
                Que vous soyez en quête de photos naturelles et spontanées ou de portraits plus posés et sophistiqués, 
                je suis là pour faire en sorte que votre {" "}
                <span className={style.SpanBold}>
                    {"vision du mariage"}
                </span>
                {" "} se reflète dans chaque image. Votre journée, votre style, vos moments, capturés avec 
                <span className={style.SpanBold}>
                    {" authenticité et passion."}
                </span>
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
                    {" souvenirs photographiques."}
                </span>
                {" "} Pour connaître mes prestations tarifaires, rendez-vous sur ma {" "}
                <span className={style.SpanLink}>
                    <Link to={ListDataRouter[2].path}>
                        {" page tarif."}
                    </Link>
                </span>
            </p>  

            {/* Carte Tarifs */}
            <TarifCardRoot id="tarifs-portrait-mariage" tarifs={TarifsPortraitMariage} mailtoLink={MailtoLinkPortraitMariage} />

            {/* Avis Client : */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitMariageControllerData} />

        </section>
    );
}

export default PortraitMariageRoot;
