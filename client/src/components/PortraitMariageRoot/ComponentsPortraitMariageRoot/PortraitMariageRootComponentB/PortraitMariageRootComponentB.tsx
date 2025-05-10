import style from "../../../StyleRootComponent.module.css";

function PortraitMariageRootComponentB() {
    return (
        <article className={`PortraitMariageRootComponentB ${style.ContainerRoot}`}>
            <h2 className={style.TitleH2}>
                Une Implication Préalable : Comprendre Votre Vision
            </h2>

            <p className={style.TextP4}>
                Un mariage est un moment qui vous est cher, et c’est pourquoi je m’investis pleinement avant le 
                grand jour. Chaque couple a ses propres attentes, ses propres envies, et ses propres goûts. {" "}
                <span className={style.SpanBold}>
                    {"Une discussion approfondie."}
                </span> 
                {" "} en amont de la journée est donc essentielle. Je prends le temps d’apprendre à vous connaître, 
                de comprendre vos préférences et ce que vous attendez des photos de votre mariage.
            </p>
            <p className={style.TextP4}>
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

export default PortraitMariageRootComponentB;
