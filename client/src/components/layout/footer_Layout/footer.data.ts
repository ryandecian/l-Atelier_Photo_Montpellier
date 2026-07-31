/* Import des composants Router */
import router from "../../../router/router";
import { routerExt } from "../../../router/routerExt.router";

/* Import des Types */
import type { Footer_data_Type } from "./types/footer.data.type";

function footer_Data(): Footer_data_Type {
    return [
        {
            nameMenu: "A PROPOS",
            nameSubMenu: [
                { title: "Qui suis-je", link: router[7].path },
                { title: "Portfolio", link: router[8].path },
                { title: "Blog", link: router[4].path },
            ],
        },
        {
            nameMenu: "RESEAUX",
            nameSubMenu: [
                { title: "Instagram", link: routerExt.instagram },
                { title: "Facebook", link: routerExt.facebook },
                { title: "YouTube", link: routerExt.youtube },
            ],
        },
        {
            nameMenu: "POLITIQUE & TERMES",
            nameSubMenu: [
                { title: "Contact", link: router[3].path + "#top" },
                { title: "Mentions légales", link: router[1].path + "#top" },
                { title: "CGV", link: router[9].path + "#top" },
            ],
        },
    ];
}

export { footer_Data };
