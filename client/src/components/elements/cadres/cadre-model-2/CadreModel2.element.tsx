/* Import des modules CSS */

import CSS from "./cadreModel2.module.css";

interface CadreModel2Props {
    image: string;
    alt: string;
    className?: string;
}

function CadreModel2_Element({
    image,
    alt,
    className = ""
}: CadreModel2Props) {

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

export { CadreModel2_Element };