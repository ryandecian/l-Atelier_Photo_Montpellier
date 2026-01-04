/* Import des composants Router */
// import router from "../../../router/router";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../types/layout/navMenu.data.type";

function navHomeMenu_Data(): NavMenu_data_Type {
    return {
        dataSubMenu: [
            {
                nameMenu: "PRESTATIONS",
                nameSubMenu: [
                    // { title: "Corporate", link: router[11].path },
                    { title: "Vidéos Corporate", link: "#" },
                    { title: "Photos Corporate", link: "#" },
                ],
            },
        ],
        dataMenu: [
            { nameMenu: "CONTACT", link: "#" },
            { nameMenu: "PORTFOLIO", link: "#" },
            { nameMenu: "A PROPOS", link: "#" },
        ],
    };
}

export { navHomeMenu_Data };
