import { Reclamation } from './reclamation';

export interface Intervention {
  id: number;
  dateIntervention: string;
  montantFacture: number;
  technicienId: number;
  technicien?: {
    id: number;
    firstName: string;
    lastName: string;
    specialty: string;
  };
  reclamationId: number;
  reclamation?: Reclamation; // Assurez-vous que l'importation est correcte
}
