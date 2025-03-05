import style from "./ContainerAccueilHomeRoot.module.css";

function ContainerAccueilHomeRoot() {
    return (
        <section className={style.ContainerAccueil}>            

            <article className={style.ContainerSubAccueil}>
                <article className={style.ContainerSlogan}>
                    <p className={style.Slogan}>
                        {"DES PORTRAITS"}
                    </p>
                    <p className={style.Slogan}>
                        {"QUI"}
                    </p>
                    <p className={style.Slogan}>
                        {"PARLENT DE"}
                    </p>
                    <p className={style.Slogan}>
                        {"VOUS"}
                    </p>
                </article>
                <header className={style.ContainerTitle}>
                    <h1>PHOTOGRAPHE DE PORTRAITS ET DE MARIAGE A MONTPELLIER</h1>
                </header>
            </article>
        </section>
    );
}

export default ContainerAccueilHomeRoot;
