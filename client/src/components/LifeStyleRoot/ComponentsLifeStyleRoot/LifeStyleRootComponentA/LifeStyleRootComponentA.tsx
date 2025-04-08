import style from "../../../StyleRootComponent.module.css";

function LifeStyleRootComponentA() {
    return (
        <section className={`LifeStyleRootComponentA ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Un shooting pensé pour vous mettre à l’aise et révéler votre personnalité
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    Sans renier la technique mais en la rendant invisible je vous propose avec mon œil photographique de 
                    vivre un de ces instants où {" "}
                    <span className={style.SpanBold}>
                        {"le naturel et la créativité se rejoignent."}
                    </span> 
                    {" "} Comme photographie professionnelle spécialisée dans les portraits je ne me limite pas aux 
                    lumières douces et aux instants volés. Je mêle spontanéité et direction artistique, avec une approche 
                    où le naturel rencontre une lumière travaillée, même au flash en extérieur.
                </p>
                <p className={style.TextP4}>
                    Contrairement aux portraits figés et ultra-posés, je cherche à {" "}
                    <span className={style.SpanBold}>
                        {"capturer une dynamique réelle,"}
                    </span> 
                    {" "} une expression sincère, tout en soignant la lumière et la mise en scène. Ici, {" "}
                    <span className={style.SpanBold}>
                        {"le flash devient un outil créatif :"}
                    </span> 
                    {" "} il sculpte le sujet, équilibre les contrastes, apporte du relief, même en pleine nature ou en 
                    milieu urbain. 
                </p>
                <p className={style.TextP4}>
                    En une phrase : je cherche un équilibre entre authenticité et esthétisme ! Envie de tenter l’expérience ? 
                </p>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"Choisissez le format qui vous convient le mieux :"}
                    </span> 
                </p>
            </article>
            
        </section>
    );
}

export default LifeStyleRootComponentA;