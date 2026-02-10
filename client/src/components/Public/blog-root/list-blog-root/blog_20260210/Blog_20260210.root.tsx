/* Import des modules CSS */
import style from "../../../../StyleRootComponent.module.css";
import css from "./blog_20260210.module.css";

/* Import des Components de Data */
import { imagesBlog_20260210_img_data } from "./imageBlog_20260210.img.data";

/* Import des composants d'Elements */
import { PremiumCardImgModal_Element } from "../../../../elements/premium-card-img-modal/PremiumCardImgModal.element";
import { Container4Images_Element } from "../../../../elements/container-image/container-4-Images/Container4Images.element";
import { Container4ImagesPaysage_Element } from "../../../../elements/container-image/container-4-Images-paysage/Container4ImagesPaysage.element";

/* Import des composants Router */
import externalLinks from "../../../../../constants/externalLinks";

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

            <Container4ImagesPaysage_Element 
                img1={imagesBlog_20260210_img_data[1].src}
                img2={imagesBlog_20260210_img_data[2].src}
                img3={imagesBlog_20260210_img_data[3].src}
                img4={imagesBlog_20260210_img_data[4].src}
                metaNameImg1={imagesBlog_20260210_img_data[1].alt}
                metaNameImg2={imagesBlog_20260210_img_data[2].alt}
                metaNameImg3={imagesBlog_20260210_img_data[3].alt}
                metaNameImg4={imagesBlog_20260210_img_data[4].alt}
            />

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

            <Container4Images_Element 
                img1={imagesBlog_20260210_img_data[5].src}
                img2={imagesBlog_20260210_img_data[6].src}
                img3={imagesBlog_20260210_img_data[7].src}
                img4={imagesBlog_20260210_img_data[8].src}
                metaNameImg1={imagesBlog_20260210_img_data[5].alt}
                metaNameImg2={imagesBlog_20260210_img_data[6].alt}
                metaNameImg3={imagesBlog_20260210_img_data[7].alt}
                metaNameImg4={imagesBlog_20260210_img_data[8].alt}
            />

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

            <p className={style.TextP4}>
                À l’ère du tout-numérique, la finalité d’un <strong>reportage de mariage</strong> est de vivre entre vos 
                mains. Les photos des préparatifs prennent une tout autre dimension lorsqu'elles sont.
            </p>

            <p className={style.TextP4}>
                <strong>Construire votre patrimoine familial.</strong>
            </p>

            <p className={style.TextP4}>
                Imaginez-vous, dans dix ou vingt ans, ouvrant votre <strong>album de mariage</strong> avec vos enfants 
                ou vos proches. En tournant les premières pages, vous ne tombez pas directement sur la cérémonie. 
                Vous découvrez d'abord ces moments de calme, les mains de votre maman qui ferment votre robe, l'émotion 
                de votre père dans le salon familial à <strong>Montpellier</strong>... Ces images posent le contexte. 
                Elles sont le "Il était une fois" de votre livre, le patrimoine que vous transmettrez.
            </p>

            <h3 className={style.TitleLNH3}>
                Un objet à votre image, en toute liberté
            </h3>

            <p className={style.TextP4}>
                Parce que ma démarche à l'Atelier Photo Montpellier est de vous accompagner avec justesse, je crois que 
                le souvenir doit être un plaisir accessible. Pour ceux qui souhaitent maîtriser leur budget, des 
                solutions éthiques existent.
            </p>

            <p className={style.TextP4}>
                J'aime recommander <strong>Flexi Livre</strong>, car leur philosophie rejoint la mienne : le respect des 
                circuits courts. Choisir un <strong>album fabriqué en France</strong>, c'est s'assurer que vos souvenirs 
                seront portés par des <strong>papiers et des encres de haute qualité</strong>, garantissant que l'éclat 
                de vos photos ne s'altérera pas. Vous pouvez être acteurs de votre histoire : une fois vos {` `}
                <strong>fichiers haute définition</strong> livrés, cette liberté vous permet de <strong>comprimer les coûts</strong> 
                {` `} en composant vous-même votre mise en page sur leur interface. Que vous choisissiez un {` `}
                <strong>livre d'art</strong> réalisé auprès d’un acteur reconnu dans le monde des albums premiums pour 
                les mariage ou un album conçu par vos soins, l'essentiel est de transformer ces instants en un {` `}
                <strong>objet tangible</strong>.
            </p>

            <p className={style.TextP4}>
                <strong>EN DÉFINITIVE</strong>
            </p>

            <p className={style.TextP4}>
                Un reportage de mariage se lit comme une histoire. Les préparatifs ne sont pas un bonus, ils sont un 
                temps fondateur. Ils permettent de passer de l’intime au collectif, du calme à l’effervescence, sans 
                rupture.
            </p>

            <p className={style.TextP4}>
                <strong>Prêts à immortaliser chaque émotion de votre grand jour ?</strong>
            </p>

            <p className={style.TextP4}>
                Les dates de la <strong>saison des mariages dans l'Hérault</strong> se remplissent vite. Pour un 
                reportage qui capture l'essence de votre union avec naturel, je vous propose un premier contact selon 
                ce qui est le plus confortable pour vous :
            </p>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    À mon {` `}
                        <a className={style.Link} href={externalLinks.mapLAPM} target="_blank" rel="noopener noreferrer">
                            studio de photographie
                        </a>
                    {` `} à Montpellier, pour découvrir mon univers.
                </li>
                <li className={style.TextLiP4}>
                    En appel vidéo {` `}
                        <a className={style.Link} href={externalLinks.whatsappAnne} target="_blank" rel="noopener noreferrer">
                            (WhatsApp, Meet)
                        </a>
                    , où que vous soyez en France.
                </li>
                <li className={style.TextLiP4}>
                    Dans le lieu de votre choix autour de Montpellier.
                </li>
            </ul>
        </section>
    )
}

export default Blog_20260210_Root
