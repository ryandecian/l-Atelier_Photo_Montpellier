
/* Import des modules CSS */
import css from "./GeneratorAlbumPhoto.module.css";

/* Import des composants d'Elements */
import PremiumCardImgSudoRoot from "../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

/* Import des Types */
import { DataAlbumPhoto_Type } from "../../../types/elements/albumPhoto.type";

function GeneratorAlbumPhoto_Element({ album }: DataAlbumPhoto_Type) {
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

export { GeneratorAlbumPhoto_Element };
