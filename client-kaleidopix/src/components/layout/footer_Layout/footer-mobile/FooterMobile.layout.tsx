/* Import des modules CSS */
import css from "./footerMobile.module.css";
import style from "../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { SubMenuFooterMobile_Element } from "./elements/SubMenuFooterMobile.element";

/* Import des Datas */
import { footer_Data } from "../footer.data";

/* Import des Types */
import type { Footer_data_Type } from "../../../../types/layout/footer/footer.data.type";

function FooterMobile_Layout() {
    const dataFooter: Footer_data_Type = footer_Data();
    return (
        <section className={`FooterMobile_Layout ${css.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={css.TitleH2}>
                    <span className={css.PowerSpan}>POWER</span>
                    <span className={css.WattSpan}>WATT</span>
                    <span className={css.NumberSpan}>34</span>
                </h2>
            </header>

            <nav className={css.ContainerNavFooter}>
                {/* Nav 1 : A propos */}
                <SubMenuFooterMobile_Element dataMenu={dataFooter[0]} />

                {/* Nav 2 : Réseaux */}
                <SubMenuFooterMobile_Element dataMenu={dataFooter[1]} />

                {/* Nav 3 : Contact */}
                <SubMenuFooterMobile_Element dataMenu={dataFooter[2]} />
            </nav>
        </section>
    );
}

export { FooterMobile_Layout };
