import css from "../../stylePage.module.css"
import NavTargetHomeRoot from "../../../components/Layout/NavTargetHomeRoot/NavTargetHomeRoot";
import HomeRoot from "../../../components/Public/HomeRoot/HomeRoot";
import FooterRoot from "../../../components/Layout/FooterRoot/Footer.layout";
import Helmet_Home_SEO from "../../../seo/HomeSEO/Helmet_Home.helmet.seo";

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
