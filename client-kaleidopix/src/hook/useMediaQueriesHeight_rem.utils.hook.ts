import { useEffect, useState } from "react";

/* Récupère la valeur d'un rem sur le navigateur de l'utilisateur */
function getRemBase(): number {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function useMediaQueriesHeight_rem(): number {
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

export default useMediaQueriesHeight_rem;

/**
 * Documentation : 
 * 
 * useMediaQueriesHeight_rem est un hook personnalisé qui permet de récupérer la largeur actuelle de la fenêtre du navigateur.
 * Il utilise l'état local pour stocker la largeur et met à jour cette valeur chaque fois que la fenêtre est redimensionnée.
 * 
 * Utilisation : 
 * 
 * 1) Déclarer la const : 
 * const viewportHeight: number = useMediaQueriesHeight_rem();
 * 
 * 2) Utiliser la variable viewportHeight. Le nombre de px est ajustable
 * 
 * { MediaQuery maison 450px }
 * {viewportHeight <= 20 && ()}
 * 
 */ 
