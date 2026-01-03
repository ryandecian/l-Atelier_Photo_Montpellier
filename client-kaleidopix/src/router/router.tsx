/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import Home_Page from "../pages/public/home_Page/Home.page";

const router: Router_Type = [
    /* {router[0].path} */
    {
        path: "/",
        element: <Home_Page />,
    },
    /* {router[1].path} : page parent = children[0] */
    {
        path: "#",
        children: [
            /* {router[1]!.children![0]!.path} : page parent */
            {
                path: "parent",
                element: <h1>parent</h1>,
            },
            /* {router[1]!.children![1]!.path} */
            {
                path: "#",
                element: <h1>test</h1>,
            },
        ],
    },
]

export default router;
