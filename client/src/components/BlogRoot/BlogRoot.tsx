import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./BlogRoot.module.css";
import DataCardBlog from "./DataCardBlogRoot";
import CardBlogType from "../../types/CardBlog.type";

function BlogRoot() {
  const dataBlog: CardBlogType[] = DataCardBlog();

  const [search, setSearch] = useState("");

  const filtered = dataBlog.filter((p) =>
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
        {filtered.map((articleBlog) => (
          <Link
            key={articleBlog.reactKey}
            to={`${articleBlog.path}#${articleBlog.id}`}
            className={css.card}
            style={{ backgroundImage: `url(${articleBlog.image})` }}
          >
            <div className={css.overlay}>
                <h3 className={css.cardTitle}>{articleBlog.title}</h3>
                <div className={css.containerDescription}>
                    <p className={css.cardDescription}>{articleBlog.description}</p>
                    <p className={css.cardDate}>{articleBlog.date}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogRoot;
