import { useEffect } from "react";

function useFontPreload() {
    useEffect(() => {
        const preloadFonts = document.querySelectorAll("link[data-font-preload='true']") as NodeListOf<HTMLLinkElement>;
        preloadFonts.forEach(link => {
            link.media = "all";
        });
    }, []);
}

export default useFontPreload;

/**
 * Documentation : 
 * 
 * Ce hook personnalisé permet de précharger les polices d'écriture
 * en modifiant l'attribut `media` des liens de préchargement
 * pour qu'ils soient chargés dès que le composant est monté.
 * 
 * Utilisation :
 * import useFontPreload from "useFontPreload";
 *
 * Dans la fonction du composant : 
 * useFontPreload();
 */