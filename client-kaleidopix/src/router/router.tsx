/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import Blog_Page from "../pages/public/blog_Page/Blog.page";
import Blog_20250917_Page from "../pages/public/blog_Page/liste-blog_Page/Blog_20250917.page";
import Blog_20251127_Page from "../pages/public/blog_Page/liste-blog_Page/Blog_20251127.page";
import CGV_Page from "../pages/public/cgv_Page/CGV.page";
import Contact_Page from "../pages/public/contact_Page/Contact.page";
import ExpertisePhoto_Page from "../pages/public/expertisePhoto_Page/ExpertisePhoto.page";
import ExpertiseVideo_Page from "../pages/public/expertiseVideo_Page/ExpertiseVideo.page";
import Home_Page from "../pages/public/home_Page/Home.page";
import Tarif_Page from "../pages/public/tarif_Page/Tarif.page";
import VideoCorporate_Page from "../pages/public/videoCorporate_Page/VideoCorporate.page";
import PhotoCorporate_Page from "../pages/public/photoCorporate_Page/PhotoCorporate.page";
import QuiSuisJe_Page from "../pages/public/quiSuisJe_Page/QuiSuisJe.page";

const router: Router_Type = [
    /* {router[0].path} */
    {
        path: "/",
        element: <Home_Page />,
    },
    /* {router[1].path} */
    {
        path: "/video-corporate",
        element: <VideoCorporate_Page />,
    },
    /* {router[2].path} */
    {
        path: "/photo-corporate",
        element: <PhotoCorporate_Page />,
    },
    /* {router[3].path} */
    {
        path: "/contact",
        element: <Contact_Page />,
    },
    /* {router[4].path} : page parent = children[0] */
    {
        path: "/blog",
        children: [
            /* {router[4]!.children![0]!.path} : page parent */
            {
                path: "/blog",
                element: <Blog_Page />,
            },
            /* {router[4].children?.[1].path} */
            {
                path: "/blog/2025-09-17",
                element: <Blog_20250917_Page />,
            },
            /* {router[4].children?.[2].path} */
            {
                path: "/blog/2025-11-27",
                element: <Blog_20251127_Page />,
            },
        ],
    },
    /* {router[5].path} */
    {
        path: "/qui-suis-je",
        element: <QuiSuisJe_Page />,
    },
    /* {router[6].path} */
    {
        path: "/cgv",
        element: <CGV_Page />,
    },
    /* {router[7].path} */
    {
        path: "/expertise-video",
        element: <ExpertiseVideo_Page />,
    },
    /* {router[8].path} */
    {
        path: "/expertise-photo",
        element: <ExpertisePhoto_Page />,
    },
    /* {router[9].path} */
    {
        path: "/tarif",
        element: <Tarif_Page />,
    },
]

export default router;
