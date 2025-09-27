/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import MentionsLegalesRoot from "../../../components/Public/MentionsLegalesRoot/MentionsLegalesRoot";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetMentionLegale_helmet_SEO } from "../../../seo/mentions-legales_SEO/HelmetMentionsLegales.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../hook/useScrollToHash";

function MentionsLegales_Page() {
     useScrollToHash_utils_Hook(); /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`MentionsLegales_Page ${style.Page}`}>
            <HelmetMentionLegale_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <MentionsLegalesRoot />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default MentionsLegales_Page;
