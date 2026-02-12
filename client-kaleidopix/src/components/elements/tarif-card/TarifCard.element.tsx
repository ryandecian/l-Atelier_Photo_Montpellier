/* Import des modules CSS */
import css from "./tarifCard.module.css";

function TarifCard_Element() {
        return (
            <section className={css.container}>
                <article className={css.card}>
                    <h2 className={css.header}>
                        Essentiel
                    </h2>
                    <ul className={css.list}>
                        <li className={css.item}>
                            Durée Séance: 45 min
                        </li>
                        <li className={css.item}>
                            Extérieur: Oui
                        </li>
                        <li className={css.item}>
                            Studio: Non
                        </li>
                    </ul>
                </article>
            </section>
        )
}

export { TarifCard_Element };
