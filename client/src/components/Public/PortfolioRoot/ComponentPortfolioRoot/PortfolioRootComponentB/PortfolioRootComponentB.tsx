import style from "../../../../StyleRootComponent.module.css";
import GeneratorAlbumPhoto from "../../../../Elements/GeneratorAlbumPhoto/GeneratorAlbumPhoto";
import AlbumPortfolio from "../../AlbumPortfolio";

function PortfolioRootComponentB() {
    const Album = AlbumPortfolio.Album_Paysage;
    return (
        <section className={`PortfolioRootComponentB ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Photographies de paysages naturels"}
                </h2>
            </header>

            <p className={style.TextP4}>
                Les paysages sont pour moi une source d’inspiration et de sérénité. Autour de Montpellier, la nature offre des décors sublimes, entre 
                mer, vignes, garrigues et rizières camarguaises. J’y capte la lumière du matin, les reflets sur l’eau, les ombres qui dansent sur les 
                collines.
            </p>

            <p className={style.TextP4}>
                Ce sont souvent des images épurées, douces ou puissantes, selon l’énergie du lieu. J’aime traduire l’émotion ressentie face à un 
                horizon, un arbre solitaire ou un ciel chargé.
            </p>

            <GeneratorAlbumPhoto album={Album} />
        </section>
    )
}

export default PortfolioRootComponentB;
