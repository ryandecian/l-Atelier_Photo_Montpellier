import style from "../../../StyleRootComponent.module.css";
import externalLinks from "../../../../constants/externalLinks";

function MentionsLegalesComponentE() {
    return (
        <article className={`MentionsLegalesComponentE ${style.MentionsLegalesComponentE}`}>
            <h2 className={style.TitleH2px2}>
                5 – Liens hypertextes et cookies
            </h2>

            {/* Text 1 */}
            <p className={style.TextP4}>
                Le site {" "}
                <span className={style.SpanBold}>
                    {"https://atelier-photo-montpellier.fr"}
                </span>
                {" "} contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces 
                liens externes ou des liens créés par d’autres sites vers {" "}
                <span className={style.SpanBold}>
                    {"https://atelier-photo-montpellier.fr"}
                </span>
                {" "} La navigation sur le site {" "}
                <span className={style.SpanBold}>
                    {"https://atelier-photo-montpellier.fr"}
                </span>
                {" "} est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.
            </p>

            {/* Text 2 */}
            <p className={style.TextP4}>
                Un « cookie » est un fichier de petite taille qui enregistre des informations relatives à la navigation 
                d’un utilisateur sur un site. Les données ainsi obtenues permettent d’obtenir des mesures de fréquentation, 
                par exemple.
            </p>

            {/* Text 3 */}
            <p className={style.TextP4}>
                Ce site utilise uniquement des {" "}
                <span className={style.SpanBold}>
                    {"cookies strictement nécessaires"}
                </span>
                {" "} à son bon fonctionnement, notamment pour la gestion des sessions utilisateur et des paiements en ligne. {" "}
                <span className={style.SpanBold}>
                    {"Aucun cookie publicitaire ou de suivi n’est installé."}
                </span>
            </p>

            {/* Text 4 */}
            <p className={style.TextP4}>
                Ces cookies étant indispensables, leur utilisation est implicite lors de votre navigation sur le site. 
                Si vous ne souhaitez pas qu’ils soient utilisés, nous vous invitons à quitter le site.
            </p>

            {/* Text 5 */}
            <p className={style.TextP4}>
                Les cookies sont conservés pour une durée maximale de 6 mois.
            </p>

            {/* Text 6 */}
            <p className={style.TextP4}>
                Pour plus d’informations sur la façon dont nous faisons usage des cookies, nous vous invitons à nous 
                contacter : {" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"photo34000@gmail.com"}
                    </a>
                </span>
                {"."}
            </p>
        </article>
    );
}

export default MentionsLegalesComponentE;
