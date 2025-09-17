import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/Llayout/NavRoot/NavRoot";
import Blog_20250710_Root from "../../../../components/Public/BlogRoot/ListeBlogRoot/Blog_20250710_Root/Blog_20250710_Root";
import FooterRoot from "../../../../components/Llayout/footer/Footer.layout";
import Helmet_Blog_20250710_SEO from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20250710_SEO/Helmet_Blog_20250710.helmet.seo";
import useScrollToHash from "../../../../hook/useScrollToHash";

function Blog_20250710_Page() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_20250710_Page ${style.Page}`}>
            <Helmet_Blog_20250710_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20250710_Root />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default Blog_20250710_Page;
