import ListDataRouter from "../../router/router";
import CardBlogType from "../../types/CardBlog.type";

function DataCardPrestation() {
    const tab: CardBlogType[] = [
        {
            reactKey: 1,
            path: ListDataRouter[13].path,
            id: "tarifs-portrait-mariage",
            title: "After day / trash the dress",
            description: "Prolongez la magie après le mariage.",
            date: "",
            image: "/images/image-prestation-card/canette.jpg",
        },
    ]
    return tab;
}


export default DataCardPrestation;
