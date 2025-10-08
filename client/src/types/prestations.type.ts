/* Datas visibles côté front */

type PricingLine_Type = { value1: string; value2: string };
export type { PricingLine_Type };

/* Nombre de ligne disponible dans les cartes tarifaires */
type PricingData_Type = {
    line0?: PricingLine_Type;
    line1?: PricingLine_Type;
    line2?: PricingLine_Type;
    line3?: PricingLine_Type;
    line4?: PricingLine_Type;
    line5?: PricingLine_Type;
    line6?: PricingLine_Type;
    line7?: PricingLine_Type;
    line8?: PricingLine_Type;
    line9?: PricingLine_Type;
    line10?: PricingLine_Type;
    line11?: PricingLine_Type;
    line12?: PricingLine_Type;
    line13?: PricingLine_Type;
    line14?: PricingLine_Type;
};
export type { PricingData_Type };

/* Liste des prestations existantes à afficher dans les cartes tarifaires du côté front */
type Prestation_Type = {
    essentiel?: PricingData_Type;
    confort?: PricingData_Type;
    premium?: PricingData_Type;
    confiance?: PricingData_Type;
    flash?: PricingData_Type;
    classique?: PricingData_Type;
    signature? : PricingData_Type;
};
export type { Prestation_Type }

/* ---------- ----------- ---------- ---------- ---------- */
/* Clés de formules possibles, unifiées pour tarifs + mailto */
type FormuleKey_Type =
    | "essentiel"
    | "confort"
    | "premium"
    | "confiance"
    | "flash"
    | "classique"
    | "signature";
export type { FormuleKey_Type };
/* Map mailto unifiée sur toutes les formules (optionnelles) */
type MailtoMap_Type = Partial<Record<FormuleKey_Type, string>>;

/* Type pour le composant TarifsCard_Element */
type TarifCard_Type = {
    id: string;
    tarifs: Prestation_Type;
    mailtoLink: MailtoMap_Type
};
export type { TarifCard_Type };

/* ---------- ----------- ---------- ---------- ---------- */
/* Liste des groupes de formules */

type FormuleGroupe1_Type = {
    essentiel: string;
    confort: string;
    premium: string;
}
/* Test */
type FormuleGroupe2_Type = {
    essentiel: string;
    confort: string;
    premium: string;
}

export type 
    { 
        FormuleGroupe1_Type, 
        FormuleGroupe2_Type 
    };

/* ---------- ----------- ---------- ---------- ---------- */
/* Structure de l'email */
type DataEmail_Type = {
    mailto: string;
    subject: string;
    body: string;
}

/* Liste des groupes de formules avec datas */

type DataEmailFormuleGroupe1_Type = {
  essentiel: DataEmail_Type;
  confort: DataEmail_Type;
  premium: DataEmail_Type;
}

export type 
    { 
        DataEmailFormuleGroupe1_Type 
    };
