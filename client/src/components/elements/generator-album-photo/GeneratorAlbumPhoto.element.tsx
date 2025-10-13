
/* Import des modules CSS */
import css from "./generatorAlbumPhoto.module.css";

/* Import des composants d'Elements */
import { PremiumCardImgModal_Element } from "../premium-card-img-modal/PremiumCardImgModal.element";

/* Import des Types */
import { DataAlbumPhoto_Type } from "../../../types/elements/albumPhoto.type";

function GeneratorAlbumPhoto_Element({ album }: DataAlbumPhoto_Type) {
    return (
        <div className={css.flexWrap}>
            {album.map((img, index) => (
                <div key={index} className={css.ContainerImg}>
                    <PremiumCardImgModal_Element
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
