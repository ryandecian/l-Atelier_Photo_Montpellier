import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PrestationRoot.module.css";
import ListDataRouter from "../../router/router";

type Prestation = {
  path: string;       // Ex: "/tarifs"
  id: string;         // Ex: "tarifs-portrait-solo"
  title: string;      // Ex: "Portrait Solo"
  description: string;
};


function PrestationRoot() {
    const prestations: Prestation[] = [
      {
        path: ListDataRouter[14].path,
        id: "tarifs-portrait-solo",
        title: "Portrait Solo",
        description: "Un portrait individuel élégant.",
      },
      {
        path: ListDataRouter[14].path,
        id: "tarifs-portrait-duo",
        title: "Portrait Duo",
        description: "Un moment capturé à deux.",
      },
      {
        path: ListDataRouter[14].path,
        id: "tarifs-portrait-famille",
        title: "Portrait Famille",
        description: "Souvenirs de famille intemporels.",
      },
      {
        path: ListDataRouter[14].path,
        id: "tarifs-portrait-grossesse",
        title: "Portrait Grossesse",
        description: "Capture des neuf mois magiques.",
      },
      // Ajoute d'autres prestations ici si besoin
    ];
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
            key={prestation.id}
            to={`${prestation.path}#${prestation.id}`}
            className={css.card}
          >
            <h3>{prestation.title}</h3>
            <p>{prestation.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PrestationRoot;
