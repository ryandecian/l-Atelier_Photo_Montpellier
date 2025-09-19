import AvisClientControllerDataType from "../types/seo/avisClientSEO.type";

function generateReviewArraySEO(data : AvisClientControllerDataType[]) {
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

export default generateReviewArraySEO;
