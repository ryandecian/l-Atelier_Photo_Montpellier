import AvisClientControllerDataType from "../types/AvisClientControllerData.type";

function generateAverageRatingSEO(data: AvisClientControllerDataType[]) {
    if (data.length === 0) {
        return null;
    }
    
    const total = data.reduce((sum, avis) => sum + avis.note, 0); // Somme des avis
    const average = (total / data.length).toFixed(1); // Calcul de la note moyenne à une décimale près

    // Retourne tout l'objet aggregateRating
    return {
        "@type": "AggregateRating",
        ratingValue: average.toString(),
        reviewCount: data.length.toString()
      };
}

export default generateAverageRatingSEO;
