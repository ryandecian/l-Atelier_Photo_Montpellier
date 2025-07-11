import ListDataRouter from "../../router/router";
import CardBlogType from "../../types/CardBlog.type";

function DataCardBlogRoot() {
    const tab: CardBlogType[] = [
        {
            reactKey: 1,
            path: ListDataRouter[4].children?.[1].path,
            id: "top",
            title: "Photo professionnelle pour CV",
            description: "Comment capter l'attention des recruteurs à Montpellier",
            date: "16/06/2025",
            image: "/images/image-blog/cartes/blog_20250616.jpg",
        },
        {
            reactKey: 2,
            path: ListDataRouter[4].children?.[2].path,
            id: "top",
            title: "Photographie de Mariage en Style Reportage",
            description: "L'Art de Capturer l’Authentique",
            date: "01/06/2025",
            image: "/images/image-blog/cartes/blog_20250601.jpg",
        },
        {
            reactKey: 3,
            path: ListDataRouter[4].children?.[3].path,
            id: "top",
            title: "Photographie de Portrait LifeStyle",
            description: "Découvrez une version valorisante de vous-même",
            date: "10/07/2025",
            image: "/images/image-blog/cartes/blog_20250710.jpg",
        },
    ]
    return tab;
}


export default DataCardBlogRoot;
