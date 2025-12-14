/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Home_Root from "../../../components/public/home/home.root";

function Home_Page() {
     return (
        <section className={`Home_Page ${style.Page}`}>
            <header id="top" className={style.HeaderHomePage}>
                 {/* <NavTargetHomeRoot /> */}
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
