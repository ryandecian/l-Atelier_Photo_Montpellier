/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import PortraitHobby_Root from "../../../components/public/portrait-hobby/PortraitHobby.root";
import Footer_Layout from "../../../components/layout/footer_Layout/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitHobby_helmet_SEO } from "../../../seoS/portrait-hobby_SEO/HelmetPortraitHobby.helmet.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function PortraitHobby_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitHobby ${style.Page}`}>
            <HelmetPortraitHobby_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <PortraitHobby_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default PortraitHobby_Page;
