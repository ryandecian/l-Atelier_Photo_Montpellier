/* Import des composants Router */
import router from "../../../router/router";
import routerExt from "../../../router/routerExt.router";

/* Import des Types */
import type { Footer_data_Type } from "../../../types/layout/footer/footer.data.type";

function footer_Data(): Footer_data_Type {
    return [
        {
            nameMenu: "A PROPOS",
            nameSubMenu: [
                { title: "Nos services", link: "#" },
                { title: "Nos valeurs", link: "#" },
                { title: "Notre atelier", link: "#" },
            ],
        },
        {
            nameMenu: "RESEAUX",
            nameSubMenu: [
                { title: "Instagram", link: routerExt.instagram },
                { title: "Facebook", link: routerExt.facebook },
                { title: "Google Maps", link: routerExt.adressPowerWatt34 },
            ],
        },
        {
            nameMenu: "POLITIQUE & TERMES",
            nameSubMenu: [
                { title: "Contact", link: router[1].path + "#top" },
                { title: "Mentions légales", link: router[5].path + "#top" },
                { title: "CGV", link: router[6].path + "#top" },
            ],
        },
    ];
}

export { footer_Data };
