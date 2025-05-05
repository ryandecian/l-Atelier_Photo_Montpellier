import style from "../../../StyleRootComponent.module.css";
import ListDataRouter from "../../../../router/router";
function MariageRootComponentF() {
    return (
        <article className={`PortraitSoloRootComponentF ${style.ContainerRoot}`}>
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
                    {"authenticité et passion."}
                </span>
            </p>          
            <p className={style.TextP4}>
                Si vous êtes prêts à faire de votre mariage un événement inoubliable, 
                <span className={style.SpanLink}>
                    <a href={ListDataRouter[2].path} target="_blank" rel="noopener noreferrer">
                        {"contactez-moi"}
                    </a>
                </span>
                {" "} pour commencer à discuter de ce que vous attendez de vos 
                <span className={style.SpanBold}>
                    {"souvenirs photographiques."}
                </span>
                {" "} Pour connaître mes prestations tarifaires, rendez-vous sur ma {" "}
                <span className={style.SpanLink}>
                    <a href={ListDataRouter[2].path} target="_blank" rel="noopener noreferrer">
                        {"page tarif."}
                    </a>
                </span>
            </p>          
        </article>
    );
}

export default MariageRootComponentF;
