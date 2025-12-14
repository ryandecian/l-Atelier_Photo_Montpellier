/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */

const router: Router_Type = [
    /* {router[0].path} */
    {
        path: "/",
        element: <Home_Page />,
    },
]

export default router;
