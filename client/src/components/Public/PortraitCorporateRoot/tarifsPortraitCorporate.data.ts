/* Import des composants Router */
import externalLinks from "../../../constants/externalLinks";

/* Import des Types */
import { Prestation_Type, FormuleGroupe2_Type, DataEmailFormuleGroupe2_Type } from "../../../types/prestations.type";

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 1 */
/* Données visible disponible dans les cartes tarifaires côté front */

const tarifsPortraitCorporate_Data: Prestation_Type = {
    confiance: {
        line0: { value1: "Pour", value2: "Particulier" },
        line1: { value1: "Durée Séance", value2: "30 min" },
        line2: { value1: "Studio", value2: "Oui" },
        line3: { value1: "Post Traitement", value2: "Oui" },
        line4: { value1: "Galerie en Ligne", value2: "Oui" },
        line5: { value1: "Nombre de photos", value2: "3" },
        line6: { value1: "Prix", value2: "99 € TTC" },
    },
    classique: {
        line0: { value1: "Pour", value2: "Entreprise" },
        line1: { value1: "Jusqu'à", value2: "5 pers" },
        line2: { value1: "Au delà", value2: "Sur devis" },
        line3: { value1: "Sur site", value2: "Oui" },
        line4: { value1: "Shooting flash", value2: "Non" },
        line5: { value1: "Post Traitement", value2: "Oui" },
        line6: { value1: "Galerie en Ligne", value2: "Oui" },
        line7: { value1: "Nb photos par pers", value2: "2" },
        line9: { value1: "Photo d'équipe", value2: "Non" },
        line8: { value1: "Prix", value2: "249 € HT" },
    },
    flash: {
        line0: { value1: "Pour", value2: "Entreprise" },
        line1: { value1: "Jusqu'à", value2: "5 pers" },
        line2: { value1: "Au delà", value2: "Sur devis" },
        line3: { value1: "Sur site", value2: "Oui" },
        line4: { value1: "Studio flash", value2: "Oui" },
        line5: { value1: "Post Traitement", value2: "Oui" },
        line6: { value1: "Galerie en Ligne", value2: "Oui" },
        line7: { value1: "Nb photos par pers", value2: "2" },
        line9: { value1: "Photo d'équipe", value2: "Non" },
        line8: { value1: "Prix", value2: "329 € HT" },
    },
    signature: {
        line0: { value1: "Pour", value2: "Entreprise" },
        line1: { value1: "Jusqu'à", value2: "5 pers" },
        line2: { value1: "Au delà", value2: "Sur devis" },
        line3: { value1: "Sur site", value2: "Oui" },
        line4: { value1: "Studio flash", value2: "Oui" },
        line5: { value1: "Post Traitement", value2: "Oui" },
        line6: { value1: "Galerie en Ligne", value2: "Oui" },
        line7: { value1: "Nb photos par pers", value2: "2" },
        line9: { value1: "Photo d'équipe", value2: "Oui" },
        line8: { value1: "Prix", value2: "399 € HT" },
    },
};

export { tarifsPortraitCorporate_Data };

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 2 */
/* Données modifiables pour les emails pré-remplies */

const Service: string = "Portrait Corporate";

const formule: FormuleGroupe2_Type = {
    confiance: "Confiance",
    classique: "Classique",
    flash: "Flash",
    signature: "Signature",
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

const dataRootEmail: DataEmailFormuleGroupe2_Type = {
    confiance: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${formule.confiance}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.confiance} pour un ${Service}.`,
            "Pouvez-vous me recontacter ?",
            "",
            "Cordialement",
            "",
            "[Prénom - Téléphone éventuel]",
            "P.S : (au besoin) Je vous donne ci-dessous quelques précisions utiles :",
            "[disponibilités, souhaits particuliers, objectif du portrait, autres...]",
        ]),
    },
    classique: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${formule.classique}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.classique} pour un ${Service}, et j’aimerais échanger avec vous afin de vous faire part de mes attentes pour cette séance photo.`,
            "Vous pouvez me recontacter de préférence par mail, ou par téléphone au 04 XX XX XX XX / 06 XX XX XX XX, idéalement sur le créneau suivant : [préciser votre disponibilité].",
            "",
            "Cordialement",
            "[Nom]",
            "[Coordonnées éventuelles : téléphone, mail]",
            "",
            "P.S. : Voici quelques précisions complémentaires si besoin :",
            "[...]",
        ]),
    },
    flash: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${formule.flash}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.flash} pour un ${Service}, et j’aimerais échanger avec vous afin de vous faire part de mes attentes pour cette séance photo.`,
            "Vous pouvez me recontacter de préférence par mail, ou par téléphone au 04 XX XX XX XX / 06 XX XX XX XX, idéalement sur le créneau suivant : [préciser votre disponibilité].",
            "",
            "Cordialement",
            "[Nom]",
            "[Coordonnées éventuelles : téléphone, mail]",
            "",
            "P.S. : Voici quelques précisions complémentaires si besoin :",
            "[...]",
        ]),
    },
    signature: {
        mailto: externalLinks.emailAnne,
        subject: `Réservation ${Service} - Formule ${formule.signature}`,
        body: makeBody([
            "Bonjour Anne,",
            "",
            `Je souhaite réserver la formule ${formule.signature} pour un ${Service}, et j’aimerais échanger avec vous afin de vous faire part de mes attentes pour cette séance photo.`,
            "Vous pouvez me recontacter de préférence par mail, ou par téléphone au 04 XX XX XX XX / 06 XX XX XX XX, idéalement sur le créneau suivant : [préciser votre disponibilité].",
            "",
            "Cordialement",
            "[Nom]",
            "[Coordonnées éventuelles : téléphone, mail]",
            "",
            "P.S. : Voici quelques précisions complémentaires si besoin :",
            "[...]",
        ]),
    },
};

/* ---------- ----------- ---------- ---------- ---------- */
/* Bloc logique 4 */
/* Code à injecter dans le mailto pour que le mail soit pré-rempli */
const mailtoLinkPortraitCorporate_Data: FormuleGroupe2_Type = {
    confiance: buildMailtoLink(
        dataRootEmail.confiance.mailto,
        dataRootEmail.confiance.subject,
        dataRootEmail.confiance.body
    ),
    classique: buildMailtoLink(
        dataRootEmail.classique.mailto,
        dataRootEmail.classique.subject,
        dataRootEmail.classique.body
    ),
    flash: buildMailtoLink(
        dataRootEmail.flash.mailto,
        dataRootEmail.flash.subject,
        dataRootEmail.flash.body
    ),
    signature: buildMailtoLink(
        dataRootEmail.signature.mailto,
        dataRootEmail.signature.subject,
        dataRootEmail.signature.body
    ),
};

export { mailtoLinkPortraitCorporate_Data };
