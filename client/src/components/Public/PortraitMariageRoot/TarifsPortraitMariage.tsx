import externalLinks from "../../../constants/externalLinks";
import {PrestationType, FormuleType, DataRootEmailType} from "../../../types/Prestations.type";

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 1 */

const TarifsPortraitMariage: PrestationType = {
    essentiel: {
        line1: { value1: 'Avant mariage', value2: 'Non' },
        line2: { value1: 'Préparatifs', value2: 'Oui' },
        line3: { value1: 'Photos de couple', value2: 'Oui' },
        line4: { value1: 'Cérémonie', value2: 'Oui' },
        line5: { value1: `Vin d'honneur`, value2: 'Oui' },
        line6: { value1: 'Repas', value2: 'Oui' },
        line7: { value1: `Soirée jusqu'à 23h`, value2: 'Oui' },
        line8: { value1: `Soirée jusqu'à 02h`, value2: 'Non' },
        line9: { value1: 'Day after', value2: 'Non' },
        line10: { value1: 'Post traitement', value2: 'Oui' },
        line11: { value1: 'Galerie en ligne', value2: 'Oui' },
        line12: { value1: 'Nb de photos', value2: '90' },
        line13: { value1: 'Prix', value2: '899 €' },
    },
    confort: {
        line1: { value1: 'Avant mariage', value2: 'Non' },
        line2: { value1: 'Préparatifs', value2: 'Oui' },
        line3: { value1: 'Photos de couple', value2: 'Oui' },
        line4: { value1: 'Cérémonie', value2: 'Oui' },
        line5: { value1: `Vin d'honneur`, value2: 'Oui' },
        line6: { value1: 'Repas', value2: 'Oui' },
        line7: { value1: `Soirée jusqu'à 23h`, value2: 'Oui' },
        line8: { value1: `Soirée jusqu'à 02h`, value2: 'Oui' },
        line9: { value1: 'Day after', value2: 'Non' },
        line10: { value1: 'Post traitement', value2: 'Oui' },
        line11: { value1: 'Galerie en ligne', value2: 'Oui' },
        line12: { value1: 'Nb de photos', value2: '400' },
        line13: { value1: 'Prix', value2: '1 399 €' },
    },
    premium: {
        line1: { value1: 'Avant mariage', value2: 'Oui' },
        line2: { value1: 'Préparatifs', value2: 'Oui' },
        line3: { value1: 'Photos de couple', value2: 'Oui' },
        line4: { value1: 'Cérémonie', value2: 'Oui' },
        line5: { value1: `Vin d'honneur`, value2: 'Oui' },
        line6: { value1: 'Repas', value2: 'Oui' },
        line7: { value1: `Soirée jusqu'à 23h`, value2: 'Oui' },
        line8: { value1: `Soirée jusqu'à 02h`, value2: 'Oui' },
        line9: { value1: 'Day after', value2: 'Oui' },
        line10: { value1: 'Post traitement', value2: 'Oui' },
        line11: { value1: 'Galerie en ligne', value2: 'Oui' },
        line12: { value1: 'Nb de photos', value2: '600' },
        line13: { value1: 'Prix', value2: '1 899 €' },
    },
};

export {TarifsPortraitMariage};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 2 */

const Service: string = "Portrait Mariage"; /* Bloc a modifier si besoin */
const Reservation: string = `Réservation ${Service}`; /* Bloc a modifier si besoin */

/* Nom des formules disponibles */
const Formule: FormuleType = {
    essentiel: "Essentiel",
    confort: "Confort",
    premium: "Premium",
}

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 3 */

const SegmentTexte = {
    intro: "Bonjour Anne, %0D%0A %0D%0A Je souhaite réserver la formule",
    contact: `%0D%0A Pouvez-vous me recontacter ?`,
    cordialement: `%0D%0A %0D%0A Cordialement`,
    info: `%0D%0A %0D%0A [Prénom - Téléphone éventuel]`,
    ps: `%0D%0A P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles : %0D%0A [disponibilités, souhaits particuliers, objectif du portrait, autres...]`,
}

const dataRootEmail: DataRootEmailType = {
    essentiel: {
        mailto: externalLinks.emailAnne,
        subject: `${Service} - Formule ${Formule.essentiel}`,
        body: `${SegmentTexte.intro} ${Formule.essentiel} pour un ${Service}. ${SegmentTexte.contact} ${SegmentTexte.cordialement} ${SegmentTexte.info} ${SegmentTexte.ps}`
    },
    confort: {
        mailto: externalLinks.emailAnne,
        subject: `${Service} - Formule ${Formule.confort}`,
        body: `${SegmentTexte.intro} ${Formule.confort} pour un ${Service}. ${SegmentTexte.contact} ${SegmentTexte.cordialement} ${SegmentTexte.info} ${SegmentTexte.ps}`
    },
    premium: {
        mailto: externalLinks.emailAnne,
        subject: `${Reservation} - Formule ${Formule.premium}`,
        body: `${SegmentTexte.intro} ${Formule.premium} pour un ${Service}. ${SegmentTexte.contact} ${SegmentTexte.cordialement} ${SegmentTexte.info} ${SegmentTexte.ps}`
    },
};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 4 */

/* Mail structuré pour les carte de tarifs */
const MailtoLinkPortraitMariage: FormuleType = {
    essentiel: `${dataRootEmail.essentiel.mailto}?subject=${dataRootEmail.essentiel.subject}&body=${dataRootEmail.essentiel.body}`,
    confort: `${dataRootEmail.confort.mailto}?subject=${dataRootEmail.confort.subject}&body=${dataRootEmail.confort.body}`,
    premium: `${dataRootEmail.premium.mailto}?subject=${dataRootEmail.premium.subject}&body=${dataRootEmail.premium.body}`,
}

export {MailtoLinkPortraitMariage};
