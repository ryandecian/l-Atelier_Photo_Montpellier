import style from "../../stylePage.module.css";
import NavRoot from "../../../components/NavRoot/NavRoot";
import Blog_20250710_Root from "../../../components/BlogRoot/ListeBlogRoot/Blog_20250710_Root/Blog_20250710_Root";
import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import Helmet_Blog_20250710_SEO from "../../../seo/BlogSEO/ListeBlogRootSEO/Blog_20250710/Helmet_Blog_20250710.seo";
import useScrollToHash from "../../../hook/useScrollToHash";

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
