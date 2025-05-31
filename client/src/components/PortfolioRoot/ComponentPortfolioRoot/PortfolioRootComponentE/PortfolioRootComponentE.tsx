import style from "../../../StyleRootComponent.module.css";
// import GeneratorAlbumPhoto from "../../../GeneratorAlbumPhoto/GeneratorAlbumPhoto";
// import AlbumPortfolio from "../../AlbumPortfolio";

function PortfolioRootComponentE() {
    // const Album = AlbumPortfolio.Album_Test;
    return (
        <article className={`PortfolioRootComponentE ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Un regard artistique multiple"}
                </h2>
            </header>

            <p className={style.TextP4}>
                Mon travail se situe à la croisée de plusieurs genres photographiques et désormais aussi vidéo. <br />
                Ce portfolio en est le reflet. Mon approche reste constante : créer des images 
                <span className={style.SpanBold}>
                    {" vivantes, cohérentes, lumineuses "}
                </span>
                – qu’il s’agisse d’un portrait, d’un paysage ou d’un film court. Que je photographie ou filme un visage, une ambiance ou un lieu, je 
                cherche toujours à capter une 
                <span className={style.SpanBold}>
                    {" vérité, "}
                </span>
                une
                <span className={style.SpanBold}>
                    {" harmonie, "}
                </span>
                une
                <span className={style.SpanBold}>
                    {" sensation."}
                </span>
            </p>

            <p className={style.TextP4}>
                La vidéo me permet d’aller plus loin dans la narration, d’ajouter du rythme, de la voix, du mouvement à vos souvenirs.
            </p>

            <p className={style.TextP4}>
                Ce portfolio n’est qu’un aperçu. Si vous êtes touché(e) par mon univers, je vous invite à découvrir mes offres pour les portraits, 
                les mariages, ou les projets sur mesure.
            </p>

            {/* <GeneratorAlbumPhoto album={Album} /> */}
        </article>
    )
}

export default PortfolioRootComponentE;
