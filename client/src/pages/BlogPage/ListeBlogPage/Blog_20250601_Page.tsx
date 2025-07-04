import style from "../../stylePage.module.css";
import NavRoot from "../../../components/NavRoot/NavRoot";
import Blog_20250601_Root from "../../../components/BlogRoot/ListeBlogRoot/Blog_20250601_Root/Blog_20250601_Root";
import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import Helmet_Blog_20250601_SEO from "../../../seo/BlogSEO/ListeBlogRootSEO/Blog_20250601/Helmet_Blog_20250601.seo";

function Blog_20250601_Page() {
     return (
        <section className={`Blog_20260616_Page ${style.Page}`}>
            <Helmet_Blog_20250601_SEO />
            <header id="top" className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Blog_20250601_Root />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default Blog_20250601_Page;
