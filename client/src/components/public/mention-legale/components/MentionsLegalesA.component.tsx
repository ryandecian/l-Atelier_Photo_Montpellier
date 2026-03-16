/* Import des modules CSS */
import style from "../../../StyleRootComponent.module.css";

/* Import des composants Router */
import externalLinks from "../../../../constants/externalLinks";

function MentionsLegalesA_Component() {
    return (
        <article className={`MentionsLegalesA_Component`}>
            <h2 className={style.TitleH2px2}>
                1 – Édition du site
            </h2>

            {/* Text 1 */}
            <p className={style.TextP4}>
                En vertu de {" "} 
                <span className={style.SpanLink}>
                    <a href={externalLinks.loi1} target="_blank" rel="noopener noreferrer">
                        {"l’article 6 de la loi n° 2004-575 du 21 juin 2004"}
                    </a>
                </span>
                {" "} pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet {" "} 
                <strong>https://atelier-photo-montpellier.fr</strong>
                {" "} l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>

            {/* Text 2 */}
            <p className={style.TextP4}>
                <strong>Propriétaire du site :</strong>
                {" "} L’ATELIER PHOTO MONTPELLIER – Contact : {" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"photo34000@gmail.com"}
                    </a>
                </span>
                {" "} ou {" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.phoneAnne} target="_blank" rel="noopener noreferrer">
                        {"06 48 55 99 22"}
                    </a>
                </span>
                {" "} – Adresse : 13 Allée des Platanes 34790 Grabels.
            </p>

            {/* Text 3 */}
            <p className={style.TextP4}>
                <strong>Identification de l’entreprise :</strong>
                 {" "} L’ATELIER PHOTO MONTPELLIER  au capital social de 2000 € – SIREN : 802558825 – RCS ou RM : 
                 Montpellier – Adresse postale : 13 Allée des Platanes 34790 Grabels.
            </p>
            
            {/* Text 4 */}
            <p className={style.TextP4}>
                <strong>Directrice de la publication :</strong>
                 {" "} ANNE SAUNIER – Contact : {" "}
                 <span className={style.SpanLink}>
                    <a href={externalLinks.phoneAnne} target="_blank" rel="noopener noreferrer">
                        {"06 48 55 99 22."}
                    </a>
                </span>
            </p>

            {/* Text 5 */}
            <p className={style.TextP4}>
                <strong>Hébergeur :</strong>
                 {" "} O2Switch – 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand – Téléphone : {" "}
                 <span className={style.SpanLink}>
                    <a href={externalLinks.phoneHebergeur} target="_blank" rel="noopener noreferrer">
                        {"04 44 44 60 40."}
                    </a>
                </span>
            </p>

            {/* Text 6 */}
            <p className={style.TextP4}>
                <strong>Délégué à la protection des données :</strong>
                 {" "} ANNE SAUNIER – {" "}
                 <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"photo34000@gmail.com"}
                    </a>
                </span>
            </p>

            {/* Text 7 */}
            <p className={style.TextP4}>
                <strong> Autres contributeurs :</strong>
            </p>
        </article>
    );
}

export { MentionsLegalesA_Component };
