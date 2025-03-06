import { ReactNode } from "react"

/* Liste des pages en import */
import HomePage from "../pages/HomePage";
import MentionsLegales from "../pages/MentionsLegalesPage";


interface RouterItemsType {
    path: string
    element: ReactNode
}

const ListDataRouter: RouterItemsType[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/mentions-legales",
        element: <MentionsLegales />,
    },
    {
        path: "/tarifs",
        element: <h1>Route : Page Tarifs</h1>,
    },
    {
        path: "/contacts",
        element: <h1>Route : Page Contact</h1>,
    },
    {
        path: "/blog",
        element: <h1>Route : Page Blog</h1>,
    },
    {
        path: "/panier",
        element: <h1>Route : Page Panier</h1>,
    },
    {
        path: "/compte",
        element: <h1>Route : Page Compte</h1>,
    },
    {
        path: "/qui-suis-je",
        element: <h1>Route : Page Qui-suis-je</h1>,
    },
    {
        path: "/portfolio",
        element: <h1>Route : Page Portfolio</h1>,
    },
    {
        path: "/cgv",
        element: <h1>Route : Page CGV</h1>,
    },
    {
        path: "/faq",
        element: <h1>Route : Page faq</h1>,
    },
    /* Route des SubMenu */
    {
        path: "/portraits-corporates",
        element: <h1>Route : portraits-corporates</h1>,
    },
    {
        path: "/portraits-lifestyles",
        element: <h1>Route : portraits-lifestyles</h1>,
    },
    {
        path: "/portraits-mariages",
        element: <h1>Route : Portraits-Mariages</h1>,
    },
]

export default ListDataRouter