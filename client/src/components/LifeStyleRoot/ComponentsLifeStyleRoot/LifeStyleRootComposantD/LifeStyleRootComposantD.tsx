import style from "./LifeStyleRootComposantD.module.css";

function LifeStyleRootComposantD() {
    return (
        <section className={style.LifeStyleRootComposantD}>
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
                    Et si on arrêtait le temps, juste un instant ? 
                </p>
                <p className={style.Text}>
                    Cette séance photo, ce n’est pas une mise en scène digne d’un film romantique à l’eau de rose. Pas de 
                    "regardez-vous langoureusement sous le coucher du soleil" (sauf si c'est votre truc, auquel cas on 
                    s’adapte et c’est sympa aussi !). Ici, je capte votre connivence, vos petits gestes, cette manière 
                    instinctive dont vos mains se trouvent sans même y penser.
                </p>
                <p className={style.Text}>
                    Je peux vous accompagner pour flâner dans vos rues préférées, ou sur une plage, ou en pleine nature…ou 
                    encore chez vous sur le canapé avec le chat en maraude de demandant bien ce qu’il se passe du chat qui 
                    s’incruste, une playlist en fond sonore pour vous rappeler votre univers. Et pourquoi pas essayer le 
                    shooting en studio ? {" "} 
                    <span className={style.SpanBoldSpace}>
                        {"🌿 Au grand air :"}
                    </span>
                    {" "} une plage, une forêt, un champ perdu au milieu de nulle part… On bouge, on s’amuse, on oublie 
                    qu’on est là pour une séance photo.
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBoldSpace}>
                        {"🏡 Chez vous :"}
                    </span> 
                    {" "} un moment cosy, un canapé partagé, un fou rire à cause du chat qui s’incruste, une playlist en 
                    fond sonore… bref, la vraie vie.
                </p>
                <p className={style.Text}>
                    Pas besoin de savoir poser. D’ailleurs, oubliez même que je suis là. Vous discutez, vous vous taquinez, 
                    vous êtes juste vous, et moi, je capture ça. 
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBoldSpace}>
                        {"💡 Pour qui ?"}
                    </span> 
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"Cette séance est faite pour vous si :"}
                    </span>
                    <br />
                    {" "} <br />
                    👉 Vous voulez des photos qui vous ressemblent, sans artifices ni mode d’emploi. <br />
                    👉 Vous cherchez un souvenir authentique de votre relation, que ce soit en couple, entre amis ou en duo 
                    parent/enfant. <br />
                    👉 Vous avez envie d’un prétexte pour ralentir un peu, et juste profiter du moment. <br />
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"C’est votre histoire, et je la photographie avec mon cœur."}
                    </span> 
                </p>
            </article>
            
        </section>
    );
}

export default LifeStyleRootComposantD;