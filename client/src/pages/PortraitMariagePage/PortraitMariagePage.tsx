import NavRoot from "../../components/NavRoot/NavRoot";
import style from "../stylePage.module.css";
import PortraitMariageRoot from "../../components/PortraitMariageRoot/MariageRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitMariage_SEO from "../../seo/PortraitMariageSEO/Helmet_PortraitMariage.seo";

function PortraitMariagePage() {

     return (
        <div className={`PortraitMariagePage ${style.Page}`}>
            <Helmet_PortraitMariage_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitMariageRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    )
}

export default PortraitMariagePage;
