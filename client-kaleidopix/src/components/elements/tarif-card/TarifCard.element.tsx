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

                        <ul className={css.list}>
                            {data.description.map((desc, descIndex) => (
                                <li key={descIndex} className={css.item}>
                                    {desc.item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        )
}

export { TarifCard_Element };
