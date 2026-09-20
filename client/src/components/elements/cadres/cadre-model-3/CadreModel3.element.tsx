/* Import des modules CSS */

import CSS from "./cadreModel3.module.css";

interface CadreModel3Props {
    image: string;
    alt: string;
    className?: string;
}

function CadreModel3_Element({
    image,
    alt,
    className = ""
}: CadreModel3Props) {

    return (
        <div className={`${CSS.frame} ${className}`}>
            <div className={CSS.frameShell}>

                <div className={`${CSS.woodRail} ${CSS.woodRailTop}`} />
                <div className={`${CSS.woodRail} ${CSS.woodRailRight}`} />
                <div className={`${CSS.woodRail} ${CSS.woodRailBottom}`} />
                <div className={`${CSS.woodRail} ${CSS.woodRailLeft}`} />

                <div className={CSS.innerMoulding}>
                    <div className={CSS.warmEdge}>
                        <div className={CSS.innerShadow}>
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
    );

}

export { CadreModel3_Element };