import style from "./LifeStyleRootComposantE.module.css";

function LifeStyleRootComposantE() {
    return (
        <section className={style.LifeStyleRootComposantE}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Toi & Moi : Un portrait à deux, sans filtres et sans mode d’emploi ❤️ 
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.Text}>
                    Vous êtes ensemble tous les jours. Vous partagez des petits rituels, des vannes privées que personne 
                    ne comprend, des débats inutiles sur qui a oublié de fermer le tube de dentifrice. Bref, vous êtes un 
                    duo, avec votre dynamique, votre complicité, et peut-être même votre propre langage.
                </p>
                <p className={style.Text}>
                    Du coup on choisit ensemble un lieu qui vous parle : une ruelle, une plage, un coin de nature, en 
                    intérieur chez vous. Je vous guide jusqu’à ce que vous oubliez l’appareil photo. Et là, un sourire 
                    sincère, un regard pétillant... Voilà, c’est vous.   
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBoldSpace}>
                        {"💡 Pour qui ?"}
                    </span> 
                </p>
                <p className={style.Text}>
                    👉 Ceux qui veulent {" "}
                    <span className={style.SpanBold}>
                        {"se réconcilier avec leur image."}
                    </span>
                    <br />
                    👉 Une nouvelle étape de vie, une envie de se voir autrement. <br />
                    👉 Un souvenir unique, juste pour soi. <br />
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"Mettre sa photo sur une appli de rencontre"}
                    </span> 
                </p>
            </article>
            
        </section>
    );
}

export default LifeStyleRootComposantE;