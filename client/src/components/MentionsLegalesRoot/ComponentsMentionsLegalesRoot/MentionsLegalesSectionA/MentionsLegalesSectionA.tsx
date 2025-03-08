import style from "./MentionsLegalesSectionA.module.css";
import { LinkExt } from "../../../../router/router";

function MentionsLegalesSectionA() {
    return (
        <section className={style.MentionsLegalesSectionA}>
            <h2 className={style.Title}>
                1 – Édition du site
            </h2>

            {/* Text 1 */}
            <p className={style.Text}>
                En vertu de {" "} 
                <span className={style.SpanLink}>
                    <a href={LinkExt.loi1} target="_blank" rel="noopener noreferrer">
                        {"l’article 6 de la loi n° 2004-575 du 21 juin 2004"}
                    </a>
                </span>
                {" "} pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet {" "} 
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
                {" "} l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
            </p>

            {/* Text 2 */}
            <p className={style.Text}>
                <span className={style.SpanBold}>
                    {"Propriétaire du site :"}
                </span>
                {" "} L’ATELIER PHOTO MONTPELLIER – Contact : {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.email} target="_blank" rel="noopener noreferrer">
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
            
            {/* Text 4 */}
            <p className={style.Text}>
                <span className={style.SpanBold}>
                    {"Directrice de la publication :"}
                </span>
                 {" "} ANNE SAUNIER – Contact : {" "}
                 <span className={style.SpanLink}>
                    <a href={LinkExt.phoneAnne} target="_blank" rel="noopener noreferrer">
                        {"06 52 67 73 33."}
                    </a>
                </span>
            </p>

            {/* Text 5 */}
            <p className={style.Text}>
                <span className={style.SpanBold}>
                    {"Hébergeur :"}
                </span>
                 {" "} O2Switch – 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand – Téléphone : {" "}
                 <span className={style.SpanLink}>
                    <a href={LinkExt.phoneHebergeur} target="_blank" rel="noopener noreferrer">
                        {"04 44 44 60 40."}
                    </a>
                </span>
            </p>

            {/* Text 6 */}
            <p className={style.Text}>
                <span className={style.SpanBold}>
                    {""}
                </span>
                 {" "}
            </p>

            {/* Text 7 */}
            <p className={style.Text}>
                <span className={style.SpanBold}>
                    {""}
                </span>
                 {" "}
            </p>
        </section>
    );
}

export default MentionsLegalesSectionA;