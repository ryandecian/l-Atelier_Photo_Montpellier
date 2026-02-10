/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import NavRoot from "../../../../components/layout/nav_Layout/Nav.root.layout";
import Blog_20260210_Root from "../../../../components/Public/blog-root/list-blog-root/blog_20260210/Blog_20260210.root";
import Footer_layout from "../../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
// import { HelmetBlog20251127_helmet_SEO } from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20251127_SEO/HelmetBlog20251127.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../../hook/useScrollToHash";

function Blog_20260210_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_20260210_Page ${style.Page}`}>
            {/* <HelmetBlog20251127_helmet_SEO /> */}
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20260210_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Blog_20260210_Page;
