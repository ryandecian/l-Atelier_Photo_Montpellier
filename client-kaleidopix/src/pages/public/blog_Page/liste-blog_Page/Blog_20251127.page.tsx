/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Blog_20251127_Root from "../../../../components/public/blog/list-blog/blog_20251127/Blog_20251127.root";
import Footer_root_layout from "../../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des composants SEO */

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../../hook/useScrollToHash.hook";

function Blog_20251127_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_20251127_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Blog_20251127_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    )
}

export default Blog_20251127_Page;
