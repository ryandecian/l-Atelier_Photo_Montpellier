/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import NavHome_root_Layout from "../../../components/layout/navHome_Layout/NavHome.root.layout";
import HomeRoot from "../../../components/public/home/Home.root";
import Footer_Layout from "../../../components/layout/footer_Layout/Footer.layout";

/* Import des composants SEO */
import { HelmetHome_helmet_SEO } from "../../../seoS/home_SEO/HelmetHome.helmet.seo";

function Home_Page() {
     return (
        <section className={`Home_Page ${style.Page}`}>
            <HelmetHome_helmet_SEO />
            <header id="top" className={style.HeaderHomePage}>
                 <NavHome_root_Layout />
            </header>
            <main className={style.Main}>
                <HomeRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default Home_Page;
