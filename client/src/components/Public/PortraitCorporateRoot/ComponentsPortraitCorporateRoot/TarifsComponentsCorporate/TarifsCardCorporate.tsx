import css from './TarifsCardCorporate.module.css';
import { PrestationType } from '../../../../../types/Prestations.type';

type FormuleCorporateType = {
    confiance: string;
    flash: string;
    classique: string;
    signature: string;
};

type TarifCardRootProps = {
    tarifs: PrestationType;
    id: string;
    mailtoLink: FormuleCorporateType;
};

function TarifCardCorporate({ tarifs, mailtoLink, id }: TarifCardRootProps) {
    return (
        <section id={id} className={css.container}>
            {/* Convertie Prestations en un tableau d'entrée : [["essentiel", { ... }], ["confort", { ... }], ["premium", { ... }]] */}
            {/* On parcourt avec maps chaque paire clé/valeur exemple formulaKey = essentiel et data = {} */}
            {Object.entries(tarifs).map(([formulaKey, data]) => {
                /* Transforme la première lettre en majuscule : essentiel = Essentiel */
                const formulaName = formulaKey.charAt(0).toUpperCase() + formulaKey.slice(1);
                const key = formulaKey as keyof FormuleCorporateType; // ✅ Cast pour accéder proprement à mailtoLink

                return (
                    <article
                        key={formulaKey}
                        className={`${css.card} ${formulaKey === 'premium' ? css.premium : ''}`}
                    >
                        <h3 className={css.header}>{formulaName}</h3>
                        <ul className={css.list}>
                            {Object.entries(data).map(([lineKey, line]) => (
                                <li key={lineKey} className={css.item}>
                                    <span className={css.label}>{line.value1}</span>
                                    <span className={css.value}>{line.value2}</span>
                                </li>
                            ))}
                        </ul>
                        <a href={`mailto:${mailtoLink[key]}`} className={css.button}>
                            Plus d'infos
                        </a>
                    </article>
                );
            })}
        </section>
    );
}

export default TarifCardCorporate;
