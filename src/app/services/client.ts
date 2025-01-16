import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = `http://localhost:5146/api/Client`;

  constructor(private http: HttpClient) {}

  // Récupérer tous les clients
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

  // Ajouter un client
  addClient(client: Client): Observable<any> {
    return this.http.post<any>(this.baseUrl, client);
  }

  // Mettre à jour un client
  updateClient(id: number, client: Client): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, client);
  }
}