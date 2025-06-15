import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./BlogRoot.module.css";
import DataCardPrestation from "./DataCardBlogRoot";
import CardPrestationType from "../../types/CardPrestation.type";

function BlogRoot() {
  const prestations: CardPrestationType[] = DataCardPrestation();

  const [search, setSearch] = useState("");

  const filtered = prestations.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className={css.container}>
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
                <div className={css.containerDescription}>
                    <p className={css.cardDescription}>{prestation.description}</p>
                    <p className={css.cardDate}>11/04/2025</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogRoot;
