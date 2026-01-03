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
                    { title: "Corporate", link: "#" },
                    { title: "LifeStyle", link: "#" },
                    { title: "Mariage", link: "#" },
                    { title: "Vidéo", link: "#" },
                ],
            },
        ],
        dataMenu: [
            { nameMenu: "TARIFS", link: "#" },
            { nameMenu: "CONTACT", link: "#" },
            { nameMenu: "PORTFOLIO", link: "#" },
            { nameMenu: "COMPTE", link: "#" },
        ],
    };
}

export { navHomeMenu_Data };
