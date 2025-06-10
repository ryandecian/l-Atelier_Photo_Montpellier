import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import PortraitHobbyRoot from "../../components/PortraitHobbyRoot/PortraitHobbyRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitHobby_SEO from "../../seo/PortraitHobbySEO/Helmet_PortraitHobby.seo";

function PortraitHobbyPage() {
     return (
        <section className={`PortraitHobby ${style.Page}`}>
            <Helmet_PortraitHobby_SEO />
            <header className={style.Header}>
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
