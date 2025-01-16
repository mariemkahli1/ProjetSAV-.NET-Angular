export interface Reclamation {
    id: number;
    description: string;
    dateReclamation: string;
    idArticleReclamation: number;
    article?: {
      id: number;
      libelle: string;
      estSousGarantie: boolean;
      prix: number;
    };
    etatId: number;
    clientId: number;
    client?: {
      id: number;
      firstName: string;
      lastName: string;
      uSerName: string;
      password: string;
    };
    interventionId?: number;
  }
  