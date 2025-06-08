import externalLinks from "../../constants/externalLinks";
import {PrestationType, FormuleType, DataRootEmailType} from "../../types/Prestations.type";

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 1 */

const TarifsPortraitHobbie: PrestationType = {
    essentiel: {
        line1: { value1: 'Durée Séance', value2: '45 min' },
        line2: { value1: 'Extérieur', value2: 'Oui' },
        line3: { value1: 'Flash', value2: 'Non' },
        line4: { value1: 'Post Traitement', value2: 'Oui' },
        line5: { value1: 'Galerie en Ligne', value2: 'Oui' },
        line6: { value1: 'Nombre de photos', value2: '10' },
        line7: { value1: 'Prix', value2: '159 €' },
    },
    confort: {
        line1: { value1: 'Durée Séance', value2: '1h00' },
        line2: { value1: 'Extérieur', value2: 'Oui' },
        line3: { value1: 'Flash', value2: 'Oui' },
        line4: { value1: 'Post Traitement', value2: 'Oui' },
        line5: { value1: 'Galerie en Ligne', value2: 'Non' },
        line6: { value1: 'Nombre de photos', value2: '15' },
        line7: { value1: 'Prix', value2: '199 €' },
    },
    premium: {
        line1: { value1: 'Durée Séance', value2: '2h00' },
        line2: { value1: 'Extérieur', value2: 'Oui' },
        line3: { value1: 'Flash', value2: 'Oui' },
        line4: { value1: 'Post Traitement', value2: 'Oui' },
        line5: { value1: 'Galerie en Ligne', value2: 'Oui' },
        line6: { value1: 'Nombre de photos', value2: '20' },
        line7: { value1: 'Prix', value2: '249 €' },
    },
};

export {TarifsPortraitHobbie};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 2 */

const Service: string = "Portrait Hobbie"; /* Bloc a modifier si besoin */
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
const MailtoLinkPortraitHobbie: FormuleType = {
    essentiel: `${dataRootEmail.essentiel.mailto}?subject=${dataRootEmail.essentiel.subject}&body=${dataRootEmail.essentiel.body}`,
    confort: `${dataRootEmail.confort.mailto}?subject=${dataRootEmail.confort.subject}&body=${dataRootEmail.confort.body}`,
    premium: `${dataRootEmail.premium.mailto}?subject=${dataRootEmail.premium.subject}&body=${dataRootEmail.premium.body}`,
}

export {MailtoLinkPortraitHobbie};
