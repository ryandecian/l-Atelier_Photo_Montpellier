/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import PortfolioRoot from "../../../components/Public/PortfolioRoot/PortfolioRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortfolio_helmet_SEO } from "../../../seo/PortfolioSEO/HelmetPortfolio.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function Portfolio_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`Portfolio_Page ${style.Page}`}>
            <HelmetPortfolio_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortfolioRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Portfolio_Page;
