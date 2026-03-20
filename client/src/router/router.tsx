/* Import des composants Router */
import blog_Router from "./blog.router";

/* Liste des pages en import */
/* Page Frontend vérrouillée */
import AdminGestionAlbum_Page from "../pages/private/admin/admin-gestion-album_Page/AdminGestionAlbum.page";
import Admin_Page from "../pages/private/admin/admin_Page/Admin.page";
import AllUserSysteme_Page from "../pages/private/admin/all-user-systeme_Page/AllUserSysteme.page";
import Compte_Page from "../pages/private/users/compte_Page/Compte.page";
import DataUser_Page from "../pages/private/all/data-user_Page/DataUser.page";
import EditAlbumAdmin_Page from "../pages/private/admin/edit-album-admin_Page/EditAlbumAdmin.page";
import EditUserAdmin_Page from "../pages/private/admin/edit-user-admin_Page/EditUserAdmin.page";
import EditUser_Page from "../pages/private/all/edit-user_Page/EditUser.page";
import InsertAlbumAdmin_Page from "../pages/private/admin/insert-album-admin_Page/InsertAlbumAdmin.page";
import UserGestionAlbum_Page from "../pages/private/users/user-gestion-album_Page/UserGestionAlbum.page";

/* Page Frontend public */
import CGVPage from "../pages/public/cgv_Page/CGV.page";
import ContactPage from "../pages/public/contact_Page/Contact.page";
import Error404 from "../pages/public/error404_Page/Error404.page";
import HomePage from "../pages/public/home_Page/Home.page";
import LoginPage from "../pages/public/login_Page/Login.page";
import MentionsLegalesPage from "../pages/public/mentions-legales_Page/MentionsLegales.page";
import PortfolioPage from "../pages/public/portfolio_Page/Portfolio.page";
import PortraitCorporatePage from "../pages/public/portrait-corporate_Page/PortraitCorporate.page";
import PortraitDuoPage from "../pages/public/portrait-duo_Page/PortraitDuo.page";
import PortraitGrossessePage from "../pages/public/portrait-grosssesse_Page/PortraitGrossesse.page";
import PortraitHobbyPage from "../pages/public/portrait-hobby_Page/PortraitHobby.page";
import PortraitLifeStylePage from "../pages/public/portrait-lifestyle_Page/PortraitLifeStyle.page";
import PortraitMariagePage from "../pages/public/portrait-mariage_Page/PortraitMariage.page";
import PortraitNouveauNePage from "../pages/public/portrait-nouveau-ne_Page/PortraitNouveauNe.page";
import PortraitSoloPage from "../pages/public/portrait-solo_Page/PortraitSolo.page";
import PortraitFamillePage from "../pages/public/portrait-famille_Page/PortraitFamille.page";
import PrestationPage from "../pages/public/prestation_Page/Prestation.page";
import RegisterPage from "../pages/public/register_Page/Register.page";
import ResetPasswordPage from "../pages/public/reset-password_Page/ResetPassword.page";
import ResetPasswordConfirmPage from "../pages/public/reset-password-confirm_Page/ResetPasswordConfirm.page";
import QuiSuisJePage from "../pages/public/qui-suis-je_Page/QuiSuisJe.page";
import Video_Page from "../pages/public/video_Page/Video.page";

/**
 * Utilisation : 
 * {router[0].path}
 */

type Router_Type = {
    path: string
    element?: React.ReactNode
    children?: Router_Type[]
}

