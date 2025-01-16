import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/app/models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = `http://localhost:5146/api/Reclamation`;

  constructor(private http: HttpClient) {}

  getReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl);
  }

  addReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.apiUrl, reclamation);
  }

  deleteReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
