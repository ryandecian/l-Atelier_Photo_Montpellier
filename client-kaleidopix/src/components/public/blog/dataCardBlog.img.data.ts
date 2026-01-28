/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import type { CardBlog_Type } from "../../../types/components/blogs/cardBlog.type";

function dataCardBlog_img_data() {
    const tab: CardBlog_Type[] = [
        {
            reactKey: 1,
            path: router[4].children?.[1].path,
            id: "top",
            title: "Investir dans l’image d’entreprise",
            description: "Photo & vidéo : un vrai retour sur investissement.",
            date: "17/09/2025",
            image: "/images/image-blog/cartes/blog_20250917.jpg",
        },
        {
            reactKey: 2,
            path: router[4].children?.[2].path,
            id: "top",
            title: "Trouvez les Bons Profils",
            description: "Comment la Vidéo vous fait Économiser sur vos Coûts de Recrutement",
            date: "27/11/2025",
            image: "/images/image-blog/cartes/blog_20251127.jpg",
        },
    ]
    return tab;
}

export { dataCardBlog_img_data };
