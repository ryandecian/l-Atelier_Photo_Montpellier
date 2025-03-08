import style from "./MentionsLegalesSectionE.module.css";
import { LinkExt } from "../../../../router/router";

function MentionsLegalesSectionE() {
    return (
        <section className={style.MentionsLegalesSectionE}>
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
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable 
                de L’ATELIER PHOTO MONTPELLIER.
            </p>

            {/* Text 3 */}
            <p className={style.Text}>
                Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée 
                comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.loi2} target="_blank" rel="noopener noreferrer">
                        {"L.335-2 et suivants du Code de Propriété Intellectuelle"}
                    </a>
                </span>
                {"."}
            </p>
        </section>
    );
}

export default MentionsLegalesSectionE;
