import externalLinks from "../../../constants/externalLinks";
import {PrestationType} from "../../../types/pprestations.type";

type FormuleCorporateType = {
  confiance: string;
  flash: string;
  classique: string;
  signature: string;
}

type DataCorporateType = {
  mailto: string;
  subject: string;
  body: string;
}

type DataCorporateEmailType = {
    confiance: DataCorporateType;
    classique: DataCorporateType;
    flash: DataCorporateType;
    signature: DataCorporateType;
}

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

const Service: string = "Portrait Corporate"; /* Bloc a modifier si besoin */
const Reservation: string = `Réservation ${Service}`; /* Bloc a modifier si besoin */

/* Nom des formules disponibles */
const Formule: FormuleCorporateType = {
    confiance: "Confiance",
    classique: "Classique",
    flash: "Flash",
    signature: "Signature",
}

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 3 */

const SegmentTexte = {
    /* Professionnel et Particulier */
    intro1: "Bonjour Anne, %0D%0A %0D%0A Je souhaite réserver la formule",
    /* Particulier */
    contact1: `%0D%0A Pouvez-vous me recontacter ?`,
    info: `%0D%0A %0D%0A [Prénom - Téléphone éventuel]`,
    cordialement1: `%0D%0A %0D%0A Cordialement`,
    ps1: `%0D%0A P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles : %0D%0A [disponibilités, souhaits particuliers, objectif du portrait, autres...]`,
    /* Professionnel */
    intro2: ", et j’aimerais échanger avec vous afin de vous faire part de mes attentes pour cette séance photo.",
    contact2: `%0D%0A Vous pouvez me recontacter de préférence par mail, ou par téléphone au 04 XX XX XX XX / 06 XX XX XX XX, idéalement sur le créneau suivant : [préciser votre disponibilité].`,
    cordialement2: `%0D%0A %0D%0A Cordialement %0D%0A [Nom] %0D%0A [Coordonnées éventuelles : téléphone, mail]`,
    ps2: `%0D%0A %0D%0A P.S. : Voici quelques précisions complémentaires si besoin : %0D%0A [...]`,
}

const dataRootEmail: DataCorporateEmailType = {
    confiance: {
        mailto: externalLinks.emailAnne,
        subject: `${Service} - Formule ${Formule.confiance}`,
        body: `${SegmentTexte.intro1} ${Formule.confiance} pour un ${Service}. ${SegmentTexte.contact1} ${SegmentTexte.cordialement1} ${SegmentTexte.info} ${SegmentTexte.ps1}`
    },
    classique: {
        mailto: externalLinks.emailAnne,
        subject: `${Service} - Formule ${Formule.classique}`,
        body: `${SegmentTexte.intro1} ${Formule.classique} pour un ${Service}${SegmentTexte.intro2} ${SegmentTexte.contact2} ${SegmentTexte.cordialement2} ${SegmentTexte.info} ${SegmentTexte.ps2}`
    },
    flash: {
        mailto: externalLinks.emailAnne,
        subject: `${Reservation} - Formule ${Formule.flash}`,
        body: `${SegmentTexte.intro1} ${Formule.flash} pour un ${Service}${SegmentTexte.intro2} ${SegmentTexte.contact2} ${SegmentTexte.cordialement2} ${SegmentTexte.info} ${SegmentTexte.ps2}`
    },
    signature: {
        mailto: externalLinks.emailAnne,
        subject: `${Reservation} - Formule ${Formule.signature}`,
        body: `${SegmentTexte.intro1} ${Formule.signature} pour un ${Service}${SegmentTexte.intro2} ${SegmentTexte.contact2} ${SegmentTexte.cordialement2} ${SegmentTexte.info} ${SegmentTexte.ps2}`
    },
};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 4 */

/* Mail structuré pour les carte de tarifs */
const MailtoLinkPortraitCorporate: FormuleCorporateType = {
    confiance: `${dataRootEmail.confiance.mailto}?subject=${dataRootEmail.confiance.subject}&body=${dataRootEmail.confiance.body}`,
    classique: `${dataRootEmail.classique.mailto}?subject=${dataRootEmail.classique.subject}&body=${dataRootEmail.classique.body}`,
    flash: `${dataRootEmail.flash.mailto}?subject=${dataRootEmail.flash.subject}&body=${dataRootEmail.flash.body}`,
    signature: `${dataRootEmail.signature.mailto}?subject=${dataRootEmail.signature.subject}&body=${dataRootEmail.signature.body}`,
}

export {MailtoLinkPortraitCorporate};
