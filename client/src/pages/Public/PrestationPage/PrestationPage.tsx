import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import PrestationRoot from "../../../components/Public/PrestationRoot/PrestationRoot";
import Footer from "../../../components/layout/footer/Footer.layout";
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
                <Footer />
            </footer>
        </section>
    )
}

export default TarifsPage;
