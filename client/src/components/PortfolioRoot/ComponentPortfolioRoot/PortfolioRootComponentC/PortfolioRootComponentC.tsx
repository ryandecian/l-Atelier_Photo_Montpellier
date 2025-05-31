import style from "../../../StyleRootComponent.module.css";
import GeneratorAlbumPhoto from "../../../GeneratorAlbumPhoto/GeneratorAlbumPhoto";
import AlbumPortfolio from "../../AlbumPortfolio";

function PortfolioRootComponentC() {
    const Album = AlbumPortfolio.Album_Rue_Street;
    return (
        <article className={`PortfolioRootComponentC ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Photographie de rue – Street Photography"}
                </h2>
            </header>

            <p className={style.TextP4}>
                Dans la rue, je cherche le mouvement, l’inattendu, l’instant de vérité. Je capte des scènes de vie, des regards, des gestes anodins qui 
                deviennent, en photo, profondément humains. La photo de rue développe mon instinct, affine mon œil et m’inspire pour mes séances portraits.
            </p>

            <p className={style.TextP4}>
                À Montpellier, j’aime photographier les marchés, les ruelles vivantes, les ambiances de quartier. C’est un travail plus libre, plus 
                brut, mais qui nourrit ma créativité.
            </p>

            <GeneratorAlbumPhoto album={Album} />
        </article>
    )
}

export default PortfolioRootComponentC;
