import style from "../../../StyleRootComponent.module.css";
import { LinkExt } from "../../../../router/router";

function MentionsLegalesComponentB() {
    return (
        <article className={`MentionsLegalesComponentB ${style.MentionsLegalesComponentB}`}>
            <h2 className={style.TitleH2px2}>
                2 – Propriété intellectuelle et contrefaçons
            </h2>

            {/* Text 1 */}
            <p className={style.TextP4}>
                L’ATELIER PHOTO MONTPELLIER est propriétaire des droits de propriété intellectuelle et détient les 
                droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, 
                graphismes, logos, vidéos, architecture, icônes et sons.
            </p>

            {/* Text 2 */}
            <p className={style.TextP4}>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable 
                de L’ATELIER PHOTO MONTPELLIER.
            </p>

            {/* Text 3 */}
            <p className={style.TextP4}>
                Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée 
                comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles {" "}
                <span className={style.SpanLink}>
                    <a href={LinkExt.loi2} target="_blank" rel="noopener noreferrer">
                        {"L.335-2 et suivants du Code de Propriété Intellectuelle"}
                    </a>
                </span>
                {"."}
            </p>
        </article>
    );
}

export default MentionsLegalesComponentB;
