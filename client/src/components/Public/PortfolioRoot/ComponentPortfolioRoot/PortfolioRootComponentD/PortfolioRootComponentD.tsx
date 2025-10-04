import style from "../../../../StyleRootComponent.module.css";
import GeneratorAlbumPhoto from "../../../../Elements/GeneratorAlbumPhoto/GeneratorAlbumPhoto.element";
import AlbumPortfolio from "../../AlbumPortfolio";

function PortfolioRootComponentD() {
    const Album = AlbumPortfolio.Album_Urbaine;
    return (
        <section className={`PortfolioRootComponentD ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Photographie urbaine et architecture"}
                </h2>
            </header>

            <p className={style.TextP4}>
                L’architecture me parle à travers ses lignes, ses textures, ses contrastes. Je photographie les bâtiments, les détails urbains, 
                les compositions graphiques offertes par la ville. À Montpellier, les contrastes entre le centre historique et les quartiers modernes 
                offrent des angles riches et variés.
            </p>

            <p className={style.TextP4}>
                Je cherche à isoler des formes, à jouer avec les perspectives ou les ombres pour créer des images structurées, parfois minimalistes, 
                toujours équilibrées.
            </p>

            <GeneratorAlbumPhoto album={Album} />
        </section>
    )
}

export default PortfolioRootComponentD;
