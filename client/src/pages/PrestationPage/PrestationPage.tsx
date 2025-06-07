import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import TarifsRoot from "../../components/TarifsRoot/TarifsRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
// import Helmet_Tarifs_SEO from "../../seo/TarifsSEO/Helmet_Tarifs.seo";

function TarifsPage() {
     return (
        <section className={`PortraitTarifsPage ${style.Page}`}>
            {/* <Helmet_Tarifs_SEO /> */}
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <TarifsRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default TarifsPage;
