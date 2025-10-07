/* Datas visibles côté front */
/* Nombre de ligne disponible dans les cartes tarifaires */
type PricingData_Type = {
    line0?: { value1: string; value2: string };
    line1?: { value1: string; value2: string };
    line2?: { value1: string; value2: string };
    line3?: { value1: string; value2: string };
    line4?: { value1: string; value2: string };
    line5?: { value1: string; value2: string };
    line6?: { value1: string; value2: string };
    line7?: { value1: string; value2: string };
    line8?: { value1: string; value2: string };
    line9?: { value1: string; value2: string };
    line10?: { value1: string; value2: string };
    line11?: { value1: string; value2: string };
    line12?: { value1: string; value2: string };
    line13?: { value1: string; value2: string };
    line14?: { value1: string; value2: string };
};

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
type FormuleKey =
    | "essentiel"
    | "confort"
    | "premium"
    | "confiance"
    | "flash"
    | "classique"
    | "signature";

/* Map mailto unifiée sur toutes les formules (optionnelles) */
type MailtoMap_Type = Partial<Record<FormuleKey, string>>;

/* Type pour le composant TarifsCard_Element */
type TarifCard_Type = {
    id: string;
    tarifs: Prestation_Type;
    mailtoLink: MailtoMap_Type
}

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
