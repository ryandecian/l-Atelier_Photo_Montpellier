/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Blog_20260305_Root from "../../../../components/public/blog-root/list-blog-root/blog_20260305/Blog_20260305.root";
import Footer_Layout from "../../../../components/layout/footer_Layout/Footer.layout";

/* Import des composants SEO */
    import { HelmetBlog20260305_helmet_SEO } from "../../../../seoS/blog_SEO/liste-article-blog_SEO/blog-20260305_SEO/HelmetBlog20260305.helmet.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../../hook/useScrollToHash.hook";

function Blog_20260305_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_20260305_Page ${style.Page}`}>
            <HelmetBlog20260305_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Blog_20260305_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default Blog_20260305_Page;
