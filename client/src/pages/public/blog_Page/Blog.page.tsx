/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import Blog_Root from "../../../components/public/blog-root/Blog.root";
import Footer_Layout from "../../../components/layout/footer_Layout/Footer.layout";

/* Import des composants SEO */
import { HelmetBlog_helmet_SEO } from "../../../seo/blog_SEO/HelmetBlog.helmet.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../hook/useScrollToHash.hook";

function Blog_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_Page ${style.Page}`}>
            <HelmetBlog_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Blog_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default Blog_Page;
