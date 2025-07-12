import { useState } from "react";
import css from "./PremiumCardImgSudoRoot.module.css";

interface ImageZoomProps {
  src: string; 
  alt: string; 
  className: string;
}

function PremiumCardImgSudoRoot ({src, alt, className}: ImageZoomProps) {
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
          <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={css.close} onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <img src={src} alt={alt} className={css.fullImage}onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}/>
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumCardImgSudoRoot;
