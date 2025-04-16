import style from "../../../StyleRootComponent.module.css";

function CorporateRootComponentB() {
    return (
        <section className={`CorporateRootComponentB ${style.ContainerRoot}`}>

            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Prêt(e) à donner du poids à votre signature visuelle d’entreprise ? 
                </h2>
            </header>

            <p className={style.TextP4}>
                Avant de déclencher l’appareil, je vous propose un
                <span className={style.SpanBold}>
                    {" temps d’échange et de repérage. "}
                </span>
                L’objectif ? Définir ensemble le ton, le style et l’ambiance qui correspondent le mieux à votre image de marque. 
            </p>
                <span className={style.SpanBold}>
                    {" "}
                </span>
        </section>
    )
}

export default CorporateRootComponentB;
