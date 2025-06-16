import ListDataRouter from "../../router/router";
import CardBlogType from "../../types/CardBlog.type";

function DataCardPrestation() {
    const tab: CardBlogType[] = [
        {
            reactKey: 1,
            path: ListDataRouter[4].children?.[1].path,
            id: "blog_20250616",
            title: "Photo professionnelle pour CV",
            description: "Comment capter l'attention des recruteurs à Montpellier",
            date: "16/06/2025",
            image: "/images/image-blog/cartes/blog_20250616.jpg",
        },
        {
            reactKey: 2,
            path: ListDataRouter[13].path,
            id: "tarifs-portrait-mariage",
            title: "After day / trash the dress",
            description: "Prolongez la magie après le mariage.",
            date: "10/10/2025",
            image: "/images/image-prestation-card/canette.jpg",
        },
    ]
    return tab;
}


export default DataCardPrestation;
