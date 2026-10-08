/* Import des modules CSS */

import CSS from "./cadreModel5.module.css";

interface CadreModel5Props {
    image: string;
    alt: string;
    className?: string;
}

function CadreModel5_Element({
    image,
    alt,
    className = ""
}: CadreModel5Props) {

    return (
        <div className={`${CSS.frame} ${className}`}>
            <div className={CSS.frameShell}>

                <div className={`${CSS.woodRail} ${CSS.woodRailTop}`} />
                <div className={`${CSS.woodRail} ${CSS.woodRailRight}`} />
                <div className={`${CSS.woodRail} ${CSS.woodRailBottom}`} />
                <div className={`${CSS.woodRail} ${CSS.woodRailLeft}`} />

                <div className={CSS.innerFrame}>
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
    );

}

export { CadreModel5_Element };
