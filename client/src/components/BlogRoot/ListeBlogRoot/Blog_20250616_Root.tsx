import style from "../../StyleRootComponent.module.css";

function Blog_20250616_Root() {
    return (
        <section id="blog_20250616" className={`Blog_20250616_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Photo professionnelle pour CV : comment capter l’attention des recruteurs à Montpellier`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Découvrez pourquoi un portrait professionnel soigné peut faire toute la différence sur votre CV et 
                renforcer l’impact de votre candidature auprès des recruteurs.
            </p>

            <h2 className={style.TitleH2}>
                {`Pourquoi ajouter une photo professionnelle à son CV ?`}
            </h2>

            <p className={style.TextP4}>
                Dans un monde de plus en plus visuel, l’impact d’une photo professionnelle sur un CV est loin d’être anodin. <br />
                En quelques secondes, un recruteur se fait une première impression qui peut influencer son jugement. <br />
                Votre portrait ne se limite pas à une image de vous : il reflète votre personnalité, votre sérieux et votre approche professionnelle. <br />
            </p>

            <p className={style.TextP4}>
                En tant que 
                <span className={style.SpanBold}>
                    {` photographe portrait professionnel à Montpellier `}
                </span>
                je constate régulièrement que mes clients qui soignent leur image sur leur CV se démarquent plus 
                facilement dans les processus de recrutement.
            </p>

            <h2 className={style.TitleH2}>
                {`Comment un portrait pro influence la perception des recruteurs`}
            </h2>

            <p className={style.TextP4}>
                Les recruteurs passent en moyenne moins de 30 secondes sur un CV. <br />
                Une 
                <span className={style.SpanBold}>
                    {` photo professionnelle bien réalisée `}
                </span>
                permet de :
            </p>
        </section>
    );
}

export default Blog_20250616_Root;