const router: Router_Type[] = [
    /* {router[0].path} */
    {
        path: "/",
        element: <HomePage />,
    },
    /* {router[1].path} */
    {
        path: "/mentions-legales",
        element: <MentionsLegalesPage />,
    },
    /* {router[2].path} */
    {
        path: "/tarifs",
        element: <PrestationPage />,
    },
    /* {router[3].path} */
    {
        path: "/contacts",
        element: <ContactPage />,
    },
    /* {router[4].path} */
    {
        path: "/blog",
        children: blog_Router,
    },
    /* {router[5].path} */
    {
        path: "/panier",
        element: <h1>Route : Page Panier</h1>,
    },
    /* {router[6].path} */
    {
        path: "/compte",
        element: <Compte_Page />,
    },
    /* {router[7].path} */
    {
        path: "/qui-suis-je",
        element: <QuiSuisJePage />
    },
    /* {router[8].path} */
    {
        path: "/portfolio",
        element: <PortfolioPage />,
    },
    /* {router[9].path} */
    {
        path: "/conditions-generales-de-vente",
        element: <CGVPage />,
    },
    /* {router[10].path} */
    {
        path: "/faq",
        element: <h1>Route : Page faq</h1>,
    },
    /* Route des SubMenu */
    /* {router[11].path} */
    {
        path: "/portrait-corporate",
        element: <PortraitCorporatePage />,
    },
    /* {router[12].path} */
    {
        path: "/portrait-lifestyle",
        element: <PortraitLifeStylePage />,
    },
    /* {router[13].path} */
    {
        path: "/portrait-mariage",
        element: <PortraitMariagePage />,
    },
    /* {router[14].path} */
    {
        path: "/portrait-solo",
        element: <PortraitSoloPage />,
    },
    /* {router[15].path} */
    {
        path: "/portrait-duo",
        element: <PortraitDuoPage />,
    },
    /* {router[16].path} */
    {
        path: "/portrait-famille-ami",
        element: <PortraitFamillePage />,
    },
    /* {router[17].path} */
    {
        path: "/portrait-nouveau-ne",
        element: <PortraitNouveauNePage />,
    },
    /* {router[18].path} */
    {
        path: "/portrait-grossesse",
        element: <PortraitGrossessePage />,
    },
    /* {router[19].path} */
    {
        path: "/portrait-hobby",
        element: <PortraitHobbyPage />,
    },
    /* {router[20].path} */
    {
        path: "*",
        element: <Error404 />,
    },
    /* {router[21].path} */
    {
        path: "/admin",
        element: <Admin_Page />,
    },
    /* {router[22].path} */
    {
        path: "/login",
        element: <LoginPage />,
    },
    /* {router[23].path} */
    {
        path: "/admin/all-user-systeme",
        element: <AllUserSysteme_Page />,
    },
    /* {router[24].path} */
    {
        path: "/compte/user",
        element: <DataUser_Page />,
    },
    /* {router[25].path} */
    {
        path: "/compte/user/edit-user",
        element: <EditUser_Page />,
    },
    /* {router[26].path} */
    {
        path: "/admin/user",
        element: <DataUser_Page />,
    },
    /* {router[27].path} */
    {
        path: "/admin/user/edit-user",
        element: <EditUser_Page />,
    },
    /* {router[28].path} */
    {
        path: "/admin/all-user-systeme/edit-user/:id",
        element: <EditUserAdmin_Page />,
    },
    /* {router[29].path} */
    {
        path: "/reset-password",
        element: <ResetPasswordPage />,
    },
    /* {router[30].path} */
    {
        path: "/reset-password/confirm",
        element: <ResetPasswordConfirmPage />,
    },
    /* {router[31].path} */
    {
        path: "/register",
        element: <RegisterPage />,
    },
    /* {router[32].path} */
    {
        path: "/compte/album",
        element: <UserGestionAlbum_Page />,
    },
    /* {router[33].path} */
    {
        path: "/admin/album",
        element: <AdminGestionAlbum_Page />,
    },
    /* {router[34].path} */
    {
        path: "/admin/album/edit-album/:id",
        element: <EditAlbumAdmin_Page />,
    },
    /* {router[35].path} */
    {
        path: "/admin/album/create-album",
        element: <InsertAlbumAdmin_Page />,
    },
    /* {router[36].path} */
    {
        path: "/video",
        element: <Video_Page />,
    },
]

export default router;
