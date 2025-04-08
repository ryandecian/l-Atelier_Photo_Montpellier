import style from "./ContainerAccueilHomeRoot.module.css";

function ContainerAccueilHomeRoot() {
    return (
        <div className={style.ContainerRoot}>            

            <div className={style.ContainerSubAccueil}>
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
            </div>
        </div>
    );
}

export default ContainerAccueilHomeRoot;
