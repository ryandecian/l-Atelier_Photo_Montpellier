import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/layout/NavRoot/NavRoot";
import Blog_20250917_Root from "../../../../components/Public/BlogRoot/ListeBlogRoot/Blog_20250917_Root/Blog_20250917.root";
import Footer from "../../../../components/layout/footer/Footer.layout";
import { HelmetBlog20250917_helmet_SEO } from "../../../../seo/blog_SEO/liste-article-blog_SEO/blog-20250917_SEO/HelmetBlog20250724.helmet.seo";
import useScrollToHash from "../../../../hook/useScrollToHash";

function Blog_20250917_Page() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`Blog_20250917_Page ${style.Page}`}>
            <HelmetBlog20250917_helmet_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20250917_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    )
}

export default Blog_20250917_Page;
