import style from "./LifeStyleRootComposantC.module.css";

function LifeStyleRootComposantC() {
    return (
        <section className={style.LifeStyleRootComposantC}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Portrait Solo: Se voir autrement
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.Text}>
                    Vous avez déjà regardé une photo de vous en vous disant {" "}
                    <span className={style.SpanBold}>
                        {`"Ce n'est pas moi"`}
                    </span> 
                    {" "} ? Oubliez les clichés figés et les regards crispés. Ici, c’est un moment rien que pour vous, 
                    une parenthèse où vous pouvez être pleinement vous-même.  Je l’appelle {" "}
                    <span className={style.SpanBold}>
                        {"le moment Feel Good"}
                    </span> 
                    {" "}, car sur le moment vous êtes bien et après n’en croyez pas vos yeux, vous vous aimez en photo !
                </p>
                <p className={style.Text}>
                    Du coup on choisit ensemble un lieu qui vous parle : une ruelle, une plage, un coin de nature, en 
                    intérieur chez vous. Je vous guide jusqu’à ce que vous oubliez l’appareil photo. Et là, un sourire 
                    sincère, un regard pétillant... Voilà, c’est vous.   
                </p>
                <p className={style.Text}>
                    💡 Pour qui ? 
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"Choisissez le format qui vous convient le mieux :"}
                    </span> 
                </p>
                <p className={style.Text}>
                    En une phrase : je cherche un équilibre entre authenticité et esthétisme ! Envie de tenter l’expérience ? 
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"Choisissez le format qui vous convient le mieux :"}
                    </span> 
                </p>
            </article>
            
        </section>
    );
}

export default LifeStyleRootComposantC;