import style from "./MariagePC.module.css";
import MariageRootComposantA from "../ComponentsMariageRoot/MariageRootComponentA/MariageRootComposantA";
import MariageRootComposantB from "../ComponentsMariageRoot/MariageRootComponentB/MariageRootComposantB";
import MariageRootComposantC from "../ComponentsMariageRoot/MariageRootComponentC/MariageRootComposantC";
import MariageRootComposantD from "../ComponentsMariageRoot/MariageRootComponentD/MariageRootComposantD";
import MariageRootComposantE from "../ComponentsMariageRoot/MariageRootComponentE/MariageRootComposantE";
import MariageRootComposantF from "../ComponentsMariageRoot/MariageRootComponentF/MariageRootComposantF";
import Container4ImagesRoot from "../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ControllerDataImageMariage from "../ImagesMariageControllerData";
import GeneratorCardAvisClient from "../../GeneratorCardAvisClient/GeneratorCardAvisClient";
import ControllerDataAvisClientMariage from "../AvisClientMariageControllerData";

function MariagePC() {
    return (
        <section className={style.MariagePC}>
            <header className={style.ContainerTitle}>
                <h1 className={style.Title}>
                    Mariage : Un reportage Authentique et Personnalisé.
                </h1>
            </header>

            <article className={style.ContainerText}>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"Le mariage est l’un des moments les plus significatifs de votre vie,"}
                    </span>
                    {" "} un instant unique où les émotions, les rires, et parfois même les larmes, se mêlent pour
                    créer des souvenirs impérissables. En tant que {" "} 
                    <span className={style.SpanBold}>
                        {"photographe de mariage professionnelle,"}
                    </span>
                    mon objectif est de capturer ces moments d’émotion de manière authentique, sans poser ni artifice, 
                    dans le respect de votre vision et de vos attentes.
                </p>
                <p className={style.Text}>
                    Ma démarche repose sur un 
                    <span className={style.SpanBold}>
                        {"style de reportage"}
                    </span>
                    {" "} qui permet de figer l’essence même de votre journée, de l’intimité des préparatifs à 
                    l’effervescence de la fête. Chaque image que je capture raconte une histoire, la vôtre, celle d’une 
                    journée où l’amour et les émotions se vivent en toute spontanéité. Mais au-delà de la simple prise 
                    de vue, mon approche se distingue par une {" "}
                    <span className={style.SpanBold}>
                        {"implication active"}
                    </span>
                    {" "} et une {" "}
                    <span className={style.SpanBold}>
                        {"préparation minutieuse"}
                    </span>
                    {" "} qui garantissent des souvenirs à la hauteur de vos attentes.
                </p>
            </article>

            {/* Composant A : Le Style "Reportage" : Capturer l'Authenticité de Votre Mariage */}
            <MariageRootComposantA />

            {/* Container Images 1 */}
            <Container4ImagesRoot
            img1={ControllerDataImageMariage[0].src}
            MetaNameImg1={ControllerDataImageMariage[0].alt}
            img2={ControllerDataImageMariage[1].src}
            MetaNameImg2={ControllerDataImageMariage[1].alt}
            img3={ControllerDataImageMariage[2].src}
            MetaNameImg3={ControllerDataImageMariage[2].alt}
            img4={ControllerDataImageMariage[3].src}
            MetaNameImg4={ControllerDataImageMariage[3].alt}
            />

            {/* Composant B : Une Implication Préalable : Comprendre Votre Vision */}
            <MariageRootComposantB />

            {/* Container Images 2 */}
            <Container4ImagesRoot
            img1={ControllerDataImageMariage[0].src}
            MetaNameImg1={ControllerDataImageMariage[0].alt}
            img2={ControllerDataImageMariage[1].src}
            MetaNameImg2={ControllerDataImageMariage[1].alt}
            img3={ControllerDataImageMariage[2].src}
            MetaNameImg3={ControllerDataImageMariage[2].alt}
            img4={ControllerDataImageMariage[3].src}
            MetaNameImg4={ControllerDataImageMariage[3].alt}
            />

            {/* Composant C : Le Repérage des Lieux : Une Préparation Essentielle */}
            <MariageRootComposantC />
            
            {/* Container Images 3 */}
            <Container4ImagesRoot
            img1={ControllerDataImageMariage[0].src}
            MetaNameImg1={ControllerDataImageMariage[0].alt}
            img2={ControllerDataImageMariage[1].src}
            MetaNameImg2={ControllerDataImageMariage[1].alt}
            img3={ControllerDataImageMariage[2].src}
            MetaNameImg3={ControllerDataImageMariage[2].alt}
            img4={ControllerDataImageMariage[3].src}
            MetaNameImg4={ControllerDataImageMariage[3].alt}
            />

            {/* Composant D : Respect des Attentes : Un Mariage Qui Vous Ressemble */}
            <MariageRootComposantD />
            
            {/* Container Images 4 */}
            <Container4ImagesRoot
            img1={ControllerDataImageMariage[0].src}
            MetaNameImg1={ControllerDataImageMariage[0].alt}
            img2={ControllerDataImageMariage[1].src}
            MetaNameImg2={ControllerDataImageMariage[1].alt}
            img3={ControllerDataImageMariage[2].src}
            MetaNameImg3={ControllerDataImageMariage[2].alt}
            img4={ControllerDataImageMariage[3].src}
            MetaNameImg4={ControllerDataImageMariage[3].alt}
            />

            {/* Composant E : Une Expérience Sereine et Détendue */}
            <MariageRootComposantE />
            
            {/* Container Images 5 */}
            <Container4ImagesRoot
            img1={ControllerDataImageMariage[0].src}
            MetaNameImg1={ControllerDataImageMariage[0].alt}
            img2={ControllerDataImageMariage[1].src}
            MetaNameImg2={ControllerDataImageMariage[1].alt}
            img3={ControllerDataImageMariage[2].src}
            MetaNameImg3={ControllerDataImageMariage[2].alt}
            img4={ControllerDataImageMariage[3].src}
            MetaNameImg4={ControllerDataImageMariage[3].alt}
            />

            {/* Composant F Conclusion : Des Photos Qui Vous Rappellent un Moment Unique : */}
            <MariageRootComposantF />

            {/* Avis Client : */}
            <GeneratorCardAvisClient avisClients={ControllerDataAvisClientMariage} />

        </section>
    );
}

export default MariagePC;
