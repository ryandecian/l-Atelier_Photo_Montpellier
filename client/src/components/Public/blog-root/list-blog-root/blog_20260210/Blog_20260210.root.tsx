/* Import des modules CSS */
import style from "../../../../StyleRootComponent.module.css";

function Blog_20260210_Root() {
    return (
        <section className={`Blog_20260210_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Préparatifs de mariage : pourquoi les photographier – reportage photo à Montpellier`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Dans les préparatifs, il n’y a pas encore le <strong>mariage</strong>. Mais il y a l’impatience : cette 
                sensation étrange d’être déjà dedans, sans y être tout à fait. À <strong>Montpellier</strong> comme 
                ailleurs, ce moment se vit souvent dans un lieu familier : une maison, un appartement, un hôtel, 
                parfois un <strong>gîte dans l’Hérault</strong>. Les <strong>préparatifs</strong> sont un temps 
                d’attente active. Et cette attente est profondément <strong>photographique</strong>.
            </p>

            {/* Images x 4 */}

            
            <h2 className={style.TitleH2}>
                Pourquoi immortaliser les préparatifs de votre union ?
            </h2>

            <p className={style.TextP4}>
                Les préparatifs ne sont pas un simple préalable logistique. C’est l’entre-deux, un temps suspendu. Plus 
                qu'un simple habillage, ils sont le prologue de votre <strong>histoire de mariage</strong>. Que vous 
                vous prépariez dans un appartement du centre de Montpellier, dans un domaine à Castelnau-le-Lez ou dans 
                un mas au cœur de l’Hérault, ce moment est celui de la metamorphose.
            </p>

            <p className={style.TextP4}>
                En tant que photographe de mariage, mon rôle est mon rôle est de capter ce qui ne se rejoue pas : les 
                détails discrets, la concentration, les silences, la présence des proches tout. autant que de saisir des 
                détails essentiels : la dentelle de la robe, l'éclat des <strong>alliances</strong>, et surtout, 
                l'émotion de vos proches <strong>(parents, témoins, demoiselles d'honneur)</strong>. 
            </p>

            <p className={style.TextP4}>
                Il est aussi de mettre en relief cette transition qui apporte de la matière au <strong>reportage</strong>
                , par la fébrilité intérieure des acteurs et la concentration qu’elle occasionne. Car l’impatience 
                sous-tendue des futurs mariés est un moteur de réussite invisible de la <strong>photographie de mariage</strong>.
            </p>
            
            {/* Images x 4 */}
            
            <h3 className={style.TitleLNH3}>
                Les regards avant le grand basculement
            </h3>

            <p className={style.TextP4}>
                Avant les échanges de la cérémonie, il y a les regards des préparatifs. Des regards libres, furtifs, 
                adressés à personne en particulier. Ils racontent le couple avant qu’il soit exposé aux yeux de tous.
            </p>
        </section>
    )
}

export default Blog_20260210_Root
