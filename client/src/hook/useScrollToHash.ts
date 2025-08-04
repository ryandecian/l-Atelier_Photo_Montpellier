import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash(delay = 100) {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, delay);
    }
  }, [location, delay]);
}

/**
 * Documentation for useScrollToHash hook
 * 
 * Ce hook personaliser permet de déclacher un scroll vers un élément spécifique de la page.
 * 
 * Pour cela il faut utiliser un id sur la balise HTML cible, et ajouter un hash dans l'URL.
 * 
 * ----------------------------------------------------------------------
 * 
 * Exemple d'utilisation :
 * 
 * Page sans scroll :
 * https://blabla.fr/element
 * 
 * Page avec scroll :
 * https://blabla.fr/element#id-de-l-element
 * 
 * ----------------------------------------------------------------------
 * 
 * Utilisation :
 * Etape 1 : Importer le hook dans votre composant.
 * Etape 2 : Appeler le hook dans votre composant.
 * Etape 3 : Ajouter un id à l'élément cible dans votre JSX.
 * 
 * import useScrollToHash from "chemin/vers/le/hook/useScrollToHash";
 * 
 * function MonComposant() {
 *   useScrollToHash();
 * 
 *   return (
 *     <div>
 *       <h2 id="id-de-l-element">Mon élément</h2>
 *       <p>Contenu de mon élément...</p>
 *     </div>
 *   );
 * }
 * 
 * Dans le composant de la page qui doit rediriger vers l'élément,
 * cela peux être un Link ou un <a></a>
 * 
 * <a href="/mon-page#id-de-l-element">Aller à l'élément</a>
 * * ou
 * <Link to="/mon-page#id-de-l-element">Aller à l'élément</Link>
 */
