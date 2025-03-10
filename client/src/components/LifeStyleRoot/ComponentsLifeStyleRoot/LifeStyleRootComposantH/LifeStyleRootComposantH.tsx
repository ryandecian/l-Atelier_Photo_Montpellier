import style from "./LifeStyleRootComposantH.module.css";
import { LinkExt } from "../../../../router/router";

function LifeStyleRootComposantH() {
    return (
        <section className={style.LifeStyleRootComposantH}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    9 Mois (Grossesse) : Immortaliser cette étape unique 
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.Text}>
                    La grossesse est une période intense, faite de changements et d’émotions. {" "}
                    <span className={style.SpanBold}>
                        {"Votre corps évolue,"}
                    </span> 
                    {" "} votre quotidien aussi, et ces neuf mois passent finalement bien plus vite qu’on ne l’imagine. 
                    Cette séance photo est là pour {" "}
                    <span className={style.SpanBold}>
                        {"capturer cette transition,"}
                    </span> 
                    {" "} sans artifices, avec authenticité et élégance.
                </p>
                <p className={style.Text}>
                    Chaque femme vit sa grossesse différemment, et chaque séance est pensée en fonction de vos envies. 
                    Que vous souhaitiez un rendu naturel en extérieur, une ambiance intime à domicile ou un {" "}
                    <span className={style.SpanBold}>
                        {"shooting plus artistique en studio,"}
                    </span> 
                    {" "} l’objectif est simple : mettre en lumière ce moment si particulier.
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"🏞️ En extérieur :"}
                    </span> 
                    {" "} pour une atmosphère naturelle et lumineuse. <br />
                    <span className={style.SpanBold}>
                        {"🏡 À domicile :"}
                    </span> 
                    {" "} pour des images cocooning et chaleureuses. <br />
                    <span className={style.SpanBold}>
                        {"📸 En studio :"}
                    </span> 
                    {" "} pour un rendu épuré et intemporel. <br />
                </p>
                <p className={style.Text}>
                    Seule ou avec votre partenaire, cette séance est avant tout un moment pour vous, où vous prenez le 
                    temps de vous arrêter et d’apprécier cette étape avant l’arrivée de bébé.
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBoldSpace}>
                        {"Quand faire votre séance ?"}
                    </span> 
                </p>
                <p className={style.Text}>
                    L’idéal est de réaliser la séance entre le 7ᵉ et le 8ᵉ mois, lorsque le ventre est bien arrondi tout 
                    en gardant une bonne mobilité.
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBoldSpace}>
                        {"💡 Pour qui ?"}
                    </span> 
                </p>
                <p className={style.Text}>
                    {" "} <br />
                    👉 Celles qui veulent un souvenir sincère et naturel de leur grossesse. <br />
                    👉 Celles qui souhaitent un moment pour elles, pour se reconnecter à leur corps. <br />
                    👉 Celles qui veulent un souvenir puissant de leur grossesse. <br />
                    👉 Pour se sentir belle et rayonner avant l’arrivée de bébé. <br />
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"📩 Envie de figer ces instants avant l’arrivée de bébé ?"}
                    </span> 
                    {" "}
                    <span className={style.SpanLink}>
                        <a href={LinkExt.emailAnne} target="_blank" rel="noopener noreferrer">
                            {"Contactez-moi pour réserver votre séance."}
                        </a>
                    </span>
                </p>
            </article>
            
        </section>
    );
}

export default LifeStyleRootComposantH;