import externalLinks from "../../constants/externalLinks";
import {PrestationType, FormuleType, DataRootEmailType} from "../../types/Prestations.type";

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 1 */

const TarifsPortraitCorporate: PrestationType = {
    confiance: {
        line0: { value1: 'Pour', value2: 'Particulier' },
        line1: { value1: 'Durée Séance', value2: '30 min' },
        line2: { value1: 'Studio', value2: 'Oui' },
        line3: { value1: 'Post Traitement', value2: 'Oui' },
        line4: { value1: 'Galerie en Ligne', value2: 'Oui' },
        line5: { value1: 'Nombre de photos', value2: '3' },
        line6: { value1: 'Prix', value2: '99 € TTC' },
    },
    classique: {
        line0: { value1: 'Pour', value2: 'Entreprise' },
        line1: { value1: `Jusqu'à`, value2: `5 pers` },
        line2: { value1: 'Au delà', value2: 'Sur devis' },
        line3: { value1: 'Sur site', value2: 'Oui' },
        line4: { value1: 'Shooting flash', value2: 'Non' },
        line5: { value1: 'Post Traitement', value2: 'Oui' },
        line6: { value1: 'Galerie en Ligne', value2: 'Oui' },
        line7: { value1: 'Nb photos par pers', value2: '2' },
        line9: { value1: `Photo d'équipe`, value2: 'Non' },
        line8: { value1: 'Prix', value2: '249 € HT' },
    },
    flash: {
        line0: { value1: 'Pour', value2: 'Entreprise' },
        line1: { value1: `Jusqu'à`, value2: `5 pers` },
        line2: { value1: 'Au delà', value2: 'Sur devis' },
        line3: { value1: 'Sur site', value2: 'Oui' },
        line4: { value1: 'Studio flash', value2: 'Oui' },
        line5: { value1: 'Post Traitement', value2: 'Oui' },
        line6: { value1: 'Galerie en Ligne', value2: 'Oui' },
        line7: { value1: 'Nb photos par pers', value2: '2' },
        line9: { value1: `Photo d'équipe`, value2: 'Non' },
        line8: { value1: 'Prix', value2: '329 € HT' },
    },
    signature: {
        line0: { value1: 'Pour', value2: 'Entreprise' },
        line1: { value1: `Jusqu'à`, value2: `5 pers` },
        line2: { value1: 'Au delà', value2: 'Sur devis' },
        line3: { value1: 'Sur site', value2: 'Oui' },
        line4: { value1: 'Studio flash', value2: 'Oui' },
        line5: { value1: 'Post Traitement', value2: 'Oui' },
        line6: { value1: 'Galerie en Ligne', value2: 'Oui' },
        line7: { value1: 'Nb photos par pers', value2: '2' },
        line9: { value1: `Photo d'équipe`, value2: 'Oui' },
        line8: { value1: 'Prix', value2: '399 € HT' },
    },
};

export {TarifsPortraitCorporate};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 2 */

const Service: string = "Réservation Portrait Corporate"; /* Bloc a modifier si besoin */

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
        subject: `${Service} - Formule ${Formule.essentiel}`,
        body: `Bonjour Anne, %0D%0A %0D%0A Je souhaite réserver la formule ${Formule.essentiel} pour un portrait Corporate. %0D%0A Pouvez-vous de me recontacter. %0D%0A %0D%0A Cordialement,`
    },
    confort: {
        mailto: externalLinks.emailAnne,
        subject: `${Service} - Formule ${Formule.confort}`,
        body: `Bonjour Anne, %0D%0A %0D%0A Je souhaite réserver la formule ${Formule.confort} pour un portrait Corporate. %0D%0A Pouvez-vous de me recontacter. %0D%0A %0D%0A Cordialement,`
    },
    premium: {
        mailto: externalLinks.emailAnne,
        subject: `${Service} - Formule ${Formule.premium}`,
        body: `Bonjour Anne, %0D%0A %0D%0A Je souhaite réserver la formule ${Formule.premium} pour un portrait Corporate. %0D%0A Pouvez-vous de me recontacter. %0D%0A %0D%0A Cordialement,`
    },
};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 4 */

/* Mail structuré pour les carte de tarifs */
const MailtoLinkPortraitCorporate: FormuleType = {
    essentiel: `${dataRootEmail.essentiel.mailto}?subject=${dataRootEmail.essentiel.subject}&body=${dataRootEmail.essentiel.body}`,
    confort: `${dataRootEmail.confort.mailto}?subject=${dataRootEmail.confort.subject}&body=${dataRootEmail.confort.body}`,
    premium: `${dataRootEmail.premium.mailto}?subject=${dataRootEmail.premium.subject}&body=${dataRootEmail.premium.body}`,
}

export {MailtoLinkPortraitCorporate};
