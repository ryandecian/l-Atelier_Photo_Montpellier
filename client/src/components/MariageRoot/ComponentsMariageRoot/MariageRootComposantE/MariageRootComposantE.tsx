import style from "./MariageRootComposantE.module.css";

function MariageRootComposantE() {
    return (
        <article className={style.MariageRootComposantE}>
            <h2 className={style.Title}>
                Une Expérience Sereine et Détendue
            </h2>

            <p className={style.Text}>
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
            <p className={style.Text}>
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
        </article>
    );
}

export default MariageRootComposantE;