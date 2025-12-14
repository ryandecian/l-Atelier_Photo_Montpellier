/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
// import HomeRoot from "../../../components/Public/home/Home.root";

function Home_Page() {
     return (
        <section className={`Home_Page ${style.Page}`}>
            <header id="top" className={style.HeaderHomePage}>
                 {/* <NavTargetHomeRoot /> */}
            </header>
            <main className={style.Main}>
                {/* <HomeRoot /> */}
            </main>
            <footer className={style.Footer}>
                {/* <Footer_layout /> */}
            </footer>
        </section>
    )
}

export default Home_Page;
