import { useEffect, useState } from "react";

/* Récupère la valeur d'un rem sur le navigateur de l'utilisateur */
function getRemBase(): number {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function useMediaQueriesWidth_rem_Hook(): number {
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

export { useMediaQueriesWidth_rem_Hook };

/**
 * Documentation : 
 * 
 * useMediaQueriesWidth_rem_Hook est un hook personnalisé qui permet de récupérer la largeur actuelle de la fenêtre du navigateur en rem.
 * Il utilise l'état local pour stocker la largeur et met à jour cette valeur chaque fois que la fenêtre est redimensionnée.
 * 
 * Utilisation : 
 * 
 * 1) Déclarer la const : 
 * const viewportWidth: number = useMediaQueriesWidth_rem_Hook();
 * 
 * 2) Utiliser la variable viewportWidth. Le nombre de rem est ajustable
 * {viewportWidth <= 20 && ()}
 * 
 */ 
