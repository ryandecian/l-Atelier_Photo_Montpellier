/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../types/layout/navMenu.data.type";

function navHomeMenu_Data(): NavMenu_data_Type {
    return {
        dataSubMenu: [
            {
                nameMenu: "PRESTATIONS",
                nameSubMenu: [
                    { title: "Corporate", link: router[11].path },
                    { title: "LifeStyle", link: router[12].path },
                    { title: "Mariage", link: router[13].path },
                    { title: "Vidéo", link: router[36].path },
                ],
            },
        ],
        dataMenu: [
            { nameMenu: "TARIFS", link: router[2].path },
            { nameMenu: "CONTACT", link: router[3].path },
            { nameMenu: "PORTFOLIO", link: router[8].path },
            { nameMenu: "COMPTE", link: router[6].path },
        ],
    };
}

export { navHomeMenu_Data };
