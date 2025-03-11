import style from "./MentionsLegalesSectionE.module.css";
import { LinkExt } from "../../../../router/router";

function MentionsLegalesSectionE() {
    return (
        <article className={style.MentionsLegalesSectionE}>
            <h2 className={style.Title}>
                5 – Liens hypertextes et cookies
            </h2>

            {/* Text 1 */}
            <p className={style.Text}>
                Le site {" "}
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
                {" "} contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces 
                liens externes ou des liens créés par d’autres sites vers {" "}
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
                {" "} La navigation sur le site {" "}
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
                {" "} est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.
            </p>

            {/* Text 2 */}
            <p className={style.Text}>
                Un « cookie » est un fichier de petite taille qui enregistre des informations relatives à la navigation 
                d’un utilisateur sur un site. Les données ainsi obtenues permettent d’obtenir des mesures de fréquentation, 
                par exemple.
            </p>

            {/* Text 3 */}
            <p className={style.Text}>
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
            <p className={style.Text}>
                Ces cookies étant indispensables, leur utilisation est implicite lors de votre navigation sur le site. 
                Si vous ne souhaitez pas qu’ils soient utilisés, nous vous invitons à quitter le site.
            </p>

            {/* Text 5 */}
            <p className={style.Text}>
                Les cookies sont conservés pour une durée maximale de 6 mois.
            </p>

            {/* Text 6 */}
            <p className={style.Text}>
                Pour plus d’informations sur la façon dont nous faisons usage des cookies, nous vous invitons à nous 
                contacter : {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"photo34000@gmail.com"}
                    </a>
                </span>
                {"."}
            </p>
        </article>
    );
}

export default MentionsLegalesSectionE;
