import style from "../../StyleRootComponent.module.css";

import externalLinks from "../../../constants/externalLinks";
import useScrollToHash from "../../../hook/useScrollToHash";

import ImagesPortraitLifeStyleControllerData from "./ImagesPortraitLifeStyleControllerData";
import { Container4Images_Element } from "../../elements/container-image/container-4-Images/Container4Images.element";

import { avisClientPortraitLifeStyle_Data } from "./avisClientPortraitLifeSstyle.data";
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";

import PortraitLifeStyleRootComponentB from "./ComponentsPortraitLifeStyleRoot/PortraitLifeStyleRootComponentB/PortraitLifeStyleRootComponentB";

function PortraitLifeStyleRoot() {
    useScrollToHash(); /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`PortraitLifeStyleRoot ${style.ContainerRootRacine}`}>

            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Portrait Portrait LifeStyle : fusion de l'instant et de la lumière
                </h1>
            </header>

            <h2 className={style.TitleH2px2}>
                Un shooting pensé pour vous mettre à l’aise et révéler votre personnalité
            </h2>

            <p className={style.TextP4}>
                Sans renier la technique mais en la rendant invisible je vous propose avec mon œil photographique de 
                vivre un de ces instants où
                <span className={style.SpanBold}>
                    {" le naturel et la créativité se rejoignent. "}
                </span> 
                Comme photographe professionnel spécialisée dans les portraits je ne me limite pas aux 
                lumières douces et aux instants volés. Je mêle spontanéité et direction artistique, avec une approche 
                <span className={style.SpanBold}>
                    {" où le naturel rencontre une lumière travaillée, "}
                </span>
                même au flash en extérieur.
            </p>
                
            <p className={style.TextP4}>
                Contrairement aux portraits figés et ultra-posés, je cherche à
                <span className={style.SpanBold}>
                    {" capturer une dynamique réelle, "}
                </span> 
                une expression sincère, tout en soignant la lumière et la mise en scène. Ici,
                <span className={style.SpanBold}>
                    {" le flash devient un outil créatif : "}
                </span> 
                il sculpte le sujet, équilibre les contrastes, apporte du relief, même en pleine nature ou en 
                milieu urbain. 
            </p>
                
            <p className={style.TextP4}>
                En une phrase : 
                <span className={style.SpanBold}>
                    {" je cherche un équilibre entre authenticité et esthétisme ! "}
                </span> 
                Envie de tenter l’expérience ? 
            </p>
                
            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Choisissez le format qui vous convient le mieux :"}
                </span> 
            </p>

            {/* Container B : Cards */}
            <PortraitLifeStyleRootComponentB />
            
            <h2 className={style.TitleH2px2}>
                Portrait Solo : Se voir autrement
            </h2>

            <p className={style.TextP4}>
                Vous avez déjà regardé une photo de vous en vous disant
                <span className={style.SpanBold}>
                    {` "Ce n'est pas moi" `}
                </span> 
                ? Oubliez les clichés figés et les regards crispés. Ici, c’est un moment rien que pour vous, 
                une parenthèse où vous pouvez être pleinement vous-même. Je l’appelle
                <span className={style.SpanBold}>
                    {" le moment Feel Good "}
                </span> 
                , car sur le moment vous êtes bien et après n’en croyez pas vos yeux, vous vous aimez en photo !
            </p>

            <p className={style.TextP4}>
                Du coup on choisit ensemble un lieu qui vous parle : une ruelle, une plage, un coin de nature, en 
                intérieur chez vous. Je vous guide jusqu’à ce que vous oubliez l’appareil photo. Et là, un sourire 
                sincère, un regard pétillant... Voilà, c’est vous.   
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Pour qui ?"}
                </span> 
            </p>

            <p className={style.TextP4}>
                {"Cette séance est faite pour :"}
                <br />
                <br />
                ✔️ Ceux qui veulent
                <span className={style.SpanBold}>
                    {" se réconcilier avec leur image."}
                </span> <br />
                ✔️ Une nouvelle étape de vie, 
                <span className={style.SpanBold}>
                    {" une envie de se voir autrement."}
                </span> <br />
                ✔️ 
                <span className={style.SpanBold}>
                    {" Un souvenir unique, "}
                </span>
                juste pour soi. <br />
                ✔️ Mettre sa photo sur une
                <span className={style.SpanBold}>
                    {" appli de rencontre"}
                </span>
            </p>

            {/* Container 1 : Container image portrait solo */}
            <Container4Images_Element
                img1={ImagesPortraitLifeStyleControllerData[6].src}
                metaNameImg1={ImagesPortraitLifeStyleControllerData[6].alt}
                img2={ImagesPortraitLifeStyleControllerData[7].src}
                metaNameImg2={ImagesPortraitLifeStyleControllerData[7].alt}
                img3={ImagesPortraitLifeStyleControllerData[8].src}
                metaNameImg3={ImagesPortraitLifeStyleControllerData[8].alt}
                img4={ImagesPortraitLifeStyleControllerData[9].src}
                metaNameImg4={ImagesPortraitLifeStyleControllerData[9].alt}
            />
            
                            <h2 className={style.TitleH2px2}>
                Toi & Moi : Un portrait à deux, sans filtres et sans mode d’emploi ❤️ 
            </h2>

            <p className={style.TextP4}>
                Vous êtes ensemble tous les jours. Vous partagez des petits rituels, des blagues privées que personne 
                ne comprend, des débats inutiles sur qui a oublié de fermer le tube de dentifrice. Bref, vous êtes un 
                duo, avec votre dynamique, votre complicité, et peut-être même votre propre langage.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Et si on arrêtait le temps, juste un instant ?"}
                </span> 
            </p>

            <p className={style.TextP4}>
                Cette séance photo, ce n’est pas une mise en scène digne d’un film romantique à l’eau de rose. Pas de 
                "regardez-vous langoureusement sous le coucher du soleil" 
                {"(sauf si c'est votre truc, auquel cas on s’adapte et c’est sympa aussi !)"}.
                <span className={style.SpanBold}>
                    {" Ici, je capte votre connivence, "}
                </span>
                vos petits gestes, cette manière 
                instinctive dont vos mains se trouvent sans même y penser.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Je peux vous accompagner "}
                </span>
                pour flâner dans vos rues préférées, ou sur une plage, ou en pleine nature…ou 
                encore chez vous sur le canapé avec le chat en maraude, une playlist en fond 
                sonore pour vous rappeler votre univers. Et pourquoi pas essayer le 
                shooting en studio ? 
                <span className={style.SpanBold}>
                    {" 🌿 Au grand air : "}
                </span>
                une plage, une forêt, un champ perdu au milieu de nulle part… On bouge, on s’amuse, on oublie 
                qu’on est là pour une séance photo.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"🏡 Chez vous :"}
                </span> 
                {" "} un moment cosy, un canapé partagé, un fou rire à cause du chat qui s’incruste, une playlist en 
                fond sonore… bref, la vraie vie.
            </p>

            <p className={style.TextP4}>
                Pas besoin de savoir poser. D’ailleurs, oubliez même que je suis là. Vous discutez, vous vous taquinez, 
                vous êtes juste vous, et moi, je capture ça. 
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Pour qui ?"}
                </span> 
            </p>

            <p className={style.TextP4}>
                {"Cette séance est faite pour vous si :"}
                <br />
                ✔️ Vous voulez des photos qui vous ressemblent, sans artifices ni mode d’emploi. <br />
                ✔️ Vous cherchez un souvenir authentique de votre relation, que ce soit en couple, entre amis ou en duo 
                parent/enfant <br />
                ✔️ Vous avez envie d’un prétexte pour ralentir un peu, et juste profiter du moment. <br />
                ✔️ C’est votre histoire, et je la photographie avec mon cœur.
            </p>

            {/* Container 2 : Container image portrait couple */}
            <Container4Images_Element
                img1={ImagesPortraitLifeStyleControllerData[10].src}
                metaNameImg1={ImagesPortraitLifeStyleControllerData[10].alt}
                img2={ImagesPortraitLifeStyleControllerData[11].src}
                metaNameImg2={ImagesPortraitLifeStyleControllerData[11].alt}
                img3={ImagesPortraitLifeStyleControllerData[12].src}
                metaNameImg3={ImagesPortraitLifeStyleControllerData[12].alt}
                img4={ImagesPortraitLifeStyleControllerData[13].src}
                metaNameImg4={ImagesPortraitLifeStyleControllerData[13].alt}
            />
            
            <h2 className={style.TitleH2px2}>
                {"Portrait Famille – Amis (La Smala) : Des images qui traversent le temps"}   
            </h2>

            <p className={style.TextP4}>
                Certaines photos restent sur un téléphone. D’autres trouvent
                <span className={style.SpanBold}>
                    {" leur place dans un album, "}
                </span> 
                sur un mur du salon, ou dans un cadre posé sur une étagère. Ce sont celles qui comptent, celles 
                qu’on envoie à ses proches avec un sourire, celles que les enfants redécouvrent des années plus tard en 
                se rappelant {" "}
                <span className={style.SpanBold}>
                    {"“Tu te souviens de ce jour-là ?”."}
                </span> 
            </p>

            <p className={style.TextP4}>
                C’est exactement ce que je veux capturer : des souvenirs qui vivent. Pas des images figées, mais des 
                éclats de rire, des bras qui s’attrapent, des regards complices. Une vraie séance de famille, 
                où chacun reste lui-même, sans poser, sans chercher à être parfait. Juste être ensemble, et
                <span className={style.SpanBold}>
                    {" garder une trace de cet instant, "}
                </span> 
                pour aujourd’hui et pour plus tard. 
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Pour qui ?"}
                </span> 
            </p>

            <p className={style.TextP4}>
                {"Cette séance est faite pour vous si :"}
                <br />
                ✔️ Vous voulez des images qui ne dorment pas sur un disque dur, mais 
                <span className={style.SpanBold}>
                    {" s’impriment, s’accrochent, se partagent."}
                </span> <br />
                ✔️ Vous cherchez des souvenirs sincères, des photos pleines de vie 
                <span className={style.SpanBold}>
                    {" à glisser dans un album familial."}
                </span> <br />
                ✔️ Vous voulez que, dans 10 ans, ces images 
                <span className={style.SpanBold}>
                    {" racontent encore votre histoire."}
                </span>
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"📩 Et si on créait ensemble ces souvenirs ?"}
                </span> 
                {" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"Contactez-moi."}
                    </a>
                </span>
            </p>

            {/* Container 3 : Container image portrait famille */}
            <Container4Images_Element
                img1={ImagesPortraitLifeStyleControllerData[14].src}
                metaNameImg1={ImagesPortraitLifeStyleControllerData[14].alt}
                img2={ImagesPortraitLifeStyleControllerData[15].src}
                metaNameImg2={ImagesPortraitLifeStyleControllerData[15].alt}
                img3={ImagesPortraitLifeStyleControllerData[16].src}
                metaNameImg3={ImagesPortraitLifeStyleControllerData[16].alt}
                img4={ImagesPortraitLifeStyleControllerData[17].src}
                metaNameImg4={ImagesPortraitLifeStyleControllerData[17].alt}
            />
            
            <h2 className={style.TitleH2px2}>
                1er Cris (Nouveaux-nés) : Une séance tout en délicatesse, à son rythme
            </h2>

            <p className={style.TextP4}>
                Un nouveau-né vit à
                <span className={style.SpanBold}>
                    {" son propre tempo : "}
                </span>
                il s’endort, s’étire, cherche la chaleur de vos bras… Ici, pas de précipitation. Je prends le 
                temps, entre pauses câlins et moments de calme, pour capturer des images naturelles et authentiques.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"🌿 Un environnement apaisant : "}
                </span>
                à domicile, pour une atmosphère intime et rassurante, ou en studio dans un décor spécialement 
                conçu pour le bien être de votre boutchou. <br />
                <span className={style.SpanBold}>
                    {"🕰️ Une séance adaptée à bébé : "}
                </span>
                je m’adapte à ses besoins, à son rythme, sans jamais le forcer. <br />
                <span className={style.SpanBold}>
                    {"🤱 Avec ou sans les parents : "}
                </span>
                des portraits de bébé seul, dans vos bras, avec ses frères et sœurs… chaque détail compte. <br />
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Pour qui ?"}
                </span> 
            </p>

            <p className={style.TextP4}>
                {"Cette séance est faite pour vous si :"}
                <br />
                <span className={style.SpanLucide}>
                    ✔️ Vous souhaitez des souvenirs tendres et naturels.
                </span>
                <span className={style.SpanLucide}>
                    ✔️ Vous voulez un souvenir dans les 15 premiers jours de vie.
                </span>
            </p>
            
                            <h2 className={style.TitleH2px2}>
                9 Mois (Grossesse) : Immortaliser cette étape unique 
            </h2>

            <p className={style.TextP4}>
                La grossesse est une période intense, faite de changements et d’émotions.
                <span className={style.SpanBold}>
                    {" Votre corps évolue, "}
                </span> 
                votre quotidien aussi, et ces neuf mois passent finalement bien plus vite qu’on ne l’imagine. 
                Cette séance photo est là pour
                <span className={style.SpanBold}>
                    {" capturer cette transition, "}
                </span> 
                sans artifices, avec authenticité et élégance.
            </p>

            <p className={style.TextP4}>
                Chaque femme vit sa grossesse différemment, et chaque séance est pensée en fonction de vos envies. 
                Que vous souhaitiez un rendu naturel en extérieur, une ambiance intime à domicile ou un
                <span className={style.SpanBold}>
                    {" shooting plus artistique en studio. "}
                </span> 
                L’objectif est simple : mettre en lumière ce moment si particulier.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"🏞️ En extérieur :"}
                </span> 
                {" "} pour une atmosphère naturelle et lumineuse. <br />
                <span className={style.SpanBold}>
                    {"🏡 À domicile :"}
                </span> 
                {" "} pour des images cocooning et chaleureuses. <br />
                <span className={style.SpanBold}>
                    {"📸 En studio :"}
                </span> 
                {" "} pour un rendu épuré et intemporel. <br />
            </p>

            <p className={style.TextP4}>
                Seule ou avec votre partenaire, cette séance est avant tout un moment pour vous, où vous prenez le 
                temps de vous arrêter et d’apprécier cette étape avant l’arrivée de bébé.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBoldSpace}>
                    {"Quand faire votre séance ?"}
                </span>
            </p>

            <p className={style.TextP4}>
                L’idéal est de réaliser la séance entre le 7ᵉ et le 8ᵉ mois, lorsque le ventre est bien arrondi tout 
                en gardant une bonne mobilité.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Pour qui ?"}
                </span> 
            </p>

            <p className={style.TextP4}>
                {"Cette séance est faite pour :"}
                <br />
                ✔️ Celles qui veulent un souvenir 
                <span className={style.SpanBold}>
                    {" sincère et naturel"}
                </span> de leur grossesse. <br />
                ✔️ Celles qui souhaitent un moment pour elles, pour 
                <span className={style.SpanBold}>
                    {" se reconnecter à leur corps."}
                </span> <br />
                ✔️ Celles qui veulent un 
                <span className={style.SpanBold}>
                    {" souvenir puissant "}
                </span> de leur grossesse. <br />
                ✔️ Se sentir belle et 
                <span className={style.SpanBold}>
                    {" rayonner avant l’arrivée de bébé."}
                </span>
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"📩 Envie de figer ces instants avant l’arrivée de bébé ?"}
                </span> 
                {" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"Contactez-moi pour réserver votre séance."}
                    </a>
                </span>
            </p>
        
            <h2 className={style.TitleH2px2}>
                Passions Lives : Mettez en scène ce qui vous passionne 
            </h2>

            <p className={style.TextP4}>
                Que ce soit un sport, un art, un animal ou un univers qui vous inspire, 
                <span className={style.SpanBold}>
                    {" vos passions méritent d’être mises en lumière. "}
                </span>
                Que vous soyez en pleine action, plongé dans un univers qui vous fascine, ou dans 
                un moment plus posé, cette séance est pensée pour capturer ce qui vous anime, avec un rendu qui vous 
                ressemble.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBoldSpace}>
                    {"📷 Un shooting sur-mesure, fidèle à votre univers"}
                </span> 
            </p>

            <p className={style.TextP4}>
                Loin des portraits classiques, cette séance s’adapte à votre style et à ce qui vous motive :
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"🏃 En action :"}
                </span> 
                {" "} sur le terrain, en répétition, en plein effort ou en pleine concentration. <br />
                <span className={style.SpanBold}>
                    {"🎭 Inspiré d’un univers :"}
                </span> 
                {" "} ambiance cinéma, époque, références à une série ou un film culte, reconstitution historique. <br />
                <span className={style.SpanBold}>
                    {"🐎 Avec vos compagnons :"}
                </span> 
                {" "} chevaux, chiens, instruments, accessoires… tout ce qui fait partie de votre passion. <br />
            </p>

            <p className={style.TextP4}>
                Que vous souhaitiez un rendu brut et réaliste ou une mise en scène travaillée, tout est pensé pour 
                refléter votre vision.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Pour qui ?"}
                </span> 
            </p>

            <p className={style.TextP4}>
                {"Cette séance est faite pour vous si :"}
                <br />
                ✔️ Vous voulez des photos dynamiques et naturelles, 
                <span className={style.SpanBold}>
                    {" en plein cœur de votre passion."}
                </span> <br />
                ✔️ Vous souhaitez 
                <span className={style.SpanBold}>
                    {" recréer une ambiance, "}
                </span> une époque, ou un univers qui vous inspire. <br />
                ✔️ Vous êtes sportif, artiste, passionné d’histoire, de cinéma ou de culture geek.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"📩 Envie de donner vie à votre passion en images ?"}
                </span> 
                {" "}
                <span className={style.SpanLink}>
                    <a href={externalLinks.emailAnne} target="_blank" rel="noopener noreferrer">
                        {"Contactez-moi pour une séance sur-mesure."}
                    </a>
                </span>
            </p>

            {/* Container 4 : Container image passions */}
            <Container4Images_Element
                img1={ImagesPortraitLifeStyleControllerData[26].src}
                metaNameImg1={ImagesPortraitLifeStyleControllerData[26].alt}
                img2={ImagesPortraitLifeStyleControllerData[27].src}
                metaNameImg2={ImagesPortraitLifeStyleControllerData[27].alt}
                img3={ImagesPortraitLifeStyleControllerData[28].src}
                metaNameImg3={ImagesPortraitLifeStyleControllerData[28].alt}
                img4={ImagesPortraitLifeStyleControllerData[29].src}
                metaNameImg4={ImagesPortraitLifeStyleControllerData[29].alt}
            />

            {/* Container 5 : Avis clients */}
            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientPortraitLifeStyle_Data} />
        </section>
    );
}

export default PortraitLifeStyleRoot;
