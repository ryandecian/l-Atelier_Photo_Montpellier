// src/components/PrestationRoot/PrestationRoot.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PrestationRoot.module.css";
import ListDataRouter from "../../router/router";

type Prestation = {
  path: string;
  id: string;
  title: string;
  description: string;
  image: string;
};

function PrestationRoot() {
  const prestations: Prestation[] = [
    {
      path: ListDataRouter[14].path,
      id: "tarifs-portrait-solo",
      title: "Portrait Solo",
      description: "Un portrait individuel élégant.",
      image: "./images/image-portrait-solo/lapm-photographe-professionnel-portrait-solo-en-jardin-lifestyle-l-atelier-photo-montpellier.jpg",
    },
    {
      path: ListDataRouter[14].path,
      id: "tarifs-portrait-duo",
      title: "Portrait Duo",
      description: "Un moment capturé à deux.",
      image: "./images/image-portrait-solo/lapm-photographe-professionnel-portrait-solo-en-jardin-lifestyle-l-atelier-photo-montpellier.jpg",
    },
    {
      path: ListDataRouter[14].path,
      id: "tarifs-portrait-famille",
      title: "Portrait Famille",
      description: "Souvenirs de famille intemporels.",
      image: "./images/image-portrait-solo/lapm-photographe-professionnel-portrait-solo-en-jardin-lifestyle-l-atelier-photo-montpellier.jpg",
    },
    {
      path: ListDataRouter[14].path,
      id: "tarifs-portrait-grossesse",
      title: "Portrait Grossesse",
      description: "Capture des neuf mois magiques.",
      image: "./images/image-portrait-solo/lapm-photographe-professionnel-portrait-solo-en-jardin-lifestyle-l-atelier-photo-montpellier.jpg",
    },
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
