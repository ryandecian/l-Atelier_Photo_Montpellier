import { ReactNode } from "react"

/* Liste des pages en import */
/* Page Frontend vérrouillée */
import AdminPage from "../pages/AdminPage/AdminPage";
import ComptePage from "../pages/ComptePage/ComptePage";
import UserSystemePage from "../pages/UserSystemePage/UserSystemePage";

/* Page Frontend public */
import blogRouter from "./blogRouter";
import CGVPage from "../pages/CGVPage/CGVPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import Error404 from "../pages/Error404Page/Error404Page";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MentionsLegalesPage from "../pages/MentionsLegalesPage/MentionsLegalesPage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import PortraitCorporatePage from "../pages/PortraitCorporatePage/PortraitCorporatePage";
import PortraitDuoPage from "../pages/PortraitDuoPage/PortraitDuoPage";
import PortraitGrossessePage from "../pages/PortraitGrosssessePage/PortraitGrossessePage";
import PortraitHobbyPage from "../pages/PortraitHobbyPage/PortraitHobbyPage";
import PortraitLifeStylePage from "../pages/PortraitLifeStylePage/PortraitLifeStylePage";
import PortraitMariagePage from "../pages/PortraitMariagePage/PortraitMariagePage";
import PortraitNouveauNePage from "../pages/PotraitNouveauNePage/PortraitNouveauNePage";
import PortraitSoloPage from "../pages/PortraitSoloPage/PortraitSoloPage";
import PortraitFamillePage from "../pages/PortraitFamillePage/PortraitFamillePage";
import PrestationPage from "../pages/PrestationPage/PrestationPage";
import QuiSuisJePage from "../pages/QuiSuisJePage/QuiSuisJePage";

/**
 * Utilisation : 
 * {ListDataRouter[0].path}
 * {LinkExt.instagram}
 */

interface RouterItemsType {
    path: string
    element?: ReactNode
    children?: RouterItemsType[]
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
        element: <PrestationPage />,
    },
    /* {ListDataRouter[3].path} */
    {
        path: "/contacts",
        element: <ContactPage />,
    },
    /* {ListDataRouter[4].path} */
    {
        path: "/blog",
        children: blogRouter,
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
        element: <QuiSuisJePage />
    },
    /* {ListDataRouter[8].path} */
    {
        path: "/portfolio",
        element: <PortfolioPage />,
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
        path: "/portrait-corporate",
        element: <PortraitCorporatePage />,
    },
    /* {ListDataRouter[12].path} */
    {
        path: "/portrait-lifestyle",
        element: <PortraitLifeStylePage />,
    },
    /* {ListDataRouter[13].path} */
    {
        path: "/portrait-mariage",
        element: <PortraitMariagePage />,
    },
    /* {ListDataRouter[14].path} */
    {
        path: "/portrait-solo",
        element: <PortraitSoloPage />,
    },
    /* {ListDataRouter[15].path} */
    {
        path: "/portrait-duo",
        element: <PortraitDuoPage />,
    },
    /* {ListDataRouter[16].path} */
    {
        path: "/portrait-famille-ami",
        element: <PortraitFamillePage />,
    },
    /* {ListDataRouter[17].path} */
    {
        path: "/portrait-nouveau-ne",
        element: <PortraitNouveauNePage />,
    },
    /* {ListDataRouter[18].path} */
    {
        path: "/portrait-grossesse",
        element: <PortraitGrossessePage />,
    },
    /* {ListDataRouter[19].path} */
    {
        path: "/portrait-hobby",
        element: <PortraitHobbyPage />,
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

export default ListDataRouter;
