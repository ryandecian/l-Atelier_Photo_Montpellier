type AvisClientSEO_Type = {
    id: number;
    nom: string;
    note: number;
    commentaire: string;
    date: string;
}

export type { AvisClientSEO_Type };

type DatasAvisClient_Type = {
    tabDataAvisClients: AvisClientSEO_Type[];
}

export type { DatasAvisClient_Type };
