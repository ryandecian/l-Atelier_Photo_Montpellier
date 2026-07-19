/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import NavHome_root_Layout from "../../../components/layout/navHome_Layout/NavHome.root.layout";
import { Home_Root_Test } from "../../../components/public/home-test/HomeTest.root";
import Footer_root_layout from "../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des composants SEO */
import { HelmetHome_helmet_SEO } from "../../../seoS/home_SEO/HelmetHome.helmet.seo";

function Home_Page_Test() {
     return (
        <section className={`Home_Page ${style.Page}`}>
            <HelmetHome_helmet_SEO />
            <header id="top" className={style.HeaderHomePage}>
                 <NavHome_root_Layout />
            </header>
            <main className={style.Main}>
                <Home_Root_Test />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    )
}

export { Home_Page_Test };
