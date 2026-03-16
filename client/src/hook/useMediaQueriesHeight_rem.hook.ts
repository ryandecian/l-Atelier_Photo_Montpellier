/* Import des composants React */
import { useEffect, useState } from "react";

/* Récupère la valeur d'un rem sur le navigateur de l'utilisateur */
function getRemBase(): number {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function useMediaQueriesHeight_rem_Hook(): number {
    const [viewportHeightRem, setViewportHeightRem] = useState<number>(() => {
        const rem = getRemBase();
        return window.innerHeight / rem;
    });

    useEffect(() => {
        const updateHeight = () => {
            const rem = getRemBase();
            setViewportHeightRem(window.innerHeight / rem);
        };

        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return viewportHeightRem;
}

export { useMediaQueriesHeight_rem_Hook };

/**
 * Documentation : 
 * 
 * useMediaQueriesHeight_rem_Hook est un hook personnalisé qui permet de récupérer la hauteur actuelle de la fenêtre du navigateur en rem.
 * Il utilise l'état local pour stocker la hauteur et met à jour cette valeur chaque fois que la fenêtre est redimensionnée.
 * 
 * Utilisation : 
 * 
 * 1) Déclarer la const : 
 * const viewportHeight: number = useMediaQueriesHeight_rem_Hook();
 * 
 * 2) Utiliser la variable viewportHeight. Le nombre de px est ajustable
 * 
 * { MediaQuery maison 450px }
 * {viewportHeight <= 20 && ()}
 * 
 */ 
