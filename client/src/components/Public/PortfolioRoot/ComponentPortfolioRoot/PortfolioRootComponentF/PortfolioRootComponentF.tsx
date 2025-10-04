import style from "../../../../StyleRootComponent.module.css";
import GeneratorAlbumPhoto from "../../../../Elements/GeneratorAlbumPhoto/GeneratorAlbumPhoto.element";
import AlbumPortfolio from "../../AlbumPortfolio";

function PortfolioRootComponentF() {
    const Album = AlbumPortfolio.Album_Pro_Perso;
    return (
        <article className={`PortfolioRootComponentF ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Portraits de particuliers et professionnels"}
                </h2>
            </header>

            <p className={style.TextP4}>
                Le portrait est au cœur de mon activité. J’aime créer une relation de confiance avec la personne photographiée, pour révéler sa 
                personnalité, sa douceur ou sa force. Mon objectif : que chacun se sente bien en photo, et ait envie de la partager.
            </p>

            <p className={style.TextP4}>
                Je réalise des portraits en lumière naturelle ou en studio à domicile, pour les familles, les futurs parents, les nouveaux-nés ou les 
                professionnels. Chaque séance est préparée avec soin, dans une ambiance bienveillante. Le résultat : des images authentiques, 
                expressives, valorisantes.
            </p>

            <GeneratorAlbumPhoto album={Album} />
        </article>
    )
}

export default PortfolioRootComponentF;
