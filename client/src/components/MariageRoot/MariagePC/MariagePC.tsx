import style from "./MariagePC.module.css";
import MariageRootComposantA from "../ComponentsMariageRoot/MariageRootComposantA/MariageRootComposantA";

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
        </section>
    );
}

export default MariagePC;
