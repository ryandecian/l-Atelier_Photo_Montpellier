
/* Import des modules CSS */
import css from "./GeneratorAlbumPhoto.module.css";

/* Import des composants d'Elements */
import PremiumCardImgSudoRoot from "../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

type AlbumPhotoType = {
    src: string;
    alt: string;
};

type DataAlbumPhotoType = {
    album: AlbumPhotoType[];
};

function GeneratorAlbumPhoto({ album }: DataAlbumPhotoType) {
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
    );
}

export default GeneratorAlbumPhoto;
