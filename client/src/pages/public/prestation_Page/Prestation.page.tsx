/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import Prestation_Root from "../../../components/Public/prestation/Prestation.root";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPrestation_helmet_SEO } from "../../../seo/prestation_SEO/HelmetPrestation.helmet.seo";

function Prestation_Page() {
     return (
        <section className={`Prestation_Page ${style.Page}`}>
            <HelmetPrestation_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Prestation_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Prestation_Page;
