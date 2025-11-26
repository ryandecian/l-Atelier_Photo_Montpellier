/* Import des modules CSS */
import style from "../../../stylePage.module.css";

/* Import des Components */
import Blog_20251127_Root from "../../../../components/Public/BlogRoot/ListeBlogRoot/blog_20251127/Blog_20251127.root";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../../components/layout/footer/Footer.layout";

/* Import des composants SEO */
// import { HelmetBlog20251127_helmet_SEO } from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog_20251127_SEO/HelmetBlog20251127.helmet.seo";

/* Import des Hooks */
import useScrollToHash_utils_Hook from "../../../../hook/useScrollToHash";

function Blog20251127_Page() {
    useScrollToHash_utils_Hook() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog20251127_Page ${style.Page}`}>
            {/* <HelmetBlog20251127_helmet_SEO /> */}
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20251127_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Blog20251127_Page;
