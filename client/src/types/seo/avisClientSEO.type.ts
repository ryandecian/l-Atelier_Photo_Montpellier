type AvisClientSEO_Type = {
    id: number;
    nom: string;
    note: number;
    titre?: string;
    commentaire: string;
    commentaire1?: string;
    commentaire2?: string;
    commentaire3?: string;
    commentaire4?: string;
    commentaire5?: string;
    commentaire6?: string;
    commentaire7?: string;
    commentaire8?: string;
    commentaire9?: string;
    date: string;
}

export type { AvisClientSEO_Type };

type DatasAvisClient_Type = {
    tabDataAvisClients: AvisClientSEO_Type[];
}

export type { DatasAvisClient_Type };
