import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import PrestationRoot from "../../components/PrestationRoot/PrestationRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
// import Helmet_Tarifs_SEO from "../../seo/TarifsSEO/Helmet_Tarifs.seo";

function TarifsPage() {
     return (
        <section className={`TarifsPage ${style.Page}`}>
            {/* <Helmet_Tarifs_SEO /> */}
            <header className={style.Header}>
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
