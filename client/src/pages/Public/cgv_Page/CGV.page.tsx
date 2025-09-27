/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import CGVRoot from "../../../components/Public/CGVRoot/CGVRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetCGV_helmet_SEO } from "../../../seo/cgv_SEO/HelmetCGV.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function CGV_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`CGV_Page ${style.Page}`}>
            <HelmetCGV_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <CGVRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default CGV_Page;
