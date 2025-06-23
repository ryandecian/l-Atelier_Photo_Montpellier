import AvisClientControllerDataType from "../types/AvisClientControllerData.type";

function generateReviewArraySEO(data : AvisClientControllerDataType[]) {
    if (!data.length) return [];

    return data.map((avis) => ({
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
    }));
}

export default generateReviewArraySEO;
