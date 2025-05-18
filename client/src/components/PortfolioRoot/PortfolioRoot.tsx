import style from "../StyleRootComponent.module.css";
import css from "./PortfolioRoot.module.css"; // CSS spécifique à ce composant
import img1 from "../../assets/Images/ImagePortfolio/1-1_1.jpg";
import img2 from "../../assets/Images/ImagePortfolio/2-3_4-H.jpg";
import img3 from "../../assets/Images/ImagePortfolio/3-1_1.jpg";
import img4 from "../../assets/Images/ImagePortfolio/4-4_3-P.jpg";
import img5 from "../../assets/Images/ImagePortfolio/5-3_4-H.jpg";

import GeneratorAlbumPhoto from "../GeneratorAlbumPhoto/GeneratorAlbumPhoto";

const images = [
  { src: img1, ratio: "" },
  { src: img2, ratio: "3 / 4" },
  { src: img3, ratio: "1 / 1" },
  { src: img4, ratio: "4 / 3" },
  { src: img2, ratio: "3 / 4" },
  { src: img3, ratio: "1 / 1" },
  { src: img4, ratio: "4 / 3" },
  { src: img5, ratio: "3 / 4" },
  { src: img1, ratio: "1 / 1" },
  { src: img2, ratio: "3 / 4" },
  { src: img3, ratio: "1 / 1" },
  { src: img4, ratio: "4 / 3" },
  { src: img5, ratio: "3 / 4" },
  // tu peux en rajouter autant que tu veux
];

function PortfolioRoot() {
  return (
    <section className={`PortfolioRoot ${style.ContainerRootRacine}`}>
      <header className={style.ContainerTitle}>
        <h1 className={style.TitleH1}>Portfolio</h1>
      </header>

      <div className={css.flexWrap}>
        {images.map((img, index) => (
          <div key={index} className={css.item}>
            <img src={img.src} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}


export default PortfolioRoot;
