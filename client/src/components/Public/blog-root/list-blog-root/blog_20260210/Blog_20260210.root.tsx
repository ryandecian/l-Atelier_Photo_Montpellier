/* Import des modules CSS */
import style from "../../../../StyleRootComponent.module.css";
import css from "./blog_20260210.module.css";

/* Import des Components de Data */
import { imagesBlog_20260210_img_data } from "./imageBlog_20260210.img.data";

/* Import des composants d'Elements */
import { PremiumCardImgModal_Element } from "../../../../elements/premium-card-img-modal/PremiumCardImgModal.element";

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

            <h3 className={style.TitleLNH3}>
                La joie attendue… et déjà présente
            </h3>

            <p className={style.TextP4}>
                On parle souvent de la joie comme d’un moment à venir. Mais ici, elle est déjà là : un sourire sans 
                raison, une légèreté soudaine. C’est une joie en devenir, solide et intime.
            </p>

            <h2 className={style.TitleH2}>
                Est-ce que j’ai vraiment besoin de photos des préparatifs ?
            </h2>

            <p className={style.TextP4}>
                Les photos des préparatifs de mariage sont souvent celles que l’on hésite le plus à inclure, alors 
                qu’elles sont aussi celles qui donnent le plus de profondeur et de cohérence à l’ensemble du {` `}
                <strong>reportage photo</strong>. La vraie question est : souhaitez-vous que votre reportage commence 
                au début de l’histoire, ou en cours de route ? Les préparatifs servent à poser une base, une atmosphère. 
                Quelques images suffisent à donner du sens à tout ce qui suivra : la cérémonie, la réception et les 
                échanges avec les invités.
            </p>

            <h2 className={style.TitleH2}>
                La FAQ des préparatifs : Durée, Lieu, Stress supplémentaire
            </h2>

            <h3 className={style.TitleLNH3}>
                Combien de temps faut-il pour photographier les préparatifs ?
            </h3>

            <p className={style.TextLiP4}>
                Il n’est pas nécessaire d’y consacrer des heures. Dans la majorité des mariages que je photographie à 
                Montpellier, dans l’Hérault et ailleurs  le temps à compter est d’environ :
            </p>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>30 à 45 minutes</strong> pour capter l’essentiel.
                </li>
                <li className={style.TextLiP4}>
                    <strong>1 heure</strong> pour un vrai confort, sans alourdir la journée.
                </li>
            </ul>

            <p className={style.TextP4}>
                L’objectif est de saisir l’ambiance, les transitions et les moments calmes avant l’intensité.
            </p>

            <h3 className={style.TitleLNH3}>
                Quels endroits choisir pour les préparatifs ?
            </h3>

            <p className={style.TextP4}>
                Il n’existe pas de lieu parfait, mais certains choix facilitent le <strong>shooting</strong> : une pièce 
                avec de la <strong>lumière naturelle</strong> et un espace relativement calme. Que ce soit une maison de 
                famille ou un hôtel, ce qui compte c'est que le cadre soit "habitable" pour vous.
            </p>

            <h2 className={style.TitleH2}>
                Les préparatifs sont-ils stressants si je n’aime pas être photographié ?
            </h2>

            <p className={style.TextP4}>
                C’est une inquiétude légitime. Mais les préparatifs ne sont pas une séance photo posée. Mon approche est 
                simple : être présente sans envahir, observer plus que diriger. La plupart des couples me disent après 
                coup que ce moment a été plus apaisant qu’ils ne l’imaginaient grâce à cette <strong>bienveillance</strong>.
            </p>

            <h2 className={style.TitleH2}>
                De l’écran au papier : prolonger l’émotion des préparatifs
            </h2>

            <PremiumCardImgModal_Element
                src={imagesBlog_20260210_img_data[0].src}
                alt={imagesBlog_20260210_img_data[0].alt}
                className={css.img}
            />
        </section>
    )
}

export default Blog_20260210_Root
