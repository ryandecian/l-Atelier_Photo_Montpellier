import { ReactNode } from "react"

/* Liste des pages en import */
import HomePage from "../pages/HomePage";
import MentionsLegales from "../pages/MentionsLegalesPage";

/**
 * Utilisation : 
 * {ListDataRouter[0].path}
 * {LinkExt.instagram}
 */

interface RouterItemsType {
    path: string
    element: ReactNode
}

interface LinkExtType {
    instagram: string
    facebook: string
    youtube: string
}

const LinkExt: LinkExtType = {
    instagram: "https://www.instagram.com/atelier_photo_montpellier",
    facebook: "https://www.facebook.com",
    youtube: "https://www.youtube.com",
}

const ListDataRouter: RouterItemsType[] = [
    /* 0 */
    {
        path: "/",
        element: <HomePage />,
    },
    /* 1 */
    {
        path: "/mentions-legales",
        element: <MentionsLegales />,
    },
    /* 2 */
    {
        path: "/tarifs",
        element: <h1>Route : Page Tarifs</h1>,
    },
    /* 3 */
    {
        path: "/contacts",
        element: <h1>Route : Page Contact</h1>,
    },
    /* 4 */
    {
        path: "/blog",
        element: <h1>Route : Page Blog</h1>,
    },
    /* 5 */
    {
        path: "/panier",
        element: <h1>Route : Page Panier</h1>,
    },
    /* 6 */
    {
        path: "/compte",
        element: <h1>Route : Page Compte</h1>,
    },
    /* 7 */
    {
        path: "/qui-suis-je",
        element: <h1>Route : Page Qui-suis-je</h1>,
    },
    /* 8 */
    {
        path: "/portfolio",
        element: <h1>Route : Page Portfolio</h1>,
    },
    /* 9 */
    {
        path: "/cgv",
        element: <h1>Route : Page CGV</h1>,
    },
    /* 10 */
    {
        path: "/faq",
        element: <h1>Route : Page faq</h1>,
    },
    /* Route des SubMenu */
    /* 11 */
    {
        path: "/portraits-corporates",
        element: <h1>Route : portraits-corporates</h1>,
    },
    /* 12 */
    {
        path: "/portraits-lifestyles",
        element: <h1>Route : portraits-lifestyles</h1>,
    },
    /* 13 */
    {
        path: "/portraits-mariages",
        element: <h1>Route : Portraits-Mariages</h1>,
    },
]
export { LinkExt };
export default ListDataRouter;
