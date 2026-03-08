/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import PortraitDuo_Root from "../../../components/public/portrait-duo/PortraitDuo.root";
import Footer_Layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitDuo_helmet_SEO } from "../../../seo/portrait-duo_SEO/HelmetPortraitDuo.helmet.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function PortraitDuo_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitDuo_Page ${style.Page}`}>
            <HelmetPortraitDuo_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <PortraitDuo_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default PortraitDuo_Page;
