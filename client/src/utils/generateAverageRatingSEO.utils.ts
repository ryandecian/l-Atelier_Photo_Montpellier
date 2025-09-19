import AvisClientControllerDataType from "../types/seo/avisClientSEO.type";

function generateAverageRatingSEO(data: AvisClientControllerDataType[]) {
    if (data.length === 0) {
        return null;
    }
    
    const total = data.reduce((sum, avis) => sum + avis.note, 0); // Somme des avis
    const average = (total / data.length).toFixed(1); // Calcul de la note moyenne à une décimale près

    // Retourne tout l'objet aggregateRating
    return {
        "@type": "AggregateRating",
        ratingValue: average.toString(), /* Note moyenne */
        reviewCount: data.length.toString() /* Nombre total de notes */
      };
}

export default generateAverageRatingSEO;
