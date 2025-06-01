import styles from './PricingCard.module.css';

type PricingData = {
  line1: { value1: string; value2: string };
  line2: { value1: string; value2: string };
  line3: { value1: string; value2: string };
  line4: { value1: string; value2: string };
  line5: { value1: string; value2: string };
  line6: { value1: string; value2: string };
  line7: { value1: string; value2: string };
  line8?: { value1: string; value2: string };
  line9?: { value1: string; value2: string };
  line10?: { value1: string; value2: string };
};

type PrestationType = {
  essentiel: PricingData;
  confort: PricingData;
  premium: PricingData;
};

const test: PrestationType = {
  essentiel: {
    line1: { value1: 'Durée Séance', value2: '45min' },
    line2: { value1: 'Extérieur', value2: 'Non' },
    line3: { value1: 'Studio', value2: 'Oui' },
    line4: { value1: 'Post Traitement', value2: 'oui' },
    line5: { value1: 'Galerie en Ligne', value2: 'Oui' },
    line6: { value1: 'Nombre de photos', value2: '5' },
    line7: { value1: 'Prix', value2: '99 €' },
  },
  confort: {
    line1: { value1: 'Durée Séance', value2: '1h00' },
    line2: { value1: 'Extérieur', value2: 'Oui' },
    line3: { value1: 'Studio', value2: 'Oui' },
    line4: { value1: 'Post Traitement', value2: 'oui' },
    line5: { value1: 'Galerie en Ligne', value2: 'non' },
    line6: { value1: 'Nombre de photos', value2: '15' },
    line7: { value1: 'Prix', value2: '149 €' },
  },
  premium: {
    line1: { value1: 'Durée Séance', value2: '02h00' },
    line2: { value1: 'Extérieur', value2: 'oui' },
    line3: { value1: 'Studio', value2: 'oui' },
    line4: { value1: 'Post Traitement', value2: 'oui' },
    line5: { value1: 'Galerie en Ligne', value2: 'oui' },
    line6: { value1: 'Nombre de photos', value2: '22' },
    line7: { value1: 'Prix', value2: '199 €' },
  },
};

function PricingCardRoot() {
  return (
    <section className={styles.container}>
      {Object.entries(test).map(([formulaKey, data]) => {
        /* Transforme la première lettre en majuscule : essentiel = Essentiel */
        const formulaName = formulaKey.charAt(0).toUpperCase() + formulaKey.slice(1);

        return (
          <div
            key={formulaKey}
            className={`${styles.card} ${formulaKey === 'premium' ? styles.premium : ''}`}
          >
            <div className={styles.header}>{formulaName}</div>
            <ul className={styles.list}>
              {Object.entries(data).map(([lineKey, line]) => (
                <li key={lineKey} className={styles.item}>
                  <span className={styles.label}>{line.value1}</span>
                  <span className={styles.value}>{line.value2}</span>
                </li>
              ))}
            </ul>
            <button className={styles.button}>Réserver cette formule</button>
          </div>
        );
      })}
    </section>
  );
}

export default PricingCardRoot;
