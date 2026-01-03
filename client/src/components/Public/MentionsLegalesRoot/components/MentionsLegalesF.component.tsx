import style from "../../../StyleRootComponent.module.css";

function MentionsLegalesF_Component() {
    return (
        <article className={`MentionsLegalesF_Component`}>
            <h2 className={style.TitleH2px2}>
                6 – Droit applicable et attribution de juridiction
            </h2>

            {/* Text 1 */}
            <p className={style.TextP4}>
            Tout litige en relation avec l’utilisation du site {" "}
            <strong>https://atelier-photo-montpellier.fr</strong>
            {" "} est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution 
            exclusive de juridiction aux tribunaux compétents de {" "}
            <strong>MONTPELLIER.</strong>
            </p>
        </article>
    );
}

export { MentionsLegalesF_Component };
