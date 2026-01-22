/* Import des modules CSS */
import css from "./premiumCardImgModal.module.css";

/* Import des composants React */
import { useState } from "react";

/* Import des Types */
import { PremiumCardImgModal_Type } from "../../../types/elements/premiumCardImgModal.type";

function PremiumCardImgModal_Element({ src, alt, className }: PremiumCardImgModal_Type) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Image cliquable */}
            <img
                src={src}
                alt={alt}
                className={`${className} ${css.img}`}
                role="button"
                onClick={() => setIsOpen(true)}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
            />

            {/* Modal d'affichage en grand */}
            {isOpen && (
                <div className={css.modal} onClick={() => setIsOpen(false)}>
                    <div
                        className={css.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span
                            className={css.close}
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </span>
                        <img
                            src={src}
                            alt={alt}
                            className={css.fullImage}
                            onContextMenu={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export { PremiumCardImgModal_Element };
