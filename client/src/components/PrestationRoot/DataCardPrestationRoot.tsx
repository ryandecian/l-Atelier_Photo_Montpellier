import ListDataRouter from "../../router/router";
import CardPrestationType from "../../types/CardPrestation.type";

function DataCardPrestation() {
    const tab: CardPrestationType[] = [
        {
            reactKey: 1,
            path: ListDataRouter[13].path,
            id: "tarifs-portrait-mariage",
            title: "After day / trash the dress",
            description: "Un portrait individuel élégant.",
            image: "/images/image-prestation-card/",
        },
        {
            reactKey: 2,
            path: ListDataRouter[14].path,
            id: "tarifs-portrait-mariage",
            title: "After day / trash the dress",
            description: "Un portrait individuel élégant.",
            image: "/images/image-prestation-card/",
        },
    ]
    return tab;
}


export default DataCardPrestation;