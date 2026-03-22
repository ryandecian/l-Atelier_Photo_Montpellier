/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import { CardBlog_Type } from "../../../types/components/blogs/cardBlog.type";

function dataCardBlog_img_Data() {
    const tab: CardBlog_Type[] = [
        {
            reactKey: 1,
            path: router[4].children?.[1].path,
            id: "top",
            title: "Photographie de Mariage en Style Reportage",
            description: "L'Art de Capturer l’Authentique",
            date: "01/06/2025",
            image: "/images/image-blog/cartes/blog_20250601.jpg",
        },
        {
            reactKey: 2,
            path: router[4].children?.[2].path,
            id: "top",
            title: "Photo professionnelle pour CV",
            description: "Comment capter l'attention des recruteurs à Montpellier",
            date: "16/06/2025",
            image: "/images/image-blog/cartes/blog_20250616.jpg",
        },
        {
            reactKey: 3,
            path: router[4].children?.[3].path,
            id: "top",
            title: "Photographie de Portrait LifeStyle",
            description: "Découvrez une version valorisante de vous-même",
            date: "10/07/2025",
            image: "/images/image-blog/cartes/blog_20250710.jpg",
        },
        {
            reactKey: 4,
            path: router[4].children?.[4].path,
            id: "top",
            title: "Calendrier idéal pour les photos de grossesse",
            description: "Quand programmer votre shooting grossesse ?",
            date: "24/07/2025",
            image: "/images/image-blog/cartes/blog_20250724.jpg",
        },
        {
            reactKey: 5,
            path: router[4].children?.[5].path,
            id: "top",
            title: "Investir dans l’image d’entreprise",
            description: "Photo & vidéo : un vrai retour sur investissement.",
            date: "17/09/2025",
            image: "/images/image-blog/cartes/blog_20250917.jpg",
        },
        {
            reactKey: 6,
            path: router[4].children?.[6].path,
            id: "top",
            title: "Trouvez les Bons Profils",
            description: "Comment la Vidéo vous fait Économiser sur vos Coûts de Recrutement",
            date: "27/11/2025",
            image: "/images/image-blog/cartes/blog_20251127.jpg",
        },
        {
            reactKey: 7,
            path: router[4].children?.[7].path,
            id: "top",
            title: "Préparatifs de mariage",
            description: "Pourquoi les préparatifs sont une étape essentielle du reportage photo de mariage.",
            date: "10/02/2026",
            image: "/images/image-blog/cartes/blog_20260210.jpg",
        },
        {
            reactKey: 8,
            path: router[4].children?.[8].path,
            id: "top",
            title: "Mariage à Montpellier : 10 critères essentiels",
            description: "Les vrais critères pour choisir un photographe mariage sans stress ni mauvaises surprises.",
            date: "05/03/2026",
            image: "/images/image-blog/cartes/blog_20260305.jpg",
        },
    ]
    return tab;
}

export { dataCardBlog_img_Data };
