import style from "./HomeRootComposantD.module.css"
import AvisClient from "../ComposantHomeRoot/ContainerAvisHomeRoot/AvisClient";

function HomeRootComposantD() {
    return (
        <section className={style.HomeRootComposantD}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Avis Clients
                </h2>
            </header>

            <AvisClient />

            <article className={style.ContainerText}>
                <p className={style.Text}>
                    <></>
                </p>
            </article>
        </section>
    );
}

export default HomeRootComposantD;
