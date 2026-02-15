/* Import des modules CSS */
import css from "./tarifCard.module.css";

/* Import des Types */
import type { TarifCard_props_Type } from "./tarifCard.element.type";

function TarifCard_Element({ items }: TarifCard_props_Type) {
        return (
            <section className={css.container}>
                {items.map((data, index) => (
                    <article key={index} className={css.card}>
                        <h2 className={css.TitleH2}>
                            {data.title}
                        </h2>

                        <p className={css.TextP4}>
                            <strong>{data.price}</strong>
                        </p>

                        <p className={css.TextP4}>
                            <strong>Objectif</strong> : {data.description}
                        </p>

                        <p className={css.TextLiP4}>
                            <strong>Inclus :</strong>
                        </p>

                        <ul className={css.list}>
                            {data.avantage.map((avantage, descIndex) => (
                                <li key={descIndex} className={css.item}>
                                    {avantage.item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        )
}

export { TarifCard_Element };
