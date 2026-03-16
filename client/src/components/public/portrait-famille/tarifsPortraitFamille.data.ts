/* Import des composants Router */
import externalLinks from "../../../constants/externalLinks";

/* Import des Types */
import { Prestation_Type, FormuleGroupe1_Type, DataEmailFormuleGroupe1_Type } from "../../../types/prestations.type";

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 1 */
/* Données visible disponible dans les cartes tarifaires côté front */

const tarifsPortraitFamille_Data: Prestation_Type = {
    essentiel: {
        line1: { value1: "Durée Séance", value2: "45 min" },
        line2: { value1: "Extérieur", value2: "Oui" },
        line3: { value1: "Studio", value2: "Non" },
        line4: { value1: "Post Traitement", value2: "Oui" },
        line5: { value1: "Galerie en Ligne", value2: "Oui" },
        line6: { value1: "Nombre de photos", value2: "5" },
        line7: { value1: "Prix", value2: "159 €" },
    },
    confort: {
        line1: { value1: "Durée Séance", value2: "1h00" },
        line2: { value1: "Extérieur", value2: "Oui" },
        line3: { value1: "Ou Studio", value2: "Oui" },
        line4: { value1: "Post Traitement", value2: "Oui" },
        line5: { value1: "Galerie en Ligne", value2: "Oui" },
        line6: { value1: "Nombre de photos", value2: "10" },
        line7: { value1: "Prix", value2: "199 €" },
    },
    premium: {
        line1: { value1: "Durée Séance", value2: "2h00" },
        line2: { value1: "Extérieur", value2: "Oui" },
        line3: { value1: "Et Studio", value2: "Oui" },
        line4: { value1: "Post Traitement", value2: "Oui" },
        line5: { value1: "Galerie en Ligne", value2: "Oui" },
        line6: { value1: "Nombre de photos", value2: "15" },
        line7: { value1: "Prix", value2: "249 €" },
    },
};

export { tarifsPortraitFamille_Data };

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 2 */
/* Données modifiables pour les emails pré-remplies */

const Service: string = "Portrait Famille";

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
        subject: `Réservation ${Service} - Formule ${formule.essentiel}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.essentiel} pour un ${Service}.`,
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
        subject: `Réservation ${Service} - Formule ${formule.confort}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.confort} pour un ${Service}.`,
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
        subject: `Réservation ${Service} - Formule ${formule.premium}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.premium} pour un ${Service}.`,
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
const mailtoLinkPortraitFamille_Data: FormuleGroupe1_Type = {
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

export { mailtoLinkPortraitFamille_Data };
