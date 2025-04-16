import style from "../../../StyleRootComponent.module.css";

function CorporateRootComponentA() {
    return (
        <section className={`CorporateRootComponentA ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Votre visage, votre signature, ce que vous souhaitez transmettre y sera !
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"Votre signature visuelle, "}
                    </span>
                    c’est la première impression que vous laissez. Elle influence la perception que vos clients, partenaires et recruteurs ont 
                    de vous.
                    <span className={style.SpanBold}>
                        {" Dans un monde où l’image joue un rôle majeur, "}
                    </span>
                    un portrait professionnel de qualité devient un véritable levier de communication et de différenciation. 
                </p>
                <p className={style.TextP4}>
                    Un portrait soigné, cohérent avec votre activité et votre personnalité, permet de renforcer votre crédibilité : une photo bien 
                    réalisée inspire confiance et professionnalisme. Elle montre que 
                    <span className={style.SpanBold}>
                        {" vous prenez soin de votre image et, par extension, de votre activité."}
                    </span>
                </p>
                <p className={style.TextP4}>
                    Dans un univers où tout va vite, une signature visuelle impactante vous aide à sortir du lot et à marquer les esprits. 
                </p>
            </article>
        </section>
    )
}

export default CorporateRootComponentA;
