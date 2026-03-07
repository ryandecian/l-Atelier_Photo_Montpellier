/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import Blog_20250601_Root from "../../../../components/public/blog-root/list-blog-root/blog_20250601/Blog_20250601.root";
import Nav_root_Layout from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Footer_Layout from "../../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetBlog20250601_helmet_SEO } from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20250601_SEO/HelmetBlog20250601.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../../hook/useScrollToHash";

function Blog20250601_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog20250601_Page ${style.Page}`}>
            <HelmetBlog20250601_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Blog_20250601_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default Blog20250601_Page;
