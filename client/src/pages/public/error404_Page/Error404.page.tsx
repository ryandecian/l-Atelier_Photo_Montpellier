/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Error404Root from "../../../components/Public/error404/Error404.root";
import NavRoot from "../../../components/layout/NavRoot/NavRoot";
import Footer_layout from "../../../components/layout/footer/Footer.layout";

function Error404_Page() {
     return (
        <section className={`Error404_Page ${style.Page}`}>
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <Error404Root />
            </main>
            <footer className={style.Footer}>
                <Footer_layout />
            </footer>
        </section>
    )
}

export default Error404_Page;
