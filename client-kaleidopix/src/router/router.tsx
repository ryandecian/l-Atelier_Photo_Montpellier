/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import Blog_Page from "../pages/public/blog_Page/Blog.page";
import Blog_20250917_Page from "../pages/public/blog_Page/liste-blog_Page/Blog_20250917.page";
import Blog_20251127_Page from "../pages/public/blog_Page/liste-blog_Page/Blog_20251127.page";
import Contact_Page from "../pages/public/contact_Page/Contact.page";
import Home_Page from "../pages/public/home_Page/Home.page";
import VideoCorporate_Page from "../pages/public/videoCorporate_Page/VideoCorporate.page";
import PhotoCorporate_Page from "../pages/public/photoCorporate_Page/PhotoCorporate.page";

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
]

export default router;
