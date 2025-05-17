import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import PortraitDuoRoot from "../../components/PortraitDuoRoot/PortraitDuoRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitDuo_SEO from "../../seo/PortraitDuoSEO/Helmet_PortraitDuo.seo";

function PortfolioPage() {
     return (
        <section className={`Portfolio ${style.Page}`}>
            <Helmet_PortraitDuo_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitDuoRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortfolioPage;
