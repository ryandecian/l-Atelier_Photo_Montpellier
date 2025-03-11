import style from "./MentionsLegalesSectionF.module.css";

function MentionsLegalesSectionF() {
    return (
        <article className={style.MentionsLegalesSectionF}>
            <h2 className={style.Title}>
                6 – Droit applicable et attribution de juridiction
            </h2>

            {/* Text 1 */}
            <p className={style.Text}>
            Tout litige en relation avec l’utilisation du site {" "}
            <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
            {" "} est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution 
            exclusive de juridiction aux tribunaux compétents de {" "}
            <span className={style.SpanBold}>
                    {"MONTPELLIER."}
                </span>
            </p>
        </article>
    );
}

export default MentionsLegalesSectionF;
