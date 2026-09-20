/* Import des modules CSS */

import CSS from "./cadreModel4.module.css";

interface CadreModel4Props {
    image: string;
    alt: string;
    className?: string;
}

function CadreModel4_Element({
    image,
    alt,
    className = ""
}: CadreModel4Props) {

    return (
        <div className={`${CSS.frame} ${className}`}>
            <div className={CSS.frameShell}>

                <div className={CSS.outerMoulding}>
                    <div className={CSS.woodMoulding}>
                        <div className={CSS.darkMoulding}>
                            <div className={CSS.goldMoulding}>
                                <div className={CSS.innerMoulding}>

                                    <div className={CSS.passePartout}>
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
                    </div>
                </div>

            </div>
        </div>
    );

}

export { CadreModel4_Element };
