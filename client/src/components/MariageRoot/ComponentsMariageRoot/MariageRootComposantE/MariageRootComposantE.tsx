import style from "./MariageRootComposantE.module.css";

function MariageRootComposantE() {
    return (
        <article className={style.MariageRootComposantE}>
            <h2 className={style.Title}>
                Une Expérience Sereine et Détendue
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
                Nous discuterons ensemble de vos envies concernant le style de photos que vous souhaitez. 
                    Voulez-vous un {" "}
                <span className={style.SpanBold}>
                    {"style simple et naturel,"}
                </span> 
                {" "} proche du documentaire ? Ou un {" "}
                <span className={style.SpanBold}>
                    {"style plus sophistiqué"}
                </span> 
                {" "} et travaillé, avec des photos plus posées et scénarisées ? Peut-être êtes-vous un couple 
                influencé par les {" "}
                <span className={style.SpanBold}>
                    {"tendances Instagram"}
                </span> 
                {" "} et préférez-vous des images plus modernes et stylisées ? Quelle que soit votre vision, 
                je serai à l’écoute de vos attentes pour réaliser des photos qui vous ressemblent.
            </p>          
        </article>
    );
}

export default MariageRootComposantE;