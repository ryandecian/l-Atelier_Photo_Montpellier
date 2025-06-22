import NavTargetHomeRoot from "../../components/NavTargetHomeRoot/NavTargetHomeRoot";
import css from "../stylePage.module.css"
import HomeRoot from "../../components/HomeRoot/HomeRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_Home_SEO from "../../seo/HomeSEO/Helmet_Home.seo";

function HomePage() {
     return (
        <section className={`HomePage ${css.Page}`}>
            <Helmet_Home_SEO />
            <header id="top" className={css.HeaderHomePage}>
                 <NavTargetHomeRoot />
            </header>
            <main className={css.Main}>
                <HomeRoot />
            </main>
            <footer className={css.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default HomePage;
