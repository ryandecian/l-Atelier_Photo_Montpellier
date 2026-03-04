/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Blog_20260305_Root from "../../../../components/Public/blog-root/list-blog-root/blog_20260305/Blog_20260305.root";
import Footer_layout from "../../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
    import { HelmetBlog20260305_helmet_SEO } from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20260305_SEO/HelmetBlog20260305.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../../hook/useScrollToHash";

function Blog_20260305_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_20260305_Page ${style.Page}`}>
            <HelmetBlog20260305_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20260305_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Blog_20260305_Page;
