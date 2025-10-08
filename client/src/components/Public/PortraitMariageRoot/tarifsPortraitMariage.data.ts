/* Import des composants Router */
import externalLinks from "../../../constants/externalLinks";

/* Import des Types */
import { Prestation_Type, FormuleGroupe1_Type, DataEmailFormuleGroupe1_Type } from "../../../types/prestations.type";

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 1 */
/* Données visible disponible dans les cartes tarifaires côté front */

const tarifsPortraitMariage_Data: Prestation_Type = {
    essentiel: {
        line1: { value1: "Avant mariage", value2: "Non" },
        line2: { value1: "Préparatifs", value2: "Oui" },
        line3: { value1: "Photos de couple", value2: "Oui" },
        line4: { value1: "Cérémonie", value2: "Oui" },
        line5: { value1: "Vin d'honneur", value2: "Oui" },
        line6: { value1: "Repas", value2: "Oui" },
        line7: { value1: "Soirée jusqu'à 23h", value2: "Oui" },
        line8: { value1: "Soirée jusqu'à 02h", value2: "Non" },
        line9: { value1: "Day after", value2: "Non" },
        line10: { value1: "Post traitement", value2: "Oui" },
        line11: { value1: "Galerie en ligne", value2: "Oui" },
        line12: { value1: "Nb de photos", value2: "90" },
        line13: { value1: "Prix", value2: "899 €" },
    },
    confort: {
        line1: { value1: "Avant mariage", value2: "Non" },
        line2: { value1: "Préparatifs", value2: "Oui" },
        line3: { value1: "Photos de couple", value2: "Oui" },
        line4: { value1: "Cérémonie", value2: "Oui" },
        line5: { value1: "Vin d'honneur", value2: "Oui" },
        line6: { value1: "Repas", value2: "Oui" },
        line7: { value1: "Soirée jusqu'à 23h", value2: "Oui" },
        line8: { value1: "Soirée jusqu'à 02h", value2: "Oui" },
        line9: { value1: "Day after", value2: "Non" },
        line10: { value1: "Post traitement", value2: "Oui" },
        line11: { value1: "Galerie en ligne", value2: "Oui" },
        line12: { value1: "Nb de photos", value2: "400" },
        line13: { value1: "Prix", value2: "1 399 €" },
    },
    premium: {
        line1: { value1: "Avant mariage", value2: "Oui" },
        line2: { value1: "Préparatifs", value2: "Oui" },
        line3: { value1: "Photos de couple", value2: "Oui" },
        line4: { value1: "Cérémonie", value2: "Oui" },
        line5: { value1: "Vin d'honneur", value2: "Oui" },
        line6: { value1: "Repas", value2: "Oui" },
        line7: { value1: "Soirée jusqu'à 23h", value2: "Oui" },
        line8: { value1: "Soirée jusqu'à 02h", value2: "Oui" },
        line9: { value1: "Day after", value2: "Oui" },
        line10: { value1: "Post traitement", value2: "Oui" },
        line11: { value1: "Galerie en ligne", value2: "Oui" },
        line12: { value1: "Nb de photos", value2: "600" },
        line13: { value1: "Prix", value2: "1 899 €" },
    },
};

export { tarifsPortraitMariage_Data };

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 2 */
/* Données modifiables pour les emails pré-remplies */

const service: string = "Portrait Mariage";

const formule: FormuleGroupe1_Type = {
    essentiel: "Essentiel",
    confort: "Confort",
    premium: "Premium",
};

/* ---------- ----------- ---------- ---------- ---------- */
/* Helpers mailto */
const CRLF = "\r\n";
const makeBody = (lines: string[]) => lines.join(CRLF);
const ensureMailto = (addr: string) => (addr.startsWith("mailto:") ? addr : `mailto:${addr}`);
const buildMailtoLink = (to: string, subject: string, body: string) =>
    `${ensureMailto(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 3 */
/* Structure et data des mails pré-remplies */

const dataRootEmail: DataEmailFormuleGroupe1_Type = {
    essentiel: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${service} - Formule ${formule.essentiel}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.essentiel} pour un ${service}.`,
            "Pouvez-vous me recontacter ?",
            "",
            "Cordialement",
            "",
            "[Prénom - Téléphone éventuel]",
            "P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles :",
            "[disponibilités, souhaits particuliers, objectif du portrait, autres...]",
        ]),
    },
    confort: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${service} - Formule ${formule.confort}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.confort} pour un ${service}.`,
            "Pouvez-vous me recontacter ?",
            "",
            "Cordialement",
            "",
            "[Prénom - Téléphone éventuel]",
            "P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles :",
            "[disponibilités, souhaits particuliers, objectif du portrait, autres...]",
        ]),
    },
    premium: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${service} - Formule ${formule.premium}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.premium} pour un ${service}.`,
            "Pouvez-vous me recontacter ?",
            "",
            "Cordialement",
            "",
            "[Prénom - Téléphone éventuel]",
            "P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles :",
            "[disponibilités, souhaits particuliers, objectif du portrait, autres...]",
        ]),
    },
};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 4 */
/* Code à injecter dans le mailto pour que le mail soit pré-rempli */
const mailtoLinkPortraitMariage_Data: FormuleGroupe1_Type = {
    essentiel: buildMailtoLink(
        dataRootEmail.essentiel.mailto,
        dataRootEmail.essentiel.subject,
        dataRootEmail.essentiel.body
    ),
    confort: buildMailtoLink(
        dataRootEmail.confort.mailto,
        dataRootEmail.confort.subject,
        dataRootEmail.confort.body
    ),
    premium: buildMailtoLink(
        dataRootEmail.premium.mailto,
        dataRootEmail.premium.subject,
        dataRootEmail.premium.body
    ),
};

export { mailtoLinkPortraitMariage_Data };
