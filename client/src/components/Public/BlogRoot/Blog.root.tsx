/* Import des modules CSS */
import style from "../../StyleRootComponent.module.css";
import css from "./BlogRoot.module.css";

/* Import des Components */
import dataCardBlog_img_data from "./dataCardBlog.img.data";

/* Import des composants React */
import { useState } from "react";
import { Link } from "react-router-dom";

/* Import des Types */
import CardBlogType from "../../../types/cardBlog.type";

/* Import des Utils */
import { convertDateFrToISO_Date } from "../../../utils/convertDateFrToISO.utils";

function Blog_Root() {
    /* Permet de mettre en mémoire le résultat de la fonction. Donc les datas des card. */
    /* Evite de réexécuter systématiquement la fonction */
    const dataBlog: CardBlogType[] = dataCardBlog_img_data();

    const [search, setSearch] = useState("");

    // Tri par date du plus récent au plus ancien
    const sortedData = dataBlog.slice().sort((a, b) => {
        return convertDateFrToISO_Date(b.date).getTime() - convertDateFrToISO_Date(a.date).getTime();
    });

    // Filtrage après tri
    const filtered = sortedData.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className={`BlogRoot ${css.container}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Blog photo professionnel : conseils, astuces et inspiration à Montpellier`}
                </h1>
            </header>

            <h2 className={style.TitleLNH3}>
                {`Retrouvez nos conseils photo et reportages inspirants à Montpellier`}
            </h2>

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

export default Blog_Root;
