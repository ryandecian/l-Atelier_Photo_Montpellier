// src/components/PrestationRoot/PrestationRoot.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PrestationRoot.module.css";

type Prestation = {
  id: string;
  title: string;
  description: string;
};

const prestations: Prestation[] = [
  { id: "portraitSolo", title: "Portrait Solo", description: "Un portrait individuel élégant." },
  { id: "portraitDuo", title: "Portrait Duo", description: "Un moment capturé à deux." },
  { id: "portraitFamille", title: "Portrait Famille", description: "Souvenirs de famille intemporels." },
  { id: "portraitGrossesse", title: "Portrait Grossesse", description: "Capture des neuf mois magiques." },
  // Ajoute d'autres prestations ici...
];

function PrestationRoot() {
  const [search, setSearch] = useState("");

  const filtered = prestations.filter(p =>
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
            to={`/tarifs#${prestation.id}`}
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
