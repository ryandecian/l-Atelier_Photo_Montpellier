import style from "./MariageRootComposantD.module.css";

function MariageRootComposantD() {
    return (
        <article className={style.MariageRootComposantD}>
            <h2 className={style.Title}>
                Respect des Attentes : Un Mariage Qui Vous Ressemble
            </h2>

            <p className={style.Text}>
                Votre mariage est un {" "}
                <span className={style.SpanBold}>
                    {"réflexe de votre personnalité"}
                </span>
                {" "} et de vos goûts. Vous souhaitez des photos qui traduisent l’esprit de votre union, mais aussi de 
                vos valeurs et de vos envies esthétiques. C’est pourquoi je m’engage à respecter votre {" "}
                <span className={style.SpanBold}>
                    {"vision de l’image,"}
                </span>
                {" "} qu’elle soit simple et épurée, 
                <span className={style.SpanBold}>
                    {"sophistiquée et raffinée,"}
                </span>
                {" "} ou {" "}
                <span className={style.SpanBold}>
                    {"très moderne et dynamique,"}
                </span>
                {" "} inspirée des dernières {" "}
                <span className={style.SpanBold}>
                    {"tendances Instagram."}
                </span>
            </p>
            <p className={style.Text}>
                Certains couples préfèrent des clichés {" "}
                <span className={style.SpanBold}>
                    {"très naturels"}
                </span>
                {" "} avec un minimum d’intervention, tandis que d’autres souhaitent des photos plus 
                {" "} avec des mises en scène plus soignées. Je m’adapte à votre demande et vous accompagne dans le 
                choix du style qui vous correspond le mieux, tout en veillant à ce que chaque photo conserve son 
                authenticité. Mon objectif est d’être votre {" "}
                <span className={style.SpanBold}>
                    {"partenaire photographique,"}
                </span>
                {" "} celui qui capte chaque sourire, chaque regard, chaque moment avec fidélité.
            </p>          
        </article>
    );
}

export default MariageRootComposantD;