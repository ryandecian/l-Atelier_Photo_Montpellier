import styles from './PricingCard.module.css';

type PricingItem = {
  title: string;
  essentiel: string;
  confort: string;
  premium: string;
};

const pricingData: PricingItem[] = [
  { title: 'Durée Séance', essentiel: '45min', confort: '1h00', premium: '02h00' },
  { title: 'Extérieur', essentiel: 'Non', confort: 'Oui ou', premium: 'oui et ou' },
  { title: 'Studio', essentiel: 'Oui', confort: 'Oui', premium: 'oui' },
  { title: 'Post Traitement', essentiel: 'oui', confort: 'oui', premium: 'oui' },
  { title: 'Galerie en Ligne', essentiel: 'Oui', confort: 'non', premium: 'oui' },
  { title: 'Nombre de photos', essentiel: '5', confort: '15', premium: '22' },
  { title: 'Prix', essentiel: '99 €', confort: '149 €', premium: '199 €' },
];

const test = {
    essentiel: {
        line1: {
            value1: "Durée Séance",
            value2: "45min"
        },
        line2: {
            value1: "Extérieur",
            value2: "Non"
        },
        line3: {
            value1: "Studio",
            value2: "Oui"
        },
        line4: {
            value1: "Post Traitement",
            value2: "oui"
        },
        line5: {
            value1: "Galerie en Ligne",
            value2: "Oui"
        },
        line6: {
            value1: "Nombre de photos",
            value2: "5"
        },
        line7: {
            value1: "Prix",
            value2: "99 €"
        }
    },
    confort: {
        line1: {
            value1: "Durée Séance",
            value2: "1h00"
        },
        line2: {
            value1: "Extérieur",
            value2: "Oui"
        },
        line3: {
            value1: "Studio",
            value2: "Oui"
        },
        line4: {
            value1: "Post Traitement",
            value2: "oui"
        },
        line5: {
            value1: "Galerie en Ligne",
            value2: "non"
        },
        line6: {
            value1: "Nombre de photos",
            value2: "15"
        },
        line7: {
            value1: "Prix",
            value2: "149 €"
        }
    },
    premium: {
        line1: {
            value1: "Durée Séance",
            value2: "02h00"
        },
        line2: {
            value1: "Extérieur",
            value2: "oui"
        },
        line3: {
            value1: "Studio",
            value2: "oui"
        },
        line4: {
            value1: "Post Traitement",
            value2: "oui"
        },
        line5: {
            value1: "Galerie en Ligne",
            value2: "oui"
        },
        line6: {
            value1: "Nombre de photos",
            value2: "22"
        },
        line7: {
            value1: "Prix",
            value2: "199 €"
        }
    }
}

function PricingCardRoot() {
  const formulas = ['Essentiel', 'Confort', 'Premium'] as const;

  return (
    <section className={styles.container}>
      {formulas.map((formula) => (
        <div
          key={formula}
          className={`${styles.card} ${formula === 'Premium' ? styles.premium : ''}`}
        >
          <div className={styles.header}>{formula}</div>
          <ul className={styles.list}>
            {pricingData.map((item) => (
              <li key={item.title} className={styles.item}>
                <span className={styles.label}>{item.title}</span>
                <span className={styles.value}>
                  {formula === 'Essentiel'
                    ? item.essentiel
                    : formula === 'Confort'
                    ? item.confort
                    : item.premium}
                </span>
              </li>
            ))}
          </ul>
          <button className={styles.button}>Réserver cette formule</button>
        </div>
      ))}
    </section>
  );
}

export default PricingCardRoot;
