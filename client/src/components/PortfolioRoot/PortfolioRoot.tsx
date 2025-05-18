import style from "../StyleRootComponent.module.css";
import ImagesPortraitPortfolioControllerData from "./ImagesPortfolioControllerData";
import GeneratorAlbumPhoto from "../GeneratorAlbumPhoto/GeneratorAlbumPhoto";

function PortfolioRoot() {
  return (
    <section className={`PortfolioRoot ${style.ContainerRootRacine}`}>
      <header className={style.ContainerTitle}>
        <h1 className={style.TitleH1}>Mon portfolio photo - L'Atelier Photo Montpellier</h1>
      </header>

      <GeneratorAlbumPhoto album={ImagesPortraitPortfolioControllerData.Album_Test} />
    </section>
  );
}


export default PortfolioRoot;
