import NavRoot from "../../components/NavRoot/NavRoot";
import style from "../stylePage.module.css";
import GrossesseRoot from "../../components/GrossesseRoot/GrossesseRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitGrossesse_SEO from "../../seo/PortraitGrossesseSEO/Helmet_PortraitGrossesse.seo";

function GrossessePage() {
     return (
        <section className={`GrossessePage ${style.Page}`}>
            <Helmet_PortraitGrossesse_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <GrossesseRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default GrossessePage;
