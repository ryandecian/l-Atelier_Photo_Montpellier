import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import CGVRoot from "../../../components/Public/CGVRoot/CGVRoot";
import Footer from "../../../components/layout/footer/Footer.layout";
import Helmet_CGV_SEO from "../../../seo/CGVSEO/Helmet_CGV.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function CGVPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`CGVPage ${style.Page}`}>
            <Helmet_CGV_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <CGVRoot />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    )
}

export default CGVPage;
