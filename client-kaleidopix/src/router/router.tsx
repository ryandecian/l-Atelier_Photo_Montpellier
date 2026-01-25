/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import Contact_Page from "../pages/public/contact_Page/Contact.page";
import Home_Page from "../pages/public/home_Page/Home.page";
import VideoCorporate_Page from "../pages/public/videoCorporate_Page/VideoCorporate.page";

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
        // element: <PhotoCorporate_Page />,
    },
    /* {router[3].path} */
    {
        path: "/contact",
        element: <Contact_Page />,
    },
    /* {router[4].path} : page parent = children[0] */
    {
        path: "#",
        children: [
            /* {router[4]!.children![0]!.path} : page parent */
            {
                path: "parent",
                element: <h1>parent</h1>,
            },
            /* {router[4]!.children![1]!.path} */
            {
                path: "#",
                element: <h1>test</h1>,
            },
        ],
    },
]

export default router;
