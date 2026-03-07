/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import Error404Root from "../../../components/ppublic/error404/Error404.root";
import Footer_Layout from "../../../components/layout/footer/Footer.layout";

function Error404_Page() {
     return (
        <section className={`Error404_Page ${style.Page}`}>
            <header className={style.Header}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Error404Root />
            </main>
            <footer className={style.Footer}>
                <Footer_Layout />
            </footer>
        </section>
    )
}

export default Error404_Page;
