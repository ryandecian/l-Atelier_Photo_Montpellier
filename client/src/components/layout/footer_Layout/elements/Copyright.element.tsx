/* Import des modules CSS */
import css from "./copyright.module.css"


function Copyright_Element() {
    const dateNow = new Date().getFullYear();

    return (
        <article className={css.ContainerCopyright}>
                <p className={css.Copyright}> 
                    {dateNow === 2024 ? `©2024 ` : `©2024 - ${dateNow} `}
                     - l'Atelier Photo Montpellier. Tous droits réservés.
                </p>
            </article>
    )
}

export { Copyright_Element };
