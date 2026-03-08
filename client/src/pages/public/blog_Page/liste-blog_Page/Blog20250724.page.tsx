/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Blog_20250724_Root from "../../../../components/public/blog-root/list-blog-root/blog_20250724/Blog_20250724.root";
import Footer_Layout from "../../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetBlog20250724_helmet_SEO } from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20250724_SEO/HelmetBlog20250724.helmet.seo";

/* Import des Hooks */
import { useScrollToHash_Hook } from "../../../../hook/useScrollToHash.hook";

function Blog20250724_Page() {
    useScrollToHash_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog20250724_Page ${style.Page}`}>
            <HelmetBlog20250724_helmet_SEO />
            <header id="top" className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Blog_20250724_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default Blog20250724_Page;
