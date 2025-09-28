/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import QuiSuisJeRoot from "../../../components/Public/QuiSuisJeRoot/QuiSuisJeRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetQuiSuisJe_helmet_SEO } from "../../../seo/qui-suis-je_SEO/HelmetQuiSuisJe.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function QuiSuisJe_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`QuiSuisJe_Page ${style.Page}`}>
            <HelmetQuiSuisJe_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <QuiSuisJeRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default QuiSuisJe_Page;
