import ListDataRouter from "../../router/router";
import CardPrestationType from "../../types/CardPrestation.type";

function DataCardPrestation() {
    const tab: CardPrestationType[] = [
        {
            reactKey: 1,
            path: ListDataRouter[14].path,
            id: "tarifs-portrait-solo",
            title: "Portrait Solo",
            description: "Un portrait individuel élégant.",
            image: "/images/image-portrait-solo/lapm-photographe-professionnel-portrait-solo-homme-lifestyle-l-atelier-photo-montpellier.jpg",
        },
        {
            reactKey: 2,
            path: ListDataRouter[14].path,
            id: "tarifs-portrait-duo",
            title: "Portrait Duo",
            description: "Un moment capturé à deux.",
            image: "/images/image-portrait-solo/lapm-photographe-professionnel-portrait-solo-homme-lifestyle-l-atelier-photo-montpellier.jpg",
        },
        {
            reactKey: 3,
            path: ListDataRouter[14].path,
            id: "tarifs-portrait-famille",
            title: "Portrait Famille",
            description: "Souvenirs de famille intemporels.",
            image: "/images/image-portrait-solo/lapm-photographe-professionnel-portrait-solo-homme-lifestyle-l-atelier-photo-montpellier.jpg",
        },
        {
            reactKey: 4,
            path: ListDataRouter[14].path,
            id: "tarifs-portrait-famille",
            title: "Portrait Famille",
            description: "Souvenirs de famille intemporels.",
            image: "/images/image-portrait-solo/lapm-photographe-professionnel-portrait-solo-homme-lifestyle-l-atelier-photo-montpellier.jpg",
        },
    ]
    return tab;
}


export default DataCardPrestation;