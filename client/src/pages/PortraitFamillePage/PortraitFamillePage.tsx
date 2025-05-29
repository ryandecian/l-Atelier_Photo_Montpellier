import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import PortraitFamilleRoot from "../../components/PortraitFamilleRoot/PortraitFamilleRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import Helmet_PortraitFamille_SEO from "../../seo/PortraitFamilleSEO/Helmet_PortraitFamille.seo";

function PortraitFamillePage() {
     return (
        <section className={`PortraitFamille ${style.Page}`}>
            <Helmet_PortraitFamille_SEO />
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <PortraitFamilleRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default PortraitFamillePage;
