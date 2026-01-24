/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import { VideoCorporate_Root } from "../../../components/public/video-corporate/VideoCorporate.root";

function VideoCorporate_Page() {
     return (
        <section className={`VideoCorporate_Page ${style.Page}`}>
            <header id="top" className={style.HeaderHomePage}>
                 <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                 <VideoCorporate_Root />
            </main>
            <footer className={style.Footer}>
                {/* <Footer_layout /> */}
            </footer>
        </section>
    )
}

export default VideoCorporate_Page;