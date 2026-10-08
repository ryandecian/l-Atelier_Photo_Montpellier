/* Import des modules CSS */

import CSS from "./cadreModel6.module.css";

interface CadreModel6Props {
    image: string;
    alt: string;
    className?: string;
}

function CadreModel6_Element({
    image,
    alt,
    className = ""
}: CadreModel6Props) {

    return (
        <div className={`${CSS.frame} ${className}`}>
            <div className={CSS.frameShell}>

                <div className={`${CSS.rail} ${CSS.railTop}`} />
                <div className={`${CSS.rail} ${CSS.railRight}`} />
                <div className={`${CSS.rail} ${CSS.railBottom}`} />
                <div className={`${CSS.rail} ${CSS.railLeft}`} />

                <div className={CSS.pictureContainer}>
                    <img
                        className={CSS.picture}
                        src={image}
                        alt={alt}
                    />
                </div>

            </div>
        </div>
    );

}

export { CadreModel6_Element };
