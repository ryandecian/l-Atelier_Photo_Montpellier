import style from "../../../stylePage.module.css";
import NavRoot from "../../../../components/NavRoot/NavRoot";
import Blog_20250616_Root from "../../../../components/Public/BlogRoot/ListeBlogRoot/Blog_20250616_Root/Blog_20250616_Root";
import FooterRoot from "../../../../components/FooterRoot/FooterRoot";
import Helmet_Blog_20250616_SEO from "../../../../seo/BlogSEO/ListeBlogRootSEO/Blog_20250616/Helmet_Blog_20250616.seo";
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
