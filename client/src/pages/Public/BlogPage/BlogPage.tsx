import style from "../../stylePage.module.css";
import NavRoot from "../../../components/Layout/NavRoot/NavRoot";
import BlogRoot from "../../../components/Public/BlogRoot/BlogRoot";
import FooterRoot from "../../../components/Layout/FooterRoot/FooterRoot";
import Helmet_Blog_SEO from "../../../seo/blog_SEO/Helmet_Blog.helmet.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

function BlogPage() {
    useScrollToHash() /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

     return (
        <section className={`BlogPage ${style.Page}`}>
            <Helmet_Blog_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <BlogRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default BlogPage;
