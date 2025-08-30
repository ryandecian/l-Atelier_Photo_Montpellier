import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Layout/NavRoot/NavRoot";
import PrestationRoot from "../../../components/Public/PrestationRoot/PrestationRoot";
import FooterRoot from "../../../components/Layout/FooterRoot/FooterRoot";
import Helmet_Prestation_SEO from "../../../seo/PrestationSEO/Helmet_Prestation.helmet.seo";

function TarifsPage() {
     return (
        <section className={`TarifsPage ${style.Page}`}>
            <Helmet_Prestation_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PrestationRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default TarifsPage;
