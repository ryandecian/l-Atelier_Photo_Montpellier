import style from "./HomeRootContainerA.module.css"

function HomeRootContainerA() {
    return (
        <section className={style.HomeRootContainerA}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    J'observe, je vous met à l'aise, je fige l'instant avec justesse.
                </h2>
            </header>

            <article className={style.ContainerText1}>
                <p className={style.Text1}>
                    Vous cherchez à immortaliser des moments uniques à travers des portraits 
                    authentiques, des photos de mariage, des shootings lifestyle ou même en 
                    vidéo ?
                </p>
            </article>
            <article className={style.ContainerText2}>
                <p className={style.Text2}>
                    En tant que photographe professionnelle installée à Montpellier et 
                    spécialisée en portraits – qu’ils soient corporate, lifestyle, réalisés 
                    en lumière naturelle ou au flash – je mets tout en œuvre pour saisir la 
                    personnalité unique de chacun. La photographie de portrait professionnel 
                    n’est pas seulement une technique, c’est une véritable passion que je 
                    développe afin que chacun et chacune puisse porter un regard sur lui 
                    (elle) positif et valorisant.
                </p>
            </article>
            <article className={style.ContainerText3}>
                <p className={style.Text3}>
                    Ma vision du mariage se décline sous la forme d’un reportage photographique. 
                    Plutôt que de créer de simples poses figées, je privilégie l’instantanéité 
                    et la spontanéité des émotions vécues durant la cérémonie. Je cherche à 
                    être au plus près de tous ces instants afin qu’ils restent gravés, et cette 
                    approche me permet de raconter une histoire visuelle complète, où chaque 
                    image capte la complicité, la tendresse et l’authenticité du grand jour.
                </p>
            </article>
        </section>
    );
}

export default HomeRootContainerA;
