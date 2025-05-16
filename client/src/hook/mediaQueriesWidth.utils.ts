import { useEffect, useState } from "react";

function useMediaQueriesWidth(): number {

  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
          const updateWidth = () => {
            setViewportWidth(window.innerWidth);
          };
      
          // Ajout de l'écouteur d'événements pour la redimensionnement de la fenêtre
          window.addEventListener("resize", updateWidth);
      
          // Nettoyage lors du démontage du composant
          return () => {
            window.removeEventListener("resize", updateWidth);
          };
      }, []);

    return (
        viewportWidth
    )
}

export default useMediaQueriesWidth;
