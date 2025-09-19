/* Fonction utilitaire pour convertir une date en format FR (DD/MM/YYYY) vers ISO (YYYY-MM-DD) */

/* Sortie en String */
function convertDateFrToISO_String_Utils(dateFr: string): string {
  const [jour, mois, annee] = dateFr.split("/").map(Number);

  /* Format ISO exploitable par JavaScript */
  return (
    `${annee}-${String(mois).padStart(2, "0")}-${String(jour).padStart(2, "0")}`
  );
}

export { convertDateFrToISO_String_Utils };

/* Sortie en Date */
function convertDateFrToISO_Date_Utils(dateFr: string): Date {
  const [jour, mois, annee] = dateFr.split("/").map(Number);
  return new Date(annee, mois - 1, jour);
}
export { convertDateFrToISO_Date_Utils };
/**
 * Documentation : 
 * 
 * La fonction convertDateFrToISO sert à convertir une date au format français JJ/MM/AAAA 
 * en une date au format ISO AAAA-MM-JJ, qui est souvent utilisé en informatique 
 * (ex. pour les bases de données ou les API).
 */
