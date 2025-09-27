/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import PrestationRoot from "../../../components/Public/PrestationRoot/PrestationRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPrestation_helmet_SEO } from "../../../seo/PrestationSEO/HelmetPrestation.helmet.seo";

function Prestation_Page() {
     return (
        <section className={`Prestation_Page ${style.Page}`}>
            <HelmetPrestation_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PrestationRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Prestation_Page;
