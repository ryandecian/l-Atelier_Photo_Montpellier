/* Import des modules CSS */
import style from "../../../StyleRootComponent.module.css";

/* Import des composants Router */
import externalLinks from "../../../../constants/externalLinks";

function MentionsLegalesD_Component() {
    return (
        <article className={`MentionsLegalesD_Component`}>
            <h2 className={style.TitleH2px2}>
                4 – CNIL et gestion des données personnelles
            </h2>

            {/* Text 1 */}
            <p className={style.TextP4}>
                Conformément aux dispositions de la {" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.loi3} target="_blank" rel="noopener noreferrer">
                        {"loi 78-17 du 6 janvier 1978 modifiée"}
                    </a>
                </span>
                , l’utilisateur du site {" "}
                <strong>https://atelier-photo-montpellier.fr</strong>
                {" "} dispose d’un droit d’accès, de modification et de suppression des informations collectées. 
                Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : {" "}
                <strong>ANNE SAUNIER</strong>
                {" "} – {" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"photo34000@gmail.com"}
                    </a>
                </span>
                {"."}
            </p>

            {/* Text 2 */}
            <p className={style.TextP4}>
                Pour plus d’informations sur la façon dont nous traitons vos données (type de données, finalité, 
                destinataire…), lisez notre {" "}
                <strong>https://atelier-photo-montpellier.fr</strong>
            </p>
        </article>
    );
}

export { MentionsLegalesD_Component };
