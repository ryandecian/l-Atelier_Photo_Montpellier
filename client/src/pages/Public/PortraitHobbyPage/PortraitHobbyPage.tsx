import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Layout/NavRoot/NavRoot";
import PortraitHobbyRoot from "../../../components/Public/PortraitHobbyRoot/PortraitHobbyRoot";
import FooterRoot from "../../../components/Layout/FooterRoot/FooterRoot";
import Helmet_PortraitHobby_SEO from "../../../seo/PortraitHobbySEO/Helmet_PortraitHobby.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function PortraitHobbyPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitHobby ${style.Page}`}>
            <Helmet_PortraitHobby_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitHobbyRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortraitHobbyPage;
