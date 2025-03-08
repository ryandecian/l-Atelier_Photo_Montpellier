import style from "./HomeRootComposantD.module.css"
import AvisClient from "../ComposantHomeRoot/ContainerAvisHomeRoot/AvisClient";
import Test from "../ComposantHomeRoot/ContainerAvisHomeRoot/test";

function HomeRootComposantD() {
    return (
        <section className={style.HomeRootComposantD}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Des photos, des expériences, des mots, ils m'ont fait confiance !
                </h2>
            </header>
            <section className={style.test2}></section>
            <article className={style.test7}>
                <p className={style.test3}>test</p>
            </article>
            <div className={style.test7}>
            <p className={style.test3}>testD</p>
            </div>
            <p className={style.test5}>test5</p>
            <h1 className={style.test6}></h1>

            <Test />
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
