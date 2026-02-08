/* Import des modules CSS */
import css from "./faq.module.css";

type FAQItem = {
    question: string;
    reponse: React.ReactNode;
};

type FAQProps = {
    items: FAQItem[];
};

function FAQ_Element({ items }: FAQProps) {
    return (
        <section className={css.faqRoot}>
            {items.map((item, index) => (
                <details key={index} className={css.faqItem}>
                    <summary className={css.faqQuestion}>
                        {item.question}
                        <span className={css.icon} />
                    </summary>
                    <div className={css.faqAnswer}>
                        {item.reponse}
                    </div>
                </details>
            ))}
        </section>
    );
}

export { FAQ_Element };
