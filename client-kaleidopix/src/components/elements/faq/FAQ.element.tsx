/* Import des modules CSS */
import css from "./faq.module.css";

/* Import des Types */
import type { FAQ_data_Type } from "../../../types/data/faq.data.type";

type FAQProps = {
    items: FAQ_data_Type;
};

function FAQ_Element({ items }: FAQProps) {
    return (
        <section className={`FAQ_Element ${css.faqRoot}`}>
            {items.map((item, index) => (
                <details key={index} className={css.faqItem}>
                    <summary className={css.faqQuestion}>
                        {item.question}
                        <span className={css.icon} />
                    </summary>

                    <p className={css.faqReponse}>
                        {item.reponse}
                    </p>
                </details>
            ))}
        </section>
    );
}

export { FAQ_Element };
