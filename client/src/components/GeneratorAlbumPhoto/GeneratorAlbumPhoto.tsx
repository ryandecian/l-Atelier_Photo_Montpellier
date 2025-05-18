import css from "./GeneratorAlmbumPhoto.module.css";
import PremiumCardImgSudoRoot from "../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

type AlbumPhotoType = {
    src: string;
    alt: string;
}

type DataAlbumPhotoType = {
    album: AlbumPhotoType[];
}

function GeneratorAlbumPhoto(Props: DataAlbumPhotoType) {
    const { album } = Props;
    return (
      <div className={css.flexWrap}>
        {album.map((img, index) => (
          <div key={index} className={css.ContainerImg}>
            <PremiumCardImgSudoRoot
            src={img.src}
            alt={img.alt}
            className={css.Image}
            />
          </div>
        ))}
      </div>
    )
}

export default GeneratorAlbumPhoto;
