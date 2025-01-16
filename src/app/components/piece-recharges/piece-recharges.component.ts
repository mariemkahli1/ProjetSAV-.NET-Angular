import { Component, OnInit } from '@angular/core';
import { PieceRechargeService } from 'src/app/services/piece-recharge.service';

@Component({
  selector: 'app-piece-recharges',
  templateUrl: './piece-recharges.component.html',
  styleUrls: ['./piece-recharges.component.css']
})
export class PieceRechargesComponent {
  piecesRecharge: any[] = []; // Liste des pièces de rechange
  newPieceRecharge: any = this.initPieceRecharge(); // Données pour une nouvelle pièce de rechange
  isEditing: boolean = false; // Indique si on est en mode édition

  constructor(private pieceRechargeService: PieceRechargeService) {}

  ngOnInit(): void {
    this.fetchPiecesRecharge();
  }

  initPieceRecharge() {
    return {
      id: 0,
      nom: '',
      prix: 0,
      articleId: 0,
      article: {
        id: 0,
        libelle: '',
        estSousGarantie: true,
        prix: 0,
      },
    };
  }

  fetchPiecesRecharge() {
    this.pieceRechargeService.getPiecesRecharge().subscribe((data) => {
      this.piecesRecharge = data;
    });
  }

  addPieceRecharge() {
    if (this.newPieceRecharge.nom && this.newPieceRecharge.prix && this.newPieceRecharge.articleId) {
      if (this.isEditing) {
        // Mode édition : Mettre à jour la pièce
        this.pieceRechargeService.updatePieceRecharge(this.newPieceRecharge).subscribe(() => {
          this.fetchPiecesRecharge();
          this.resetForm();
        });
      } else {
        // Mode ajout : Ajouter une nouvelle pièce
        this.pieceRechargeService.addPieceRecharge(this.newPieceRecharge).subscribe(() => {
          this.fetchPiecesRecharge();
          this.resetForm();
        });
      }
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }

  editPieceRecharge(piece: any) {
    this.newPieceRecharge = { ...piece }; // Pré-remplit le formulaire avec les données de la pièce
    this.isEditing = true;
  }

  deletePieceRecharge(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette pièce ?')) {
      this.pieceRechargeService.deletePieceRecharge(id).subscribe(() => {
        this.fetchPiecesRecharge();
      });
    }
  }

  resetForm() {
    this.newPieceRecharge = this.initPieceRecharge();
    this.isEditing = false;
  }
}
