import { useState } from "react";
import style from "./PremiumCardImgSudoRoot.module.css";

interface ImageZoomProps {
  src: string; 
  alt: string; 
  className: string;
}

function PremiumCardImgSudoRoot (Props: ImageZoomProps) {
  const { src, alt, className } = Props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Image cliquable */}
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setIsOpen(true)}
      />

      {/* Modal d'affichage en grand */}
      {isOpen && (
        <div className={style.modal} onClick={() => setIsOpen(false)}>
          <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={style.close} onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <img src={src} alt={alt} className={style.fullImage} />
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumCardImgSudoRoot;
