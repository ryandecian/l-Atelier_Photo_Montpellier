/* Import des Types */
import { Slide_Props } from "../carrousel3D.type";
import { type CSSProperties, useRef, useEffect } from "react";

/* Import des modules CSS */
import styles from "../carrousel3D.module.css";


/* Gestion de l'effet 3D au mouvement de la souris */
function useTilt(enabled: boolean, animationDuration = "150ms") {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el || !enabled) {
      return;
    }

    let rect: DOMRect | null = null;

    const handleEnter = () => {
      rect = el.getBoundingClientRect();

      el.style.transition = `transform ${animationDuration} ease-out`;
    };

    const handleMove = (event: MouseEvent) => {
      rect ??= el.getBoundingClientRect();

      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      el.style.setProperty("--px", px.toFixed(2));
      el.style.setProperty("--py", py.toFixed(2));
    };

    const handleEnd = () => {
      rect = null;

      el.style.setProperty("--px", "0.5");
      el.style.setProperty("--py", "0.5");

      el.style.transition = `transform ${animationDuration} ease-in`;
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleEnd);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleEnd);
    };
  }, [enabled, animationDuration]);

  return ref;
}

/* Gestion d'une slide du carrousel */
function Slide_Component({
  image,
  title,
  subtitle,
  description,
  offset,
  isPageBackground,
}: Slide_Props) {
  const isActive = offset === 0;

  const ref = useTilt(isActive);

  const slideStyle = {
    "--offset": offset,
    "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={styles.slide}
      data-active={isActive ? "true" : undefined}
      style={slideStyle}
    >
      {isPageBackground && (
        <div
          className={styles.slideBackground}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      )}

      <div
        className={styles.slideContent}
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <div className={styles.slideContentInner}>
          {title && (
            <h2 className={styles.slideTitle} dir="auto">
              {title}
            </h2>
          )}

          {subtitle && (
            <h3 className={styles.slideSubtitle} dir="auto">
              {subtitle}
            </h3>
          )}

          {description && (
            <p className={styles.slideDescription} dir="auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export { Slide_Component };
