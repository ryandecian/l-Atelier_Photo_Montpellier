/* Import des modules CSS */
import css from "./faq.module.css";

/* Import des Types */
import type { FAQ_data_Type } from "./faq.data.type";

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

                    {item.reponseBonus1 && (
                        <p className={css.faqReponse}>
                            {item.reponseBonus1}
                        </p>
                    )}

                    {item.reponseBonus2 && (
                        <p className={css.faqReponse}>
                            {item.reponseBonus2}
                        </p>
                    )}

                    {item.reponseBonus3 && (
                        <p className={css.faqReponse}>
                            {item.reponseBonus3}
                        </p>
                    )}
                </details>
            ))}
        </section>
    );
}

export { FAQ_Element };
