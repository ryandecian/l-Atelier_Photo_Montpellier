import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import PortfolioRoot from "../../../components/Public/PortfolioRoot/PortfolioRoot";
import FooterRoot from "../../../components/layout/footer/Footer.layout";
import Helmet_PortraitDuo_SEO from "../../../seo/PortraitDuoSEO/Helmet_PortraitDuo.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function PortfolioPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`Portfolio ${style.Page}`}>
            <Helmet_PortraitDuo_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortfolioRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortfolioPage;
