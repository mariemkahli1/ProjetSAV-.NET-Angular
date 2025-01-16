import { Component,OnInit  } from '@angular/core';
import { TechnicienService } from 'src/app/services/technicien';
import { Technicien } from 'src/app/models/Technicien';
@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechniciensComponent implements OnInit {
  techniciens: Technicien[] = []; // Liste des techniciens
  newTechnicien: Technicien = {
    id: 0,
    nom: '',
    email: '',
    telephone: '',
  }; // Données pour un nouveau technicien


  selectedTechnicien: Technicien | null = null;
  constructor(private technicienService: TechnicienService) {}

  ngOnInit(): void {
    this.fetchTechniciens(); // Récupérer la liste des techniciens
  }

  fetchTechniciens() {
    this.technicienService.getTechniciens().subscribe((data) => {
      this.techniciens = data;
    });
  }

  addTechnicien() {
    if (this.newTechnicien.nom && this.newTechnicien.email && this.newTechnicien.telephone) {
      this.technicienService.addTechnicien(this.newTechnicien).subscribe(() => {
        this.fetchTechniciens(); // Mettre à jour la liste
        this.resetForm(); // Réinitialiser le formulaire
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
  updateTechnicien() {
    if (this.selectedTechnicien && this.selectedTechnicien.nom && this.selectedTechnicien.email && this.selectedTechnicien.telephone) {
      this.technicienService.updateTechnicien(this.selectedTechnicien).subscribe(() => {
        this.fetchTechniciens(); // Mettre à jour la liste
        this.resetForm(); // Réinitialiser le formulaire
        this.selectedTechnicien = null; // Réinitialiser le technicien sélectionné
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  deleteTechnicien(id: number) {
    this.technicienService.deleteTechnicien(id).subscribe(() => {
      this.fetchTechniciens(); // Mettre à jour la liste
    });
  }

  selectTechnicien(technicien: Technicien) {
    this.selectedTechnicien = { ...technicien }; // Préparer le technicien pour modification
  }

  resetForm() {
    this.newTechnicien = {
      id: 0,
      nom: '',
      email: '',
      telephone: '',
    };
  }
}