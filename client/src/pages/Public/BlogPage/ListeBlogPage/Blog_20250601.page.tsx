/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import Blog_20250601_Root from "../../../../components/Public/BlogRoot/ListeBlogRoot/Blog_20250601_Root/Blog_20250601_Root";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetBlog20250601_helmet_SEO } from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20250601_SEO/HelmetBlog20250601.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../../hook/useScrollToHash";

function Blog_20250601_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_20250601_Page ${style.Page}`}>
            <HelmetBlog20250601_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20250601_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Blog_20250601_Page;
