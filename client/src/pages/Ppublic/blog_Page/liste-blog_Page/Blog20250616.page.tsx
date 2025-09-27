/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import Blog_20250616_Root from "../../../../components/Public/BlogRoot/ListeBlogRoot/Blog_20250616_Root/Blog_20250616_Root";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
import { HelmetBlog20250616_helmet_SEO } from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20250616_SEO/HelmetBlog20250616.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../../hook/useScrollToHash";

function Blog20250616_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog20250616_Page ${style.Page}`}>
            <HelmetBlog20250616_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20250616_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Blog20250616_Page;
