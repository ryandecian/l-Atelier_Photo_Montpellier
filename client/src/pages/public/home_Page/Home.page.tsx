/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import HomeRoot from "../../../components/Public/home/Home.root";
// import NavTargetHomeRoot from "../../../components/layout/NavTargetHomeRoot/NavTargetHomeRoot";
import NavHome_root_Layout from "../../../components/layout/navHome_Layout/NavHome.root.layout";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetHome_helmet_SEO } from "../../../seo/home_SEO/HelmetHome.helmet.seo";

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
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Home_Page;
