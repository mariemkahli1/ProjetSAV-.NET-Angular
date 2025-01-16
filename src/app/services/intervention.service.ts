import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Intervention } from '../models/intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  private apiUrl = `http://localhost:5146/api/Intervention`;

  constructor(private http: HttpClient) {}

  getInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(this.apiUrl);
  }

  addIntervention(intervention: Intervention): Observable<Intervention> {
    return this.http.post<Intervention>(this.apiUrl, intervention);
  }
}
