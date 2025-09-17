import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import style from "../../stylePage.module.css";
import PortraitLifeStyleRoot from "../../../components/Public/PortraitLifeStyleRoot/PortraitLifeStyleRoot";
import FooterRoot from "../../../components/layout/footer/Footer.layout";
import Helmet_PortraitLifeStyle_SEO from "../../../seo/PortraitLifeStyleSEO/Helmet_PortraitLifeStyle.helmet.seo";

function PortraitLifeStylePage() {
     return (
        <div className={`PortraitLifeStylePage ${style.Page}`}>
            <Helmet_PortraitLifeStyle_SEO />
            <header id="top" className={style.Header}>
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
