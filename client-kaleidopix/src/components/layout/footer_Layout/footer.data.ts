/* Import des composants Router */
import router from "../../../router/router";
import routerExt from "../../../router/routerExt.router";

/* Import des Types */
import type { Footer_data_Type } from "../../../types/layout/footer.data.type";

function footer_Data(): Footer_data_Type {
    return [
        {
            nameMenu: "A PROPOS",
            nameSubMenu: [
                { title: "Qui suis-je", link: "#" },
                { title: "Portfolio", link: "#" },
                { title: "Blog", link: "#" },
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
                { title: "Mentions légales", link: "#" },
                { title: "CGV", link: router[6].path + "#top" },
            ],
        },
    ];
}

export { footer_Data };
