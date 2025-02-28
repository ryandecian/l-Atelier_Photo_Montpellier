import style from "./ContainerServicesHomeRoot.module.css";

function ContainerServicesHomeRoot() {
    return (
        <section className={style.ContainerServices}>
            <header className={style.ServicesTitle}>
                <h2>
                    PRESENTATION DES SERVICES
                </h2>
            </header>

            <div className={style.CardServices}></div>
        </section>
    );
}

export default ContainerServicesHomeRoot;
