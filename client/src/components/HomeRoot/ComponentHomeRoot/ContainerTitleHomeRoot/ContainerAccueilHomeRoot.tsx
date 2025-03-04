import style from "./ContainerAccueilHomeRoot.module.css";

function ContainerAccueilHomeRoot() {
    return (
        <section className={style.ContainerAccueil}>            

            <article className={style.ContainerSubAccueil}>
                <div className={style.test}>
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
                </div>
                <div className={style.testB}>
                    <p>PHOTOGRAPHE DE PORTRAITS ET DE MARIAGE A MONTPELLIER</p>
                </div>
            </article>
        </section>
    );
}

export default ContainerAccueilHomeRoot;
