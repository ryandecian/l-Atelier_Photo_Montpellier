/* Import des modules CSS */
import css from "./tarifCard.module.css";

function TarifCard_Element() {
        return (
            <section className={css.container}>
                <article className={css.card}>
                    <h2 className={css.TitleH2}>
                        Essentiel
                    </h2>

                    <p className={css.TextP4}>
                        <strong>À partir de 1 200 € HT</strong>
                    </p>

                    <ul className={css.list}>
                        <li className={css.item}>
                            Échange de cadrage et définition de l’objectif
                        </li>
                        <li className={css.item}>
                            Une demi-journée de tournage sur site à Montpellier ou alentours
                        </li>
                        <li className={css.item}>
                            Interview et images d’activité
                        </li>
                    </ul>
                </article>
            </section>
        )
}

export { TarifCard_Element };
