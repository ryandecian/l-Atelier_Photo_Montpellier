import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Layout/NavRoot/NavRoot";
import PortraitFamilleRoot from "../../../components/Public/PortraitFamilleRoot/PortraitFamilleRoot";
import FooterRoot from "../../../components/Layout/FooterRoot/FooterRoot";
import Helmet_PortraitFamille_SEO from "../../../seo/PortraitFamilleSEO/Helmet_PortraitFamille.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function PortraitFamillePage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitFamille ${style.Page}`}>
            <Helmet_PortraitFamille_SEO />
            <header id="top" className={style.Header}>
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
