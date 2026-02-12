/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../types/layout/navMenu.data.type";

function navMenu_Data(): NavMenu_data_Type {
    return {
        dataSubMenu: [
            {
                nameMenu: "PRESTATIONS",
                nameSubMenu: [
                    { title: "Vidéos Corporate", link: router[1].path },
                    { title: "Photos Corporate", link: router[2].path },
                ],
            },
            {
                nameMenu: "A PROPOS",
                nameSubMenu: [
                    { title: "Expertise Video", link: router[7].path + "#top" },
                    { title: "Expertise Photos", link: router[8].path + "#top" },
                ],
            },
        ],
        dataMenu: [
            { nameMenu: "TARIFS", link: "#" },
            { nameMenu: "PORTFOLIO", link: "#" },
            { nameMenu: "CONTACT", link: router[3].path },
        ],
    };
}

export { navMenu_Data };
