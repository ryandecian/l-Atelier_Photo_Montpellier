import { useEffect, useState } from "react";

/* Récupère la valeur d'un rem sur le navigateur de l'utilisateur */
function getRemBase(): number {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function useMediaQueriesWidth_rem(): number {
    const [viewportWidthRem, setViewportWidthRem] = useState<number>(() => {
        const rem = getRemBase();
        return window.innerWidth / rem;
    });

    useEffect(() => {
        const updateWidth = () => {
            const rem = getRemBase();
            setViewportWidthRem(window.innerWidth / rem);
        };

        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return viewportWidthRem;
}

export default useMediaQueriesWidth_rem;

/**
 * Documentation : 
 * 
 * useMediaQueriesWidth_rem est un hook personnalisé qui permet de récupérer la largeur actuelle de la fenêtre du navigateur.
 * Il utilise l'état local pour stocker la largeur et met à jour cette valeur chaque fois que la fenêtre est redimensionnée.
 * 
 * Utilisation : 
 * 
 * 1) Déclarer la const : 
 * const viewportWidth: number = useMediaQueriesWidth_rem();
 * 
 * 2) Utiliser la variable viewportWidth. Le nombre de px est ajustable
 * {viewportWidth <= 20 && ()}
 * 
 */ 
