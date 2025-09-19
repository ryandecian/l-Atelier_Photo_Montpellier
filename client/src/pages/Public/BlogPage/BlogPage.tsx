import style from "../../stylePage.module.css";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Blog_Root from "../../../components/Public/BlogRoot/Blog.root";
import Footer from "../../../components/layout/footer/Footer.layout";
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
                <Blog_Root />
            </main>
            <footer className={style.Footer}>
                <Footer />
            </footer>
        </section>
    )
}

export default BlogPage;
