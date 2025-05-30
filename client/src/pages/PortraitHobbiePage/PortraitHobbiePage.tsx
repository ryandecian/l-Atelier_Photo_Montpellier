import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import PortraitHobbieRoot from "../../components/PortraitHobbieRoot/PortraitHobbieRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitHobbie_SEO from "../../seo/PortraitHobbieSEO/Helmet_PortraitHobbie.seo";

function PortraitHobbiePage() {
     return (
        <section className={`PortraitHobbie ${style.Page}`}>
            <Helmet_PortraitHobbie_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitHobbieRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortraitHobbiePage;
