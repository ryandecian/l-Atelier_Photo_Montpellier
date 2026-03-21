/* Import des modules CSS */
import style from "../../../../StyleRootComponent.module.css";

/* Import des Components de Data */
import { imagesBlog_20250917_img_Data } from "./imagesBlog_20250917.img.data";

/* Import des composants d'Elements */
import { PremiumCardImgModal_Element } from "../../../../elements/premium-card-img-modal/PremiumCardImgModal.element";

function Blog_20250917_Root() {
    return (
        <section className={`Blog_20250917_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Pourquoi investir dans la vidéo et la photo pour votre entreprise ?`}
                </h1>
            </header>

            <h2 className={style.TitleH2}>
                {`La photo et la vidéo événementielle : bien plus qu’un souvenir, un levier d’impact`}
            </h2>

            <p className={style.TextP4}>
                C’était le grand soir.
            </p>

            <p className={style.TextP4}>
                Des mois de coordination, de feuilles Excel, de visios, d’ajustements de dernière minute. <br />
                Un lancement de produit pensé comme une déclaration d’ambition.
            </p>

            <p className={style.TextP4}>
                Le lieu ? Choisi avec soin, décidé en fonction du budget, certes, mais aussi un piège technique. Trop 
                sombre dans les recoins, trop lumineux sur scène. Les spots LED créaient des ombres dures, les variations 
                d’intensité mettaient en péril toute captation cohérente.
            </p>

            <p className={style.TextP4}>
                Et le son… un écho subtil dans les angles, des micros récalcitrants, et cette nécessité d’entendre 
                chaque mot sans faillir, surtout quand il s’agit de porter une vision d’entreprise ou de fédérer les 
                équipes.
            </p>

            <p className={style.TextP4}>
                Un moment rare, qu’on aurait voulu graver avec clarté. Pas juste pour s’en souvenir.
            </p>

            <p className={style.TextP4}>
                Mais pour le raconter, le revivre, et le faire rayonner.
            </p>

            <h2 className={style.TitleH2}>
                {`L’image, cet outil stratégique en entreprise qu’on sous-estime trop souvent`}
            </h2>

            <div className={style.ContainerFloat}>
                <PremiumCardImgModal_Element
                    src={imagesBlog_20250917_img_Data[0].src}
                    alt={imagesBlog_20250917_img_Data[0].alt}
                    className={style.FloatLeftImg_Po}
                />

                <p className={style.TextP4}>
                    Il y a ceux qui se disent : “On fera quelques photos avec nos téléphones.”
                </p>

                <p className={style.TextP4}>
                    Et il y a ceux qui comprennent que la communication visuelle d’entreprise n’est pas une option, mais 
                    une extension du discours et de l’image de marque.
                </p>

                <p className={style.TextP4}>
                    Dans un monde saturé de contenu, ce qui capte l’attention n’est pas l’information brute, mais 
                    l’émotion visuelle.
                </p>

                <p className={style.TextP4}>
                    Ce n’est pas ce que vous dites qui vous rend mémorable. <br />
                    C’est la manière dont on vous voit.
                </p>

                <p className={style.TextP4}>
                    À Montpellier comme ailleurs, faire appel à un photographe corporate ou à un vidéaste professionnel 
                    devient un investissement stratégique.
                </p>
            </div>
            
            <h2 className={style.TitleH2}>
                {`La vidéo à Montpellier ou ailleurs : un puissant levier d’image et de confiance`}
            </h2>

            <p className={style.TextP4}>
                Un professionnel de l’image, qu’il soit photographe ou vidéaste, ne se contente pas de documenter.
            </p>

            <p className={style.TextP4}>
                Il met en scène sans perturber, capte sans déranger, illumine sans dénaturer. <br />
                Il anticipe les instants forts. <br />
                Il repère les angles qui valorisent les intervenants. <br />
                Il adapte son matériel aux contraintes de lumière, de son, d’espace. <br />
                Et surtout : il raconte une histoire, à travers chaque image.
            </p>

            <p className={style.TextP4}>
                Une posture, un sourire discret, un regard échangé entre deux collaborateurs… autant de détails 
                invisibles à l’œil nu, mais cruciaux pour restituer l’essence d’un moment.
            </p>

            <p className={style.TextP4}>
                👉 Ce regard professionnel crée une différence immédiate dans la perception externe et renforce la 
                crédibilité de votre marque.
            </p>

            <h2 className={style.TitleH2}>
                {`Photo et vidéo : des supports durables pour valoriser votre activité`}
            </h2>
            
            <div className={style.ContainerFloat}>
                <PremiumCardImgModal_Element
                    src={imagesBlog_20250917_img_Data[1].src}
                    alt={imagesBlog_20250917_img_Data[1].alt}
                    className={style.FloatRightImg_Po}
                />

                <p className={style.TextP4}>
                    L’événement dure quelques heures. <br />
                    Mais les photos et les vidéos, elles, durent des années.
                </p>

                <p className={style.TextLiP4}>
                    Et elles parlent, parfois mieux que les mots :
                </p>

                <ul className={style.ContainerUl}>
                    <li className={style.TextLiP4}>
                        Sur votre site internet, elles affirment votre positionnement haut de gamme.
                    </li>
                    <li className={style.TextLiP4}>
                        Sur LinkedIn ou Instagram, elles captent l’attention, humanisent la marque, créent de l’engagement.
                    </li>
                        <li className={style.TextLiP4}>
                        En interne, elles renforcent la fierté d’appartenance et la cohésion.
                    </li>
                    <li className={style.TextLiP4}>
                        Dans un pitch ou une présentation client, elles valorisent votre capacité à mobiliser, à inspirer, 
                        à exécuter.
                    </li>
                </ul>

                <p className={style.TextLiP4}>
                    Autrement dit : chaque image devient un actif durable de votre communication d’entreprise.
                </p>
            </div>


            <h3 className={style.TitleNH3}>
                {`Amateur vs Corporate : quand l’image reflète vraiment la qualité de l’entreprise`}
            </h3>

            <p className={style.TextP4}>
                👉 Une photo floue, mal cadrée, saturée de couleurs artificielles : cela peut ruiner la perception d’un 
                moment pourtant réussi. <br />
                👉 À l’inverse, un cliché net, sobre, capté au bon moment, sous la bonne lumière, peut sublimer la 
                réalité et en renforcer l’impact émotionnel.
            </p>

            <p className={style.TextP4}>
                C’est ce décalage, souvent invisible avant coup, qui fait toute la différence après.
            </p>

            <h3 className={style.TitleNH3}>
                {`L’image corporate réutilisable : newsletters, rapports, slides et réseaux sociaux`}
            </h3>

            <p className={style.TextLiP4}>
                Dans les mois qui suivent un événement, les images :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    illustrent les rapports d’activité,
                </li>
                <li className={style.TextLiP4}>
                    alimentent les newsletters,
                </li>
                <li className={style.TextLiP4}>
                    inspirent les slides de présentation.
                </li>
            </ul>

            <p className={style.TextP4}>
                Mais plus encore : elles créent une trace symbolique.
            </p>

            <p className={style.TextP4}>
                Elles disent à ceux qui n’étaient pas là : 'Regardez ce que nous sommes capables de créer.' <br />
                Et à ceux qui y étaient : 'Vous faisiez partie de quelque chose d’important.'
            </p>

            <p className={style.TextP4}>
                👉 C’est aussi cela, le retour sur investissement : une seule production visuelle qui se décline sur 
                tous vos supports de communication.
            </p>

            <h2 className={style.TitleH2}>
                {`Toujours l’humain, même dans une image corporate`}
            </h2>

            <p className={style.TextP4}>
                Une image professionnelle réussie, ce n’est pas une mise en scène figée. <br />
                C’est un instant vrai, capté avec subtilité.
            </p>

            <p className={style.TextLiP4}>
                <span className={style.SpanBold}>
                    Un photographe ou un vidéaste expérimenté sait :
                </span>
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    respecter la dynamique d’un groupe,
                </li>
                <li className={style.TextLiP4}>
                    mettre à l’aise les collaborateurs,
                </li>
                <li className={style.TextLiP4}>
                    révéler l’énergie sans l’imposer.
                </li>
            </ul>

            <p className={style.TextP4}>
                Parce qu’au fond, ce n’est pas juste de la technique. <br />
                C’est une affaire de regard, d’intention, et de compréhension de l’humain.
            </p>

            <p className={style.TextP4}>
                👉 Et pour une entreprise, cela se traduit par des images qui inspirent confiance et crédibilité, bien 
                au-delà de l’événement lui-même.
            </p>

            <h2 className={style.TitleH2}>
                {`Et si choisir un photographe/vidéaste devenait votre prochain levier stratégique ?`}
            </h2>

            <p className={style.TextP4}>
                Vous avez investi dans un lieu, une logistique, des contenus, des invités... <br />
                N’oubliez pas d’investir dans la trace que cet événement laissera.
            </p>

            <p className={style.TextP4}>
                La photographie et la vidéo événementielle ne sont pas une dépense. <br />
                Ce sont des leviers puissants de visibilité, de valorisation et d’impact.
            </p>

            <p className={style.TextLiP4}>
                <span className={style.SpanBold}>
                    📈 Arguments ROI concrets :
                </span>
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Gain de temps : vous disposez de visuels immédiatement exploitables.
                </li>
                <li className={style.TextLiP4}>
                    Économie sur le long terme : une seule production = plusieurs mois de contenus.
                </li>
                <li className={style.TextLiP4}>
                    Cohérence visuelle : une image homogène sur tous vos supports.
                </li>
                <li className={style.TextLiP4}>
                    Crédibilité : une image pro inspire confiance aux clients, partenaires et investisseurs.
                </li>
                <li className={style.TextLiP4}>
                    Différenciation : vous vous démarquez immédiatement de la concurrence.
                </li>
            </ul>

            <p className={style.TextLiP4}>
                <span className={style.SpanBold}>
                    Pour résumer : Ce qu’une image professionnelle dit de vous :
                </span>
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Elle dit que vous prenez votre marque au sérieux.
                </li>
                <li className={style.TextLiP4}>
                    Elle dit que vous respectez vos partenaires.
                </li>
                <li className={style.TextLiP4}>
                    Elle dit que vous incarnez ce que vous proclamez.
                </li>
                <li className={style.TextLiP4}>
                    Et surtout, elle dit tout ce que les mots n’arrivent pas à formuler.
                </li>
            </ul>

            <p className={style.TextP4}>
                👉 À Montpellier ou ailleurs, choisir un photographe corporate ou un vidéaste professionnel, c’est 
                investir dans l’avenir de votre communication.
            </p>
        </section>
    )
}

export default Blog_20250917_Root;
