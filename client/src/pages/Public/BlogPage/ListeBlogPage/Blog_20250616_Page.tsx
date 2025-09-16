import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Layout/NavRoot/NavRoot";
import Blog_20250616_Root from "../../../../components/Public/BlogRoot/ListeBlogRoot/Blog_20250616_Root/Blog_20250616_Root";
import FooterRoot from "../../../../components/Layout/FooterRoot/FooterRoot";
import Helmet_Blog_20250616_SEO from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20250616_SEO/Helmet_Blog_20250616.helmet.seo";
import useScrollToHash from "../../../../hook/useScrollToHash";

function Blog_20250616_Page() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_20260616_Page ${style.Page}`}>
            <Helmet_Blog_20250616_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20250616_Root />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default Blog_20250616_Page;
