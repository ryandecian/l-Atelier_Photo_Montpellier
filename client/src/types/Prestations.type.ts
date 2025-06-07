/* Bloc logique 1 */
type PricingData = {
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
};


type PrestationType = {
  essentiel?: PricingData;
  confort?: PricingData;
  premium?: PricingData;
  confiance?: PricingData;
  flash?: PricingData;
  classique?: PricingData;
  signature? : PricingData;
};

/* ---------- ----------- ---------- ---------- ---------- */

/* Bloc logique 2 */
type FormuleType = {
  essentiel: string;
  confort: string;
  premium: string;
}

/* ---------- ----------- ---------- ---------- ---------- */

type DataRootType = {
  mailto: string;
  subject: string;
  body: string;
}

type DataRootEmailType = {
  essentiel: DataRootType;
  confort: DataRootType;
  premium: DataRootType;
}

export type { PrestationType, FormuleType, DataRootEmailType };
