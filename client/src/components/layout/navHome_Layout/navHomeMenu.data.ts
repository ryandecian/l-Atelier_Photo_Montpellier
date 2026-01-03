/* Import des composants Router */
import ListDataRouter from "../../../router/router";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../types/layout/navMenu.data.type";

function navHomeMenu_Data(): NavMenu_data_Type {
    return {
        dataSubMenu: [
            {
                nameMenu: "PRESTATIONS",
                nameSubMenu: [
                    { title: "Corporate", link: ListDataRouter[11].path },
                    { title: "LifeStyle", link: ListDataRouter[12].path },
                    { title: "Mariage", link: ListDataRouter[13].path },
                    { title: "Vidéo", link: ListDataRouter[36].path },
                ],
            },
        ],
        dataMenu: [
            { nameMenu: "TARIFS", link: ListDataRouter[2].path },
            { nameMenu: "CONTACT", link: ListDataRouter[3].path },
            { nameMenu: "PORTFOLIO", link: ListDataRouter[8].path },
            { nameMenu: "COMPTE", link: ListDataRouter[6].path },
        ],
    };
}

export { navHomeMenu_Data };
