/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";
import css from "./prestation.module.css";

/* Import des Components de Data */
import { cardPrestation_Data } from "./cardPrestation.data";

/* Import des composants React */
import { useState } from "react";
import { Link } from "react-router-dom";

/* Import des Types */
import { CardPrestation_Type } from "../../../types/cardPrestation.type";

function Prestation_Root() {
    const prestations: CardPrestation_Type[] = cardPrestation_Data();

    const [search, setSearch] = useState("");

    const filtered = prestations.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className={css.container}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Tarifs à la carte pour vos séances photo professionnelles à Montpellier`}
                </h1>
            </header>

            <h2 className={css.TitleLNH3}>
                {`Faites de chaque séance photo une expérience unique avec nos prestations personnalisées`}
            </h2>

            <input
                type="text"
                placeholder="Rechercher une prestation..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={css.searchBar}
            />

            <div className={css.cardsContainer}>
                {filtered.map((prestation) => (
                    <Link
                        key={prestation.reactKey}
                        to={`${prestation.path}#${prestation.id}`}
                        className={css.card}
                        style={{ backgroundImage: `url(${prestation.image})` }}
                    >
                        <div className={css.overlay}>
                            <h3 className={css.cardTitle}>{prestation.title}</h3>
                            <p className={css.cardDescription}>{prestation.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Prestation_Root;
