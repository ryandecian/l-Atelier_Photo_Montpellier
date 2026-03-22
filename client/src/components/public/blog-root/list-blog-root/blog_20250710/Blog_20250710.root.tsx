/* Import des modules CSS */
import style from "../../../../StyleRootComponent.module.css";

/* Import des Components */
import { PortraitLifeStyleA_Component } from "../../../portrait-lifestyle/components/PortraitLifeStyleA.component";

/* Import des Components de Data */
import { imagesBlog_20250710_img_Data } from "./imagesBlog_20250710.img.data";

/* Import des composants d'Elements */
import { PremiumCardImgModal_Element } from "../../../../elements/premium-card-img-modal/PremiumCardImgModal.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../../../router/router";

function Blog_20250710_Root() {
    return (
        <section className={`Blog_20250710_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Photographie de Portrait LifeStyle : découvrez une version valorisante de vous-même`}
                </h1>
            </header>

            <p className={style.TextLiP4}>
                Découvrez pourquoi un portrait lifestyle soigné peut transformer votre image, renforcer votre estime de 
                vous-même et offrir des souvenirs inoubliables à partager avec votre famille ou sur vos réseaux sociaux.
            </p>

            <h2 className={style.TitleH2}>
                {`Pourquoi réaliser un portrait lifestyle ?`}
            </h2>

            <p className={style.TextP4}>
                Dans un monde où l’image occupe une place centrale, un portrait lifestyle va bien au-delà d’une simple photo : 
                il raconte une histoire, capture une émotion et révèle votre personnalité dans un cadre naturel qui vous ressemble.
            </p>

            <p className={style.TextP4}>
                Un portrait lifestyle, c’est avant tout une expérience. <br />
                En tant que photographe portraitiste à Montpellier, j’observe chaque jour à quel point ces séances permettent 
                à mes clients de se découvrir sous un jour nouveau et de se sentir fiers d’eux-mêmes.
            </p>

            <h2 className={style.TitleH2}>
                {`Comment un portrait lifestyle nourrit l’estime de soi`}
            </h2>

            <div className={style.ContainerFloat}>
                <PremiumCardImgModal_Element
                    src={imagesBlog_20250710_img_Data[0].src}
                    alt={imagesBlog_20250710_img_Data[0].alt}
                    className={style.FloatLeftImg_Po}
                />

                <p className={style.TextP4}>
                    Une fois la glace rompue, la séance se transforme en moment complice et ludique. <br />
                    C’est souvent à ce moment précis que les plus belles photos naissent : <br />
                    {`📸 des sourires sincères, des regards confiants, un naturel retrouvé.`}
                </p>

                <p className={style.TextLiP4}>
                    Un portrait lifestyle bien réalisé permet de : <br />
                </p>
            
                <ul className={style.ContainerUl}>
                    <li className={style.TextLiP4}>
                        Vous voir sous un angle valorisant que vous ne soupçonniez pas
                    </li>
                    <li className={style.TextLiP4}>
                        Renforcer votre confiance en vous grâce à des images où vous vous trouvez beau/belle
                    </li>
                    <li className={style.TextLiP4}>
                        Partager des photos authentiques et lumineuses avec vos proches
                    </li>
                    <li className={style.TextLiP4}>
                        Communiquer une image engageante et positive sur vos réseaux sociaux
                    </li>
                </ul>
            </div>

            {/* <br /> */}

            <h2 className={style.TitleH2}>
                {`Les ingrédients d’un portrait lifestyle réussi`}
            </h2>

            <div className={style.ContainerFloat}>
                <PremiumCardImgModal_Element
                    src={imagesBlog_20250710_img_Data[1].src}
                    alt={imagesBlog_20250710_img_Data[1].alt}
                    className={style.FloatRightImg_Pa}
                />

                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {`1️⃣ Spontanéité`}
                    </span>
                </p>
                <p className={style.TextP4}>
                    L’objectif est de capturer des instants vrais, loin des poses figées.
                </p>

                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {`2️⃣ Confort`}
                    </span>
                </p>
                <p className={style.TextP4}>
                    Choisir un décor qui vous met à l’aise : un coin de nature, une ruelle colorée, votre lieu préféré... 
                    Le cadre est essentiel pour que vous vous sentiez bien.
                </p>

                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {`3️⃣ Émotion`}
                    </span>
                </p>
                <p className={style.TextP4}>
                    Un portrait lifestyle réussi, c’est un portrait qui transmet quelque chose. Joie, tendresse, fierté... 
                    Ces émotions rendent la photo unique.
                </p>

                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {`4️⃣ Accompagnement bienveillant`}
                    </span>
                </p>
                <p className={style.TextP4}>
                    Un photographe professionnel sait vous guider pas à pas pour vous aider à relâcher la pression et à profiter 
                    pleinement de l’expérience.
                </p>
            </div>

            <h2 className={style.TitleH2}>
                {`Portrait lifestyle VS photo posée : quelles différences ?`}
            </h2>

            <div className={style.ContainerFloat}>
                <PremiumCardImgModal_Element
                    src={imagesBlog_20250710_img_Data[2].src}
                    alt={imagesBlog_20250710_img_Data[2].alt}
                    className={style.FloatLeftImg_Pa}
                />
            
                <p className={style.TextLiP4}>
                    Une photo classique peut être belle, mais elle manque souvent de vie et de naturel. <br />
                    👉 Un portrait lifestyle, c’est :
                </p>
            
                <ul className={style.ContainerUl}>
                    <li className={style.TextLiP4}>
                        Un moment partagé qui crée un souvenir
                    </li>
                    <li className={style.TextLiP4}>
                        Une image qui raconte votre histoire
                    </li>
                    <li className={style.TextLiP4}>
                        Un résultat où vous êtes vous-même, sublimé sans artifice
                    </li>
                    <li className={style.TextLiP4}>
                        Des photos intemporelles que vous aurez envie de transmettre à vos enfants et petits-enfants
                    </li>
                </ul>
            </div>

            <h2 className={style.TitleH2}>
                {`Où réaliser un portrait lifestyle à Montpellier ?`}
            </h2>

            <p className={style.TextP4}>
                🌿 Les champs de coquelicots au printemps <br />
                🌳 Les parcs de Montpellier – Nîmes – Béziers ou ailleurs <br />
                🏖️ Les plages en fin de journée pour une lumière douce et dorée <br />
                🏙️ Les ruelles pittoresques de Montpellier pour une ambiance urbaine et élégante
            </p>

            <h2 className={style.TitleH2}>
                {`Pourquoi faire appel à un photographe portrait pro pour un shooting lifestyle ?`}
            </h2>

            <p className={style.TextLiP4}>
                Un photographe spécialisé saura :
            </p>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Créer un climat de confiance pour des photos naturelles
                </li>
                <li className={style.TextLiP4}>
                    Choisir le lieu, la lumière et le timing parfaits
                </li>
                <li className={style.TextLiP4}>
                    {`Vous accompagner pour vous sentir à l’aise, même si vous pensez « ne pas être photogénique »`}
                </li>
                <li className={style.TextLiP4}>
                    Valoriser votre personnalité et révéler le meilleur de vous-même
                </li>
            </ul>

            <p className={style.TextP4}>
                En tant que photographe portrait lifestyle à Montpellier, j’accompagne régulièrement des familles, des 
                couples et des personnes qui souhaitent offrir ou s’offrir un souvenir unique, beau et authentique.
            </p>

            <h2 className={style.TitleH2}>
                {`Offrez-vous une séance photo qui révèle votre beauté naturelle`}
            </h2>

            <p className={style.TextP4}>
                👉 Un portrait lifestyle est plus qu’une simple séance photo : c’est une parenthèse de plaisir, un booster 
                de confiance et un moyen unique de célébrer qui vous êtes.
            </p>

            <p className={style.TextP4}>
                🎯 Si vous êtes à Montpellier ou dans l’Hérault et que vous souhaitez vivre cette expérience : <br />
                Je vous propose des séances Portrait Lifestyle sur-mesure, adaptées à vos envies et à votre personnalité.
            </p>

            <p className={style.TextP4}>
                👉 {` `}
                <span className={style.SpanLink}>
                    <Link to={`${router[3].path}`}>
                        {` Contactez-moi dès aujourd’hui pour réserver votre séance Portrait Lifestyle à Montpellier !`}
                    </Link>
                </span>
            </p>

            <p id="tarif" className={style.TextP4}>
                👉 {` `}
                <span className={style.SpanLink}>
                    <Link to={`${router[4].path}/${router[4].children?.[3].path}#tarif`}>
                        {` Découvrez mes offres Portrait Lifestyle et Portrait Feel Good.`}
                    </Link>
                </span>
            </p>

            <PortraitLifeStyleA_Component />
        </section>
    )
}

export default Blog_20250710_Root;
