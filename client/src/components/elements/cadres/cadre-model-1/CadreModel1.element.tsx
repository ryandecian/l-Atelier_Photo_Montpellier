/* Import des modules CSS */

import CSS from "./cadreModel1.module.css";

interface CadreModel1Props {
    image: string;
    alt: string;
    className?: string;
}

function CadreModel1_Element({
    image,
    alt,
    className = ""
}: CadreModel1Props) {

    return (
        <div className={`${CSS.frame} ${className}`}>
            <div className={CSS.outerMoulding}>
                <div className={CSS.middleMoulding}>
                    <div className={CSS.innerMoulding}>
                        <div className={CSS.pictureContainer}>
                            <img
                                className={CSS.picture}
                                src={image}
                                alt={alt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export { CadreModel1_Element };