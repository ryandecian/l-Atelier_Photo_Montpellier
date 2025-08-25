import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Layout/NavRoot/NavRoot";
import CGVRoot from "../../../components/Public/CGVRoot/CGVRoot";
import FooterRoot from "../../../components/Layout/FooterRoot/FooterRoot";
import Helmet_CGV_SEO from "../../../seo/CGVSEO/Helmet_CGV.seo";
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
                <FooterRoot />
            </footer>
        </section>
    )
}

export default CGVPage;
