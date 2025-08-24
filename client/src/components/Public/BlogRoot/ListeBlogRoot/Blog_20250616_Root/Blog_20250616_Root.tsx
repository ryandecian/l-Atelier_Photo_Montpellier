import style from "../../../../StyleRootComponent.module.css";
import ListDataRouter from "../../../../../router/router";
import { Link } from "react-router-dom";

import Container4ImagesPortraitRoot from "../../../../ContainerImageRoot/Container4ImagesPortraitRoot/Container4ImagesPortraitRoot";
import ImagesBlog_20250616_RootControllerData from "./ImagesBlog_20250616_RootControllerData";

function Blog_20250616_Root() {    
    return (
        <section className={`Blog_20250616_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Photo professionnelle pour CV : comment capter l’attention des recruteurs à Montpellier`}
                </h1>
            </header>

            <p className={style.TextLiP4}>
                Découvrez pourquoi un portrait professionnel soigné peut faire toute la différence sur votre CV et 
                renforcer l’impact de votre candidature auprès des recruteurs.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

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

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Comment un portrait pro influence la perception des recruteurs ?`}
            </h2>

            <p className={style.TextLiP4}>
                Les recruteurs passent en moyenne moins de 30 secondes sur un CV. <br />
                Une 
                <span className={style.SpanBold}>
                    {` photo professionnelle bien réalisée `}
                </span>
                permet de :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Humaniser le CV en mettant un visage sur un nom
                </li>
                <li className={style.TextLiP4}>
                    Instaurer un climat de confiance dès le premier regard
                </li>
                <li className={style.TextLiP4}>
                    Montrer que vous prenez votre démarche de recherche d’emploi au sérieux
                </li>
                <li className={style.TextLiP4}>
                    Valoriser votre personnalité et votre potentiel
                </li>
            </ul>

            <p className={style.TextP4}>
                Le cerveau traite une image en moins de 7 secondes : soigner cette image est donc un véritable levier d’impact.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Les qualités essentielles d’un portrait professionnel pour CV`}
            </h2>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`1️⃣ Confiance en soi`}
                </span>
            </p>
            <p className={style.TextP4}>
                Un portrait où vous êtes bien préparé, bien habillé, et où vous dégagez une posture confiante envoie 
                un message clair de professionnalisme et de dynamisme.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`2️⃣ Authenticité`}
                </span>
            </p>
            <p className={style.TextP4}>
                Un portrait naturel, sans retouche excessive, inspirera davantage confiance qu’une photo trop figée 
                ou artificielle.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`3️⃣ Approche professionnelle`}
                </span>
            </p>
            <p className={style.TextP4}>
                Lumière maîtrisée, fond adapté, cadrage précis : tous ces détails renforcent l’image de sérieux et 
                de rigueur que vous souhaitez projeter.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`4️⃣ Sentiment de proximité`}
                </span>
            </p>
            <p className={style.TextP4}>
                Une bonne photo professionnelle crée une connexion immédiate avec le recruteur, qui perçoit un profil 
                engageant et accessible.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Photo professionnelle VS photo amateur : quelles différences pour un CV ?`}
            </h2>

            <p className={style.TextLiP4}>
                De nombreux candidats utilisent encore des photos informelles (soirée, événement, selfie). <br />
                Or, ces images ne renvoient pas le même degré de professionnalisme. <br />
                Une 
                <span className={style.SpanBold}>
                    {` photo prise par un photographe portrait pro `}
                </span>
                vous garantit :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Un cadrage et une lumière optimisés
                </li>
                <li className={style.TextLiP4}>
                    Une posture valorisante
                </li>
                <li className={style.TextLiP4}>
                    Un style en accord avec votre secteur professionnel
                </li>
                <li className={style.TextLiP4}>
                    Une cohérence avec l’image que vous souhaitez transmettre
                </li>
            </ul>

            <p className={style.TextP4}>
                À Montpellier, dans un marché de l’emploi dynamique et concurrentiel, cette attention à l’image peut 
                clairement faire la différence.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Quel type de portrait professionnel choisir pour son CV ?`}
            </h2>

            <Container4ImagesPortraitRoot
                img1={ImagesBlog_20250616_RootControllerData[0].src}
                MetaNameImg1={ImagesBlog_20250616_RootControllerData[0].alt}
                img2={ImagesBlog_20250616_RootControllerData[1].src}
                MetaNameImg2={ImagesBlog_20250616_RootControllerData[1].alt}
                img3={ImagesBlog_20250616_RootControllerData[2].src}
                MetaNameImg3={ImagesBlog_20250616_RootControllerData[2].alt}
                img4={ImagesBlog_20250616_RootControllerData[3].src}
                MetaNameImg4={ImagesBlog_20250616_RootControllerData[3].alt}
            />
            
            <h3 className={style.TitleNH3}>
                {`Portrait en studio (fond neutre)`}
            </h3>
            <p className={style.TextP4}>
                Idéal pour les secteurs formels (finance, droit, RH, administration). Renvoie un message de sérieux et 
                de rigueur.
            </p>
            
            <h3 className={style.TitleNH3}>
                {`Portrait en extérieur (cadre urbain ou naturel)`}
            </h3>
            <p className={style.TextP4}>
                Convient aux secteurs créatifs, startups, professions indépendantes. <br />
                Communique un côté accessible et moderne.
            </p>
            
            <h3 className={style.TitleNH3}>
                {`Portrait lifestyle`}
            </h3>
            <p className={style.TextP4}>
                Pour les profils où la personnalité joue un rôle clé : entrepreneurs, artistes, professions relationnelles. <br />
                Permet de révéler une facette plus humaine et engageante.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Pourquoi faire appel à un photographe portrait pro à Montpellier ?`}
            </h2>

            <p className={style.TextLiP4}>
                Un 
                <span className={style.SpanBold}>
                    {` photographe professionnel spécialisé en portrait `}
                </span>
                saura : 
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Vous guider pour adopter la bonne posture
                </li>
                <li className={style.TextLiP4}>
                    Créer une atmosphère détendue pour obtenir un sourire naturel
                </li>
                <li className={style.TextLiP4}>
                    Adapter le style du portrait à votre secteur d’activité
                </li>
                <li className={style.TextLiP4}>
                    Garantir une cohérence entre votre image et le message que vous voulez transmettre
                </li>
            </ul>

            <p className={style.TextP4}>
                En tant que 
                <span className={style.SpanBold}>
                    {` photographe portrait professionnel à Montpellier, `}
                </span>
                 j’accompagne régulièrement des cadres, étudiants, indépendants ou personnes en reconversion souhaitant 
                 soigner leur image pour optimiser leur CV.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Conclusion : boostez votre CV avec un portrait professionnel`}
            </h2>

            <p className={style.TextP4}>
                Une
                <span className={style.SpanBold}>
                    {` photo professionnelle bien exécutée `}
                </span>
                est bien plus qu’un simple portrait. <br />
                C’est un outil stratégique pour capter l’attention des recruteurs, renforcer l’impact de votre candidature 
                et créer une première impression mémorable.
            </p>
            
            <p className={style.TextP4}>
                Si vous êtes à Montpellier ou dans l’Hérault et que vous souhaitez optimiser votre CV avec un portrait de qualité :
            </p>

            <p className={style.TextP4}>
                Je vous propose des séances Portrait Pro sur-mesure, en studio ou en extérieur, adaptées à votre secteur 
                et à votre personnalité.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanLink}>
                    <Link to={ListDataRouter[3].path}>
                        {`Contactez-moi dès aujourd’hui pour réserver votre séance Portrait CV à Montpellier !`}
                    </Link>
                </span>
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanLink}>
                    <Link to={`${ListDataRouter[11].path}#PortraitCorporateRoot`}>
                        {`Découvrez mes offres Portrait Professionnel et Portrait Corporate.`}
                    </Link>
                </span>
            </p>
        </section>
    );
}

export default Blog_20250616_Root;
