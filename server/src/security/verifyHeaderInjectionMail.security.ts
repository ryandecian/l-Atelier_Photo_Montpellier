/* 
    Fonction utilitaire : détection d'injection d'en-têtes SMTP
    ----------------------------------------------------------
    Objectif :
        Vérifier si une chaîne contient des caractères spéciaux "\r" (retour chariot) 
        ou "\n" (saut de ligne). Ces caractères sont dangereux lorsqu'ils apparaissent 
        dans les champs d'un email, car ils permettent d'injecter de nouveaux en-têtes SMTP.

    Exemple d'attaque :
        subject = "Hello\r\nBCC: pirate@mail.com"
        → Cela ajouterait un en-tête BCC et enverrait l'email à un pirate.

    Retour :
        true  → la valeur contient une tentative d'injection
        false → valeur saine
*/
function verifyHeaderInjectionMail_security(value: string | undefined): boolean {
    return typeof value === "string" && (value.includes("\r") || value.includes("\n"));
}

export default verifyHeaderInjectionMail_security;
