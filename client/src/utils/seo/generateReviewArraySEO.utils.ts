/* Import des Types */
import { AvisClientSEO_Type } from "../../types/seo/avisClientSEO.type";

function generateReviewArraySEO_Utils(data : AvisClientSEO_Type[]) {
    if (!data.length) return [];

    return data
        .slice(0, 5) // Limite à 5 avis maximum
        .map((avis) => ({
            "@type": "Review",
            author: {
                "@type": "Person",
                "name": avis.nom
            },
            datePublished: avis.date,
            reviewBody: avis.commentaire,
            reviewRating: {
                "@type": "Rating",
                ratingValue: avis.note.toString()
            }
        })
    );
}

export { generateReviewArraySEO_Utils };
