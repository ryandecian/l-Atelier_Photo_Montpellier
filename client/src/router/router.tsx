import { ReactNode } from "react"

/* Liste des pages en import */
/* Page Frontend vérrouillée */
import AdminGestionAlbumPage from "../pages/Private/Admin/AdminGestionAlbumPage/AdminGestionAlbumPage";
import AdminPage from "../pages/Private/Admin/AdminPage/AdminPage";
import AllUserSystemePage from "../pages/Private/Admin/AllUserSystemePage/AllUserSystemePage";
import ComptePage from "../pages/Private/Users/ComptePage/ComptePage";
import DataUserPage from "../pages/Private/All/DataUser/DataUserPage";
import EditAlbumAdminPage from "../pages/Private/Admin/EditAlbumAdminPage/EditAlbumAdminPage";
import EditUserAdminPage from "../pages/Private/Admin/EditUserAdminPage/EditUserAdminPage";
import EditUserPage from "../pages/Private/All/EditUserPage/EditUserPage";
import UserGestionAlbumPage from "../pages/Private/Users/UserGestionAlbumPage/UserGestionAlbumPage";

/* Page Frontend public */
import blogRouter from "./blogRouter";
import CGVPage from "../pages/Public/CGVPage/CGVPage";
import ContactPage from "../pages/Public/ContactPage/ContactPage";
import Error404 from "../pages/Public/Error404Page/Error404Page";
import HomePage from "../pages/Public/HomePage/HomePage";
import LoginPage from "../pages/Public/LoginPage/LoginPage";
import MentionsLegalesPage from "../pages/Public/MentionsLegalesPage/MentionsLegalesPage";
import PortfolioPage from "../pages/Public/PortfolioPage/PortfolioPage";
import PortraitCorporatePage from "../pages/Public/PortraitCorporatePage/PortraitCorporatePage";
import PortraitDuoPage from "../pages/Public/PortraitDuoPage/PortraitDuoPage";
import PortraitGrossessePage from "../pages/Public/PortraitGrosssessePage/PortraitGrossessePage";
import PortraitHobbyPage from "../pages/Public/PortraitHobbyPage/PortraitHobbyPage";
import PortraitLifeStylePage from "../pages/Public/PortraitLifeStylePage/PortraitLifeStylePage";
import PortraitMariagePage from "../pages/Public/PortraitMariagePage/PortraitMariagePage";
import PortraitNouveauNePage from "../pages/Public/PotraitNouveauNePage/PortraitNouveauNePage";
import PortraitSoloPage from "../pages/Public/PortraitSoloPage/PortraitSoloPage";
import PortraitFamillePage from "../pages/Public/PortraitFamillePage/PortraitFamillePage";
import PrestationPage from "../pages/Public/PrestationPage/PrestationPage";
import RegisterPage from "../pages/Public/RegisterPage/RegisterPage";
import ResetPasswordPage from "../pages/Public/ResetPasswordPage/ResetPasswordPage";
import ResetPasswordConfirmPage from "../pages/Public/ResetPasswordConfirmPage/ResetPasswordConfirmPage";
import QuiSuisJePage from "../pages/Public/QuiSuisJePage/QuiSuisJePage";

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
    /* {ListDataRouter[11].path} ou {`${ListDataRouter[11].path}#PortraitCorporateRoot`} */
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
        path: "/admin/all-user-systeme",
        element: <AllUserSystemePage />,
    },
    /* {ListDataRouter[24].path} */
    {
        path: "/compte/user",
        element: <DataUserPage />,
    },
    /* {ListDataRouter[25].path} */
    {
        path: "/compte/user/edit-user",
        element: <EditUserPage />,
    },
    /* {ListDataRouter[26].path} */
    {
        path: "/admin/user",
        element: <DataUserPage />,
    },
    /* {ListDataRouter[27].path} */
    {
        path: "/admin/user/edit-user",
        element: <EditUserPage />,
    },
    /* {ListDataRouter[28].path} */
    {
        path: "/admin/all-user-systeme/edit-user/:id",
        element: <EditUserAdminPage />,
    },
    /* {ListDataRouter[29].path} */
    {
        path: "/reset-password",
        element: <ResetPasswordPage />,
    },
    /* {ListDataRouter[30].path} */
    {
        path: "/reset-password/confirm",
        element: <ResetPasswordConfirmPage />,
    },
    /* {ListDataRouter[31].path} */
    {
        path: "/register",
        element: <RegisterPage />,
    },
    /* {ListDataRouter[32].path} */
    {
        path: "/compte/album",
        element: <UserGestionAlbumPage />,
    },
    /* {ListDataRouter[33].path} */
    {
        path: "/admin/album",
        element: <AdminGestionAlbumPage />,
    },
    /* {ListDataRouter[34].path} */
    {
        path: "/admin/album/edit-album/:id",
        element: <EditAlbumAdminPage />,
    },
]

export default ListDataRouter;
