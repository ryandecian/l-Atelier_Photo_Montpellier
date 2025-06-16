function convertDateFrToISO(dateFr: string): string {
  const [day, month, year] = dateFr.split("/").map(Number);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default convertDateFrToISO;
