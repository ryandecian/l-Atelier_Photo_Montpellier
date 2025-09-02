/* Convertit une saisie admin (string "jj/mm/aaaa" ou "jj-mm-aaaa")
   ou un timestamp (ms) en "YYYY-MM-DD" pour une colonne SQL DATE */
function toSQLDate(input: string | number): string {
    if (typeof input === "number" && Number.isFinite(input)) {
        const d = new Date(input);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
    }

    if (typeof input === "string") {
        const s = input.trim().replace(/-/g, "/");
        const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if (!m) {
            throw new Error("Format de date invalide. Attendu : jj/mm/aaaa");
        }
        const [, dd, mm, yyyy] = m;
        return `${yyyy}-${mm}-${dd}`;
    }

    throw new Error("Type de date invalide pour 'date'.");
}

export default toSQLDate;

/**
 * Documentation d'utilisation : 
 * 
 * 
 let sqlDate: string;
    try {
        sqlDate = toSQLDate(req.body.date);
    }
    catch (error) {
        res.status(400).json({ message: (error as Error).message });
        return;
    }
 */