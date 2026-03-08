import { useEffect, useState } from "react";

function useMediaQueriesWidth_px_Hook(): number {

  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
          const updateWidth = () => {
            setViewportWidth(window.innerWidth);
          };
      
          /* Ajout de l'écouteur d'événements pour la redimensionnement de la fenêtre */
          window.addEventListener("resize", updateWidth);
      
          /* Nettoyage lors du démontage du composant */
          return () => {
            window.removeEventListener("resize", updateWidth);
          };
      }, []);

    return (
        viewportWidth
    )
}

export { useMediaQueriesWidth_px_Hook };

/**
 * Documentation : 
 * 
 * useMediaQueriesWidth_px_Hook est un hook personnalisé qui permet de récupérer la largeur actuelle de la fenêtre du navigateur en pixels.
 * Il utilise l'état local pour stocker la largeur et met à jour cette valeur chaque fois que la fenêtre est redimensionnée.
 * 
 * Utilisation : 
 * 
 * 1) Déclarer la const : 
 * const viewportWidth: number = useMediaQueriesWidth_px_Hook();
 * 
 * 2) Utiliser la variable viewportWidth. Le nombre de px est ajustable
 * {viewportWidth <= 550 && ()}
 * 
 */ 
