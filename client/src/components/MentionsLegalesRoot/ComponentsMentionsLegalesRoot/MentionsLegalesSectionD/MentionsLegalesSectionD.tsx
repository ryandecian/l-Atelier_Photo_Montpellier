import style from "./MentionsLegalesSectionD.module.css";
import { LinkExt } from "../../../../router/router";

function MentionsLegalesSectionD() {
    return (
        <section className={style.MentionsLegalesSectionD}>
            <h2 className={style.Title}>
                4 – CNIL et gestion des données personnelles
            </h2>

            {/* Text 1 */}
            <p className={style.Text}>
                Conformément aux dispositions de la {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.loi3} target="_blank" rel="noopener noreferrer">
                        {"loi 78-17 du 6 janvier 1978 modifiée"}
                    </a>
                </span>
                , l’utilisateur du site {" "}
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
                {" "} dispose d’un droit d’accès, de modification et de suppression des informations collectées. 
                Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : {" "}
                <span className={style.SpanBold}>
                    {"ANNE SAUNIER"}
                </span>
                {" "} – {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"photo34000@gmail.com"}
                    </a>
                </span>
                {"."}
            </p>

            {/* Text 2 */}
            <p className={style.Text}>
                Pour plus d’informations sur la façon dont nous traitons vos données (type de données, finalité, 
                destinataire…), lisez notre {" "}
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
            </p>
        </section>
    );
}

export default MentionsLegalesSectionD;
