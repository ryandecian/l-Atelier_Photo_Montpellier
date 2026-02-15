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
        title: "Pack Activité & Métier ",
        price:"À partir de 1 800 € HT",
        description: "montrer concrètement ce que vous faites et comment vous le faites.",
        avantage: [
            {
                item: "Phase de cadrage approfondie (message, angle, narration)",
            },
            {
                item: "1 journée de tournage sur site",
            },
            {
                item: "Captation des gestes professionnels et de l’environnement réel",
            },
            {
                item: "1 vidéo principale (1 min 30 à 3 minutes)",
            },
            {
                item: "2 formats courts pour LinkedIn",
            },
            {
                item: "Sous-titres inclus",
            },
            {
                item: "Livraison web et réseaux professionnels",
            },
        ],
    },
    {
        title: "Pack Marque Employeur & Recrutement",
        price:"À partir de 2 400 € HT",
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
