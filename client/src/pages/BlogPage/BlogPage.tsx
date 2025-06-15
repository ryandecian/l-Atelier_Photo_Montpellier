import style from "../stylePage.module.css";
import NavRoot from "../../components/NavRoot/NavRoot";
import BlogRoot from "../../components/BlogRoot/BlogRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
// import Helmet_Blog_SEO from "../../seo/BlogSEO/Helmet_Blog.seo";

function BlogPage() {
     return (
        <section className={`BlogPage ${style.Page}`}>
            {/* <Helmet_Blog_SEO /> */}
            <header className={style.Header}>
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
