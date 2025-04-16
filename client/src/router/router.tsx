import { ReactNode } from "react"

/* Liste des pages en import */
import HomePage from "../pages/HomePage/HomePage";
import MentionsLegalesPage from "../pages/MentionsLegalesPage/MentionsLegalesPage";
import LifeStylePage from "../pages/LifeStylePage/LifeStylePage";
import Error404 from "../pages/Error404Page/Error404Page";
import CGVPage from "../pages/CGVPage/CGVPage";
import MariagePage from "../pages/MariagePage/MariagePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import ComptePage from "../pages/ComptePage/ComptePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import UserSystemePage from "../pages/UserSystemePage/UserSystemePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import CorporatePage from "../pages/CorporatePage/CorporatePage";

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

    /* Contact */
    emailAnne: string
    phoneAnne: string
    phoneHebergeur: string

    /* Article de loi */

    /* Article 6 de la loi n° 2004-575 du 21 juin 2004 */
    loi1: string
    loi2: string
    loi3: string
}

const LinkExt: LinkExtType = {
    instagram: "https://www.instagram.com/atelier_photo_montpellier",
    facebook: "https://www.facebook.com",
    youtube: "https://www.youtube.com",
    emailAnne: "mailto:photo34000@gmail.com",
    phoneAnne: "tel:+33652677333",
    loi1: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164#LEGIARTI000042038977",
    loi2: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082",
    loi3: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460",
    phoneHebergeur: "tel:+33444446040"
}

const ListDataRouter: RouterItemsType[] = [
    /* {ListDataRouter[0].path} */
    {
        path: "/",
        element: <HomePage />,
    },
    /* {ListDataRouter[1].path} */
    {
        path: "/mentions-legales",
        element: <MentionsLegalesPage />,
    },
    /* {ListDataRouter[2].path} */
    {
        path: "/tarifs",
        element: <h1>Route : Page Tarifs</h1>,
    },
    /* {ListDataRouter[3].path} */
    {
        path: "/contacts",
        element: <ContactPage />,
    },
    /* {ListDataRouter[4].path} */
    {
        path: "/blog",
        element: <h1>Route : Page Blog</h1>,
    },
    /* {ListDataRouter[5].path} */
    {
        path: "/panier",
        element: <h1>Route : Page Panier</h1>,
    },
    /* {ListDataRouter[6].path} */
    {
        path: "/compte",
        element: <ComptePage />,
    },
    /* {ListDataRouter[7].path} */
    {
        path: "/qui-suis-je",
        element: <h1>Route : Page Qui-suis-je</h1>,
    },
    /* {ListDataRouter[8].path} */
    {
        path: "/portfolio",
        element: <h1>Route : Page Portfolio</h1>,
    },
    /* {ListDataRouter[9].path} */
    {
        path: "/conditions-generales-de-vente",
        element: <CGVPage />,
    },
    /* {ListDataRouter[10].path} */
    {
        path: "/faq",
        element: <h1>Route : Page faq</h1>,
    },
    /* Route des SubMenu */
    /* {ListDataRouter[11].path} */
    {
        path: "/portraits-corporates",
        element: <CorporatePage />,
    },
    /* {ListDataRouter[12].path} */
    {
        path: "/portraits-lifestyles",
        element: <LifeStylePage />,
    },
    /* {ListDataRouter[13].path} */
    {
        path: "/portraits-mariages",
        element: <MariagePage />,
    },
    /* {ListDataRouter[14].path} */
    {
        path: "/portraits-solos",
        element: <h1>Route : Portraits-Solos</h1>,
    },
    /* {ListDataRouter[15].path} */
    {
        path: "/portraits-couples",
        element: <h1>Route : Portraits-Couples</h1>,
    },
    /* {ListDataRouter[16].path} */
    {
        path: "/portraits-familles-amis",
        element: <h1>Route : Portraits familles - amis</h1>,
    },
    /* {ListDataRouter[17].path} */
    {
        path: "/portraits-nouveaux-nes",
        element: <h1>Route : Portraits nouveaux nés</h1>,
    },
    /* {ListDataRouter[18].path} */
    {
        path: "/portraits-grossesses",
        element: <h1>Route : Portraits grossesses</h1>,
    },
    /* {ListDataRouter[19].path} */
    {
        path: "/portraits-hobbies",
        element: <h1>Route : Portraits Hobbies</h1>,
    },
    /* {ListDataRouter[20].path} */
    {
        path: "*",
        element: <Error404 />,
    },
    /* {ListDataRouter[21].path} */
    {
        path: "/admin",
        element: <AdminPage />,
    },
    /* {ListDataRouter[22].path} */
    {
        path: "/login",
        element: <LoginPage />,
    },
    /* {ListDataRouter[23].path} */
    {
        path: "/admin/user-systeme",
        element: <UserSystemePage />,
    }
]
export { LinkExt };
export default ListDataRouter;
