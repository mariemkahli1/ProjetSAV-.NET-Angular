import { Component, OnInit } from '@angular/core';
import { Intervention } from 'src/app/models/intervention';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css']
})
export class InterventionsComponent {
  interventions: Intervention[] = [];
  newIntervention: Intervention = {
    id: 0,
    dateIntervention: new Date().toISOString(),
    montantFacture: 0,
    technicienId: 0,
    reclamationId: 0,
  };

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.fetchInterventions();
  }

  fetchInterventions() {
    this.interventionService.getInterventions().subscribe((data) => {
      this.interventions = data;
    });
  }

  addIntervention() {
    this.interventionService
      .addIntervention(this.newIntervention)
      .subscribe(() => {
        this.fetchInterventions();
        this.resetForm();
      });
  }

  resetForm() {
    this.newIntervention = {
      id: 0,
      dateIntervention: new Date().toISOString(),
      montantFacture: 0,
      technicienId: 0,
      reclamationId: 0,
    };
  }
}
