/* Import des composants Router */
import externalLinks from "../../../constants/externalLinks";

/* Import des Types */
import { Prestation_Type, FormuleGroupe1_Type, DataEmailFormuleGroupe1_Type } from "../../../types/prestations.type";

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 1 */
/* Données visible disponible dans les cartes tarifaires côté front */

const TarifsPortraitHobby: Prestation_Type = {
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

export {TarifsPortraitHobby};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 2 */
/* Données modifiables pour les emails pré-remplies */

const Service: string = "Portrait Hobby"; /* Bloc a modifier si besoin */

/* Nom des formules disponibles */
const Formule: FormuleGroupe1_Type = {
    essentiel: "Essentiel",
    confort: "Confort",
    premium: "Premium",
}

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 3 */
/* Structure et data des mails pré-remplies */

const dataRootEmail: DataEmailFormuleGroupe1_Type = {
    essentiel: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${Formule.essentiel}`,
        body: 
            `
                Bonjour Anne, %0D%0A %0D%0A 
                Je souhaite réserver la formule ${Formule.essentiel} pour un ${Service}. %0D%0A
                Pouvez-vous me recontacter ? %0D%0A %0D%0A
                Cordialement %0D%0A %0D%0A
                [Prénom - Téléphone éventuel] %0D%0A
                P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles : %0D%0A [disponibilités, souhaits particuliers, objectif du portrait, autres...]
            `
    },
    confort: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${Formule.confort}`,
        body: 
            `
                Bonjour Anne, %0D%0A %0D%0A 
                Je souhaite réserver la formule ${Formule.confort} pour un ${Service}. %0D%0A
                Pouvez-vous me recontacter ? %0D%0A %0D%0A
                Cordialement %0D%0A %0D%0A
                [Prénom - Téléphone éventuel] %0D%0A
                P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles : %0D%0A [disponibilités, souhaits particuliers, objectif du portrait, autres...]
            `
    },
    premium: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${Formule.premium}`,
        body: 
            `
                Bonjour Anne, %0D%0A %0D%0A 
                Je souhaite réserver la formule ${Formule.premium} pour un ${Service}. %0D%0A
                Pouvez-vous me recontacter ? %0D%0A %0D%0A
                Cordialement %0D%0A %0D%0A
                [Prénom - Téléphone éventuel] %0D%0A
                P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles : %0D%0A [disponibilités, souhaits particuliers, objectif du portrait, autres...]
            `
    },
};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 4 */
/* Code à injecter dans le mailto pour que le mail soit pré-rempli dans les logiciels ou applications de messagerie */
const MailtoLinkPortraitHobby: FormuleGroupe1_Type = {
    essentiel: `${dataRootEmail.essentiel.mailto}?subject=${dataRootEmail.essentiel.subject}&body=${dataRootEmail.essentiel.body}`,
    confort: `${dataRootEmail.confort.mailto}?subject=${dataRootEmail.confort.subject}&body=${dataRootEmail.confort.body}`,
    premium: `${dataRootEmail.premium.mailto}?subject=${dataRootEmail.premium.subject}&body=${dataRootEmail.premium.body}`,
}

export { MailtoLinkPortraitHobby };
