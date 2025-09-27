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
import InsertAlbumAdminPage from "../pages/Private/Admin/InsertAlbumAdminPage/InsertAlbumAdminPage";
import UserGestionAlbumPage from "../pages/Private/Users/UserGestionAlbumPage/UserGestionAlbumPage";

/* Page Frontend public */
import blogRouter from "./blogRouter";
import CGVPage from "../pages/Ppublic/cgv_Page/CGV.page";
import ContactPage from "../pages/Ppublic/contact_Page/Contact.page";
import Error404 from "../pages/Ppublic/error404_Page/Error404.page";
import HomePage from "../pages/Ppublic/home_Page/Home.page";
import LoginPage from "../pages/Ppublic/login_Page/Login.page";
import MentionsLegalesPage from "../pages/Ppublic/mentions-legales_Page/MentionsLegales.page";
import PortfolioPage from "../pages/Ppublic/portfolio_Page/Portfolio.page";
import PortraitCorporatePage from "../pages/Ppublic/portrait-corporate_Page/PortraitCorporate.page";
import PortraitDuoPage from "../pages/Ppublic/portrait-duo_Page/PortraitDuo.page";
import PortraitGrossessePage from "../pages/Ppublic/portrait-grosssesse_Page/PortraitGrossesse.page";
import PortraitHobbyPage from "../pages/Ppublic/portrait-hobby_Page/PortraitHobby.page";
import PortraitLifeStylePage from "../pages/Ppublic/portrait-lifestyle_Page/PortraitLifeStyle.page";
import PortraitMariagePage from "../pages/Ppublic/portrait-mariage_Page/PortraitMariage.page";
import PortraitNouveauNePage from "../pages/Ppublic/portrait-nouveau-ne_Page/PortraitNouveauNe.page";
import PortraitSoloPage from "../pages/Ppublic/portrait-solo_Page/PortraitSolo.page";
import PortraitFamillePage from "../pages/Ppublic/portrait-famille_Page/PortraitFamille.page";
import PrestationPage from "../pages/Ppublic/prestation_Page/Prestation.page";
import RegisterPage from "../pages/Ppublic/register_Page/Register.page";
import ResetPasswordPage from "../pages/Ppublic/reset-password_Page/ResetPassword.page";
import ResetPasswordConfirmPage from "../pages/Ppublic/reset-password-confirm_Page/ResetPasswordConfirm.page";
import QuiSuisJePage from "../pages/Ppublic/qui-suis-je_Page/QuiSuisJe.page";

/**
 * Utilisation : 
 * {ListDataRouter[0].path}S
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
    /* {ListDataRouter[35].path} */
    {
        path: "/admin/album/create-album",
        element: <InsertAlbumAdminPage />,
    },
]

export default ListDataRouter;
