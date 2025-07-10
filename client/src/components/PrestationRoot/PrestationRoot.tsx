import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PrestationRoot.module.css";
import DataCardPrestation from "./DataCardPrestationRoot";
import CardPrestationType from "../../types/CardPrestation.type";
import style from "../StyleRootComponent.module.css";

function PrestationRoot() {
  const prestations: CardPrestationType[] = DataCardPrestation();

  const [search, setSearch] = useState("");

  const filtered = prestations.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={css.container}>
      <header className={style.ContainerTitle}>
        <h1 className={style.TitleH1}>
          {`Tarifs à la carte`}
        </h1>
      </header>
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

export default PrestationRoot;
