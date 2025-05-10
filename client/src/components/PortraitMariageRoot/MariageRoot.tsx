import style from "../StyleRootComponent.module.css";
import PortraitMariageRootComponentA from "./ComponentsPortraitMariageRoot/PortraitMariageRootComponentA/PortraitMariageRootComponentA";
import PortraitMariageRootComponentB from "./ComponentsPortraitMariageRoot/PortraitMariageRootComponentB/PortraitMariageRootComponentB";
import PortraitMariageRootComponentC from "./ComponentsPortraitMariageRoot/PortraitMariageRootComponentC/PortraitMariageRootComponentC";
import PortraitMariageRootComponentD from "./ComponentsPortraitMariageRoot/PortraitMariageRootComponentD/PortraitMariageRootComponentD";
import PortraitMariageRootComponentE from "./ComponentsPortraitMariageRoot/PortraitMariageRootComponentE/PortraitMariageRootComponentE";
import PortraitMariageRootComponentF from "./ComponentsPortraitMariageRoot/PortraitMariageRootComponentF/PortraitMariageRootComponentF";
import Container4ImagesRoot from "./../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ControllerDataImagePortraitMariage from "./ImagesPortraitMariageControllerData";
import GeneratorCardAvisClient from "./../GeneratorCardAvisClient/GeneratorCardAvisClient";
import AvisClientPortraitMariageControllerData from "./AvisClientPortraitMariageControllerData";

function PortraitMariageRoot() {
    return (
        <section className={`PortraitMariageRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait Mariage : Un reportage Authentique et Personnalisé.
                </h1>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
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
                <p className={style.TextP4}>
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
            <PortraitMariageRootComponentA />

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

            {/* Composant B : Une Implication Préalable : Comprendre Votre Vision */}
            <PortraitMariageRootComponentB />

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

            {/* Composant C : Le Repérage des Lieux : Une Préparation Essentielle */}
            <PortraitMariageRootComponentC />
            
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

            {/* Composant D : Respect des Attentes : Un Mariage Qui Vous Ressemble */}
            <PortraitMariageRootComponentD />
            
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

            {/* Composant E : Une Expérience Sereine et Détendue */}
            <PortraitMariageRootComponentE />
            
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

            {/* Composant F Conclusion : Des Photos Qui Vous Rappellent un Moment Unique : */}
            <PortraitMariageRootComponentF />

            {/* Avis Client : */}
            <GeneratorCardAvisClient avisClients={AvisClientPortraitMariageControllerData} />

        </section>
    );
}

export default PortraitMariageRoot;
