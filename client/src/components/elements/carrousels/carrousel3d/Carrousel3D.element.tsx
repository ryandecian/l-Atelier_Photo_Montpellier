/* Import des modules CSS */
import styles from "./carrousel3D.module.css";

/* Import des Components */
import { Slide_Component } from "./components/Slide.component";

/* Import des composants React */
import {
  useMemo,
  useRef,
  useState,
  type TouchEvent,
} from "react";

/* Import des Types */
import { Carrousel3D_Props } from "./carrousel3D.type";


/* Gestion du carrousel 3D */
function Carrousel3D_Element({
  slides,
  isPageBackground = false,
  className = "",
}: Carrousel3D_Props) {
  const [slideIndex, setSlideIndex] = useState(0);

  /* Position de départ du swipe */
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  /* Distance minimum pour déclencher le changement de slide */
  const swipeThreshold = 50;

  /*
   * Duplication des slides afin de pouvoir afficher
   * les éléments avant et après la slide active
   */
  const carouselSlides = useMemo(
    () => [...slides, ...slides, ...slides],
    [slides],
  );

  if (slides.length === 0) {
    return null;
  }

  /* Slide précédente */
  const handlePrevSlide = () => {
    setSlideIndex((currentIndex) =>
      currentIndex === 0
        ? slides.length - 1
        : currentIndex - 1,
    );
  };

  /* Slide suivante */
  const handleNextSlide = () => {
    setSlideIndex(
      (currentIndex) => (currentIndex + 1) % slides.length,
    );
  };

  /* Début du swipe */
  const handleTouchStart = (
    event: TouchEvent<HTMLElement>,
  ) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  /* Fin du swipe */
  const handleTouchEnd = (
    event: TouchEvent<HTMLElement>,
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    /* Ignore les mouvements principalement verticaux */
    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    /* Ignore les mouvements trop courts */
    if (Math.abs(deltaX) < swipeThreshold) {
      return;
    }

    /* Swipe vers la gauche */
    if (deltaX < 0) {
      handleNextSlide();
      return;
    }

    /* Swipe vers la droite */
    handlePrevSlide();
  };

  /* Annulation du swipe */
  const handleTouchCancel = () => {
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      className={`${styles.slidesWrapper} ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className={styles.slides}>
        <button
          type="button"
          className={styles.prevSlideBtn}
          onClick={handlePrevSlide}
          aria-label="Slide précédente"
        >
          ‹
        </button>

        {carouselSlides.map((slide, index) => {
          const offset =
            index - (slides.length + slideIndex);

          return (
            <Slide_Component
              key={`${slide.id}-${index}`}
              {...slide}
              offset={offset}
              isPageBackground={isPageBackground}
            />
          );
        })}

        <button
          type="button"
          className={styles.nextSlideBtn}
          onClick={handleNextSlide}
          aria-label="Slide suivante"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export { Carrousel3D_Element };
