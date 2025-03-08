import style from "./MentionsLegalesSectionB.module.css";
import { LinkExt } from "../../../../router/router";

function MentionsLegalesSectionB() {
    return (
        <section className={style.MentionsLegalesSectionB}>
            <h2 className={style.Title}>
                2 – Propriété intellectuelle et contrefaçons
            </h2>

            {/* Text 1 */}
            <p className={style.Text}>
                L’ATELIER PHOTO MONTPELLIER est propriétaire des droits de propriété intellectuelle et détient les 
                droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, 
                graphismes, logos, vidéos, architecture, icônes et sons.
            </p>

            {/* Text 2 */}
            <p className={style.Text}>
                <span className={style.SpanBold}>
                    {"Propriétaire du site :"}
                </span>
                {" "} L’ATELIER PHOTO MONTPELLIER – Contact : {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"photo34000@gmail.com"}
                    </a>
                </span>
                {" "} ou {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.phoneAnne} target="_blank" rel="noopener noreferrer">
                        {"06 52 67 73 33"}
                    </a>
                </span>
                {" "} – Adresse : 13 Allée des Platanes 34790 Grabels.
            </p>

            {/* Text 3 */}
            <p className={style.Text}>
                <span className={style.SpanBold}>
                    {"Identification de l’entreprise :"}
                </span>
                 {" "} L’ATELIER PHOTO MONTPELLIER  au capital social de 2000 € – SIREN : 802558825 – RCS ou RM : 
                 Montpellier – Adresse postale : 13 Allée des Platanes 34790 Grabels.
            </p>
        </section>
    );
}

export default MentionsLegalesSectionB;
