/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import PortraitCorporate_Root from "../../../components/public/portrait-corporate/PortraitCorporate.root";
import Footer_root_layout from "../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des composants SEO */
import PortraitCorporate_root_SEO from "../../../seo/seo-pages/corporate_SEO/PortraitCorporate.root.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function PortraitCorporate_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`PortraitCorporate_Page ${style.Page}`}>
            <PortraitCorporate_root_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <PortraitCorporate_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    )
}

export default PortraitCorporate_Page;
