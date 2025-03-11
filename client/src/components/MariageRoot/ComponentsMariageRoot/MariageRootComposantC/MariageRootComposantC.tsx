import style from "./MariageRootComposantC.module.css";

function MariageRootComposantC() {
    return (
        <article className={style.MariageRootComposantC}>
            <h2 className={style.Title}>
                Le Repérage des Lieux : Une Préparation Essentielle
            </h2>

            <p className={style.Text}>
                Un autre aspect fondamental de mon approche est le {" "}
                <span className={style.SpanBold}>
                    {"repérage préalable des lieux."}
                </span> 
                {" "} Si nécessaire, je me rends sur les lieux de votre mariage avant le jour J afin de repérer les 
                meilleures zones pour les photos, observer la lumière naturelle et évaluer les angles les plus favorables. 
                Ce repérage me permet également de mieux comprendre l’agencement des lieux et de {" "}
                <span className={style.SpanBold}>
                    {"prévoir les meilleurs moments"}
                </span> 
                {" "} pour capturer des images naturelles, tout en respectant vos envies. Vous pourrez ainsi 
                <span className={style.SpanBold}>
                    {"vous concentrer sur l’essentiel : vivre pleinement votre journée,"}
                </span> 
                {" "} pendant que je m’assure de capturer chaque instant clé dans le respect de l’ambiance.
            </p>          
        </article>
    );
}

export default MariageRootComposantC;