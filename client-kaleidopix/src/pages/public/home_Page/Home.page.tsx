/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import Home_Root from "../../../components/public/home/Home.root";

function Home_Page() {
     return (
        <section className={`Home_Page ${style.Page}`}>
            <header id="top" className={style.HeaderHomePage}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Home_Root />
            </main>
            <footer className={style.Footer}>
                {/* <Footer_layout /> */}
            </footer>
        </section>
    )
}

export default Home_Page;
