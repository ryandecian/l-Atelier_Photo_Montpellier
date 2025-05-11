import NavRoot from "../../components/NavRoot/NavRoot";
import style from "../stylePage.module.css";
import PortraitLifeStyleRoot from "../../components/PortraitLifeStyleRoot/PortraitLifeStyleRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitLifeStyle_SEO from "../../seo/PortraitLifeStyleSEO/Helmet_PortraitLifeStyle.seo";

function PortraitLifeStylePage() {
     return (
        <div className={`PortraitLifeStylePage ${style.Page}`}>
            <Helmet_PortraitLifeStyle_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitLifeStyleRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    )
}

export default PortraitLifeStylePage;
