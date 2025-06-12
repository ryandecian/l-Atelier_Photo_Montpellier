import NavRoot from "../../components/NavRoot/NavRoot";
import style from "../stylePage.module.css";
// import PortraitGrossesseRoot from "../../components/PortraitGrossesseRoot/PortraitGrossesseRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
// import Helmet_PortraitGrossesse_SEO from "../../seo/PortraitGrossesseSEO/Helmet_PortraitGrossesse.seo";

/* Cette page reprend la quasi totalité des éléments éléments et composant de la page Portrait Grossesse */

function QuiSuisJePage() {
     return (
        <section className={`QuiSuisJePage ${style.Page}`}>
            {/* <Helmet_PortraitGrossesse_SEO /> */}
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                {/* <PortraitGrossesseRoot /> */}
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default QuiSuisJePage;
