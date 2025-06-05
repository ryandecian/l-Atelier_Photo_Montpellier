import css from './TarifsCardRoot.module.css';
import PrestationType from '../../types/Prestations.type';
import externalLinks from '../../constants/externalLinks';

type TarifCardRootProps = {
  tarifs: PrestationType;
  id: string;
};

function TarifCardRoot({tarifs, id}: TarifCardRootProps) {
  return (
    <section id={id} className={css.container}>
      {/* Convertie Prestations en un tableau d'entrée : [["essentiel", { ... }], ["confort", { ... }], ["premium", { ... }]] */}
      {/* On parcourt avec maps chaque paire clé/valeur exemple formulaKey = essentiel et data = {} */}
      {Object.entries(tarifs).map(([formulaKey, data]) => {
        /* Transforme la première lettre en majuscule : essentiel = Essentiel */
        const formulaName = formulaKey.charAt(0).toUpperCase() + formulaKey.slice(1);

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
            <a href={externalLinks.emailAnne} className={css.button}>Réserver cette formule</a>
          </article>
        );
      })}
    </section>
  );
}

export default TarifCardRoot;
