import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Layout/NavRoot/NavRoot";
import MentionsLegalesRoot from "../../../components/Public/MentionsLegalesRoot/MentionsLegalesRoot";
import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import Helmet_MentionLegale_SEO from "../../../seo/MentionsLegalesSEO/Helmet_MentionsLegales.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function MentionsLegalesPage() {
     useScrollToHash(); /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    return (
        <section className={`MentionsLegales ${style.Page}`}>
            <Helmet_MentionLegale_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <MentionsLegalesRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default MentionsLegalesPage;
