import style from "./ContainerServicesHomeRoot.module.css";
import ImgService1 from "../../../../assets/Background-img/Dans_vos_yeux_Portrait_4-3.jpg";

function ContainerServicesHomeRoot() {
    return (
        <section className={style.ContainerServices}>
            <header className={style.ServicesTitle}>
                <h2>PRESENTATION DES SERVICES</h2>
            </header>

            <div className={style.CardContainer}>
                {/* Card 1 */}
                <article className={style.Card}>
                    <img src={ImgService1} alt="Service 1" className={style.CardImage} />
                    <div className={style.CardContent}>
                        <h3 className={style.CardTitle}>Service 1</h3>
                        <p className={style.CardDescription}>
                            Description courte du service 1. Un texte concis qui présente l'essentiel du service.
                        </p>
                    </div>
                </article>

                {/* Card 2 */}
                <article className={style.Card}>
                    <img src={ImgService1} alt="Service 2" className={style.CardImage} />
                    <div className={style.CardContent}>
                        <h3 className={style.CardTitle}>Service 2</h3>
                        <p className={style.CardDescription}>
                            Description courte du service 2. Un texte concis qui présente l'essentiel du service.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default ContainerServicesHomeRoot;
