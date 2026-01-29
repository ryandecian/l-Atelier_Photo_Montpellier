/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import PhotoCorporate_Root from "../../../components/public/photo-corporate/PhotoCorporate.root";
import Footer_root_layout from "../../../components/layout/footer_Layout/Footer.root.layout";

function PhotoCorporate_Page() {
     return (
        <section className={`PhotoCorporate_Page ${style.Page}`}>
            <header id="top" className={style.HeaderHomePage}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                 <PhotoCorporate_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    )
}

export default PhotoCorporate_Page;
