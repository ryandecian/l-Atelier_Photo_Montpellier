/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import PortraitHobbyRoot from "../../../components/Public/PortraitHobbyRoot/PortraitHobbyRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetPortraitHobby_helmet_SEO } from "../../../seo/portrait-hobby_SEO/HelmetPortraitHobby.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function PortraitHobby_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitHobby ${style.Page}`}>
            <HelmetPortraitHobby_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitHobbyRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default PortraitHobby_Page;
