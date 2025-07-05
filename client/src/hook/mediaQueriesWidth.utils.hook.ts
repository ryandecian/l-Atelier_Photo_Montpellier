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

/**
 * Documentation : 
 * 
 * useMediaQueriesWidth est un hook personnalisé qui permet de récupérer la largeur actuelle de la fenêtre du navigateur.
 * Il utilise l'état local pour stocker la largeur et met à jour cette valeur chaque fois que la fenêtre est redimensionnée.
 * 
 * Utilisation : 
 * 
 * 
 */