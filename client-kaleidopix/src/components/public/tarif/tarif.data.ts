/* Import des Types */
import type { TarifCard_element_Type } from "../../elements/tarif-card/tarifCard.element.type";

const tarif_Data: TarifCard_element_Type = [
    {
        title: "Pack Essentiel",
        price:"À partir de 1 200 € HT",
        description: "présenter votre entreprise de manière claire, humaine et crédible.",
        avantage: [
            {
                item: "Échange de cadrage et définition de l’objectif",
            },
            {
                item: "Une demi-journée de tournage sur site à Montpellier ou alentours",
            },
            {
                item: "Interview et images d’activité",
            },
            {
                item: "1 vidéo principale (1 à 2 minutes)",
            },
            {
                item: "Montage professionnel et étalonnage",
            },
            {
                item: "Livraison optimisée pour site internet",
            },
        ],
    },
    {
        title: "",
        price:"",
        description: "",
        avantage: [
            {
                item: "",
            },
            {
                item: "",
            },
        ],
    },
]

export { tarif_Data };
