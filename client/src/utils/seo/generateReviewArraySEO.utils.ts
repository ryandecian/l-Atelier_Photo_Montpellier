/* Import des Types */
import { AvisClientSEO_Type } from "../../seo/data/avisClientSEO.type";

function generateReviewArraySEO_Utils(data : AvisClientSEO_Type[]) {
    if (!data.length) return [];

    return data
        .slice(0, 5) // Limite à 5 avis maximum
        .map((avis) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": avis.nom /* Nom de l'auteur de l'avis */
            },
            "datePublished": avis.date, /* Date de publication de l'avis de type string au format "DD/MM/YYYY" */
            "reviewBody": avis.commentaire, /* Contenu de l'avis */
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": avis.note.toString() /* Note de l'avis */
            }
        })
    );
}

export { generateReviewArraySEO_Utils };
