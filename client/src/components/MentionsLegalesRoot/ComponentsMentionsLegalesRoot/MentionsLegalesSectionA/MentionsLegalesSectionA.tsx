import style from "./MentionsLegalesSectionA.module.css";
import { LinkExt } from "../../../../router/router";

function MentionsLegalesSectionA() {
    return (
        <section className={style.MentionsLegalesSectionA}>
            <h2 className={style.Title}>
                1 – Édition du site
            </h2>

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
        </section>
    );
}

export default MentionsLegalesSectionA;