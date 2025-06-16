import style from "../../stylePage.module.css";
import NavRoot from "../../../components/NavRoot/NavRoot";
import Blog_20250616_Root from "../../../components/BlogRoot/ListeBlogRoot/Blog_20250616_Root";
import FooterRoot from "../../../components/FooterRoot/FooterRoot";
// import Helmet_Blog_SEO from "../../seo/BlogSEO/Helmet_Blog.seo";

function Blog_20250616_Page() {
     return (
        <section className={`Blog_20260616_Page ${style.Page}`}>
            {/* <Helmet_Blog_SEO /> */}
            <header className={style.Header}>
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
