function convertDateFrToISO(dateFr: string): string {
  const [day, month, year] = dateFr.split("/").map(Number);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default convertDateFrToISO;

/**
 * Documentation : 
 * 
 * La fonction convertDateFrToISO sert à convertir une date au format français JJ/MM/AAAA 
 * en une date au format ISO AAAA-MM-JJ, qui est souvent utilisé en informatique 
 * (ex. pour les bases de données ou les API).
 */