/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import ExpertiseVideo_Root from "../../../components/public/expertise-video/ExpertiseVideo.root";
import Footer_root_layout from "../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function ExpertiseVideo_Page() {
     useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
     
     return (
        <section className={`ExpertiseVideo_Page ${style.Page}`}>
            <header id="top" className={style.HeaderHomePage}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                 <ExpertiseVideo_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    )
}

export default ExpertiseVideo_Page;
