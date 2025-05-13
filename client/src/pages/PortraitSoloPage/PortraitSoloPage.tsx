import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import PortraitSoloRoot from "../../components/PortraitSoloRoot/PortraitSoloRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitSolo_SEO from "../../seo/PortraitSoloSEO/Helmet_PortraitSolo.seo";

function PortraitSoloPage() {
     return (
        <section className={`PortraitSoloPage ${style.Page}`}>
            <Helmet_PortraitSolo_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitSoloRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortraitSoloPage;
