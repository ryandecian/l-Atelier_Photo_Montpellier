import externalLinks from "../../constants/externalLinks";
import {PrestationType, FormuleType, DataRootEmailType} from "../../types/Prestations.type";

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 1 */

const TarifsPortraitSolo: PrestationType = {
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

export {TarifsPortraitSolo};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 2 */

const Service: string = "Réservation Portrait Solo"; /* Bloc a modifier si besoin */

/* Nom des formules disponibles */
const Formule: FormuleType = {
    essentiel: "Essentiel",
    confort: "Confort",
    premium: "Premium",
}

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 3 */

const dataRootEmail: DataRootEmailType = {
    essentiel: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${Formule.essentiel}`,
        body: `Bonjour Anne, %0D%0A %0D%0A Je souhaite réserver la formule ${Formule.essentiel} pour un portrait solo. %0D%0A Pouvez-vous de me recontacter. %0D%0A %0D%0A Cordialement,`
    },
    confort: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${Formule.confort}`,
        body: `Bonjour Anne, %0D%0A %0D%0A Je souhaite réserver la formule ${Formule.confort} pour un portrait solo. %0D%0A Pouvez-vous de me recontacter. %0D%0A %0D%0A Cordialement,`
    },
    premium: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${Formule.premium}`,
        body: `Bonjour Anne, %0D%0A %0D%0A Je souhaite réserver la formule ${Formule.premium} pour un portrait solo. %0D%0A Pouvez-vous de me recontacter. %0D%0A %0D%0A Cordialement,`
    },
};


