import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation';
import {Reclamation} from 'src/app/models/reclamation';
@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent {
  reclamations: Reclamation[] = [];
  newReclamation: Reclamation = {
    id: 0,
    description: '',
    dateReclamation: new Date().toISOString(),
    idArticleReclamation: 0,
    etatId: 0,
    clientId: 0,
  };

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.fetchReclamations();
  }

  fetchReclamations() {
    this.reclamationService.getReclamations().subscribe((data) => {
      this.reclamations = data;
    });
  }

  addReclamation() {
    this.reclamationService.addReclamation(this.newReclamation).subscribe(() => {
      this.fetchReclamations();
      this.resetForm();
    });
  }
  deleteReclamation(id: number) {
    this.reclamationService.deleteReclamation(id).subscribe(() => {
      this.fetchReclamations();  // Recharger les réclamations après suppression
    });
  }

  resetForm() {
    this.newReclamation = {
      id: 0,
      description: '',
      dateReclamation: new Date().toISOString(),
      idArticleReclamation: 0,
      etatId: 0,
      clientId: 0,
    };
  }
}
