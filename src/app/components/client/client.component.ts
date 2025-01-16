import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client';
import { Client } from 'src/app/models/client';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = []; // Liste des clients
  newClient: Client = { id: 0, firstName: '', lastName: '', userName: '', password: '' }; // Formulaire pour un nouveau client
  selectedClient: Client | null = null; // Client sélectionné pour mise à jour

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  addClient() {
    // Vérifie si les champs nécessaires sont remplis
    if (
      this.newClient.firstName &&
      this.newClient.lastName &&
      this.newClient.userName &&
      this.newClient.password
    ) {
      this.clientService.addClient(this.newClient).subscribe(() => {
        this.fetchClients(); // Recharge la liste des clients
        this.resetNewClient(); // Réinitialise le formulaire
      });
    } else {
      alert('Tous les champs sont requis !');
    }
  }

  // Réinitialise le formulaire de création d'un client
  resetNewClient() {
    this.newClient = {
      id: 0,
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
    };
  }

  // Sélectionne un client pour mise à jour
  selectClient(client: Client) {
    this.selectedClient = { ...client }; // Pré-remplir le formulaire de mise à jour
  }

  // Met à jour le client sélectionné
  updateClient() {
    if (
      this.selectedClient &&
      this.selectedClient.firstName &&
      this.selectedClient.lastName &&
      this.selectedClient.userName &&
      this.selectedClient.password
    ) {
      this.clientService.updateClient(this.selectedClient.id, this.selectedClient).subscribe(() => {
        this.fetchClients(); // Recharge la liste des clients après mise à jour
        this.selectedClient = null; // Réinitialise le client sélectionné
        alert('Client mis à jour avec succès!');
      });
    } else {
      alert('Tous les champs sont requis pour la mise à jour!');
    }
  }
}
