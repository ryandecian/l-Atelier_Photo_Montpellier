/* Import des modules CSS */
import css from "./tarifsCard.module.css";

/* Import des Types */
import { TarifCard_Type, FormuleKey_Type, PricingData_Type, PricingLine_Type } from "../../../types/prestations.type";

function TarifCardRoot({ tarifs, mailtoLink, id }: TarifCard_Type) {
    return (
        <section id={id} className={css.container}>
            {/* Convertit les prestations en paires [clé, data] et filtre les undefined */}
            {Object.entries(tarifs).map(([formulaKey, maybeData]) => {
                const key = formulaKey as FormuleKey_Type;
                const data = (maybeData ?? {}) as PricingData_Type;

                /* Titre formaté : essentiel -> Essentiel */
                const formulaName = key.charAt(0).toUpperCase() + key.slice(1);

                /* On ne rend l'article que si data contient au moins une ligne */
                const entries = Object.entries(data).filter(
                    (pair): pair is [string, PricingLine_Type] =>
                        Boolean(pair[1] && pair[1].value1 && pair[1].value2)
                );
                if (entries.length === 0) return null;

                /* Mailto si présent pour cette formule (optionnel) */
                const mailto = mailtoLink[key];

                return (
                    <article
                        key={key}
                        className={`${css.card} ${key === "premium" ? css.premium : ""}`}
                    >
                        <h3 className={css.header}>{formulaName}</h3>
                        <ul className={css.list}>
                            {entries.map(([lineKey, line]) => (
                                <li key={lineKey} className={css.item}>
                                    <span className={css.label}>{line.value1}</span>
                                    <span className={css.value}>{line.value2}</span>
                                </li>
                            ))}
                        </ul>

                        {mailto && (
                            <a href={`mailto:${mailto}`} className={css.button}>
                                Plus d'infos
                            </a>
                        )}
                    </article>
                );
            })}
        </section>
    );
}

export default TarifCardRoot;
