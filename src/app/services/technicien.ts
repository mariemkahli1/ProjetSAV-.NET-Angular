import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technicien } from 'src/app/models/Technicien';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {
  private apiUrl = 'http://localhost:5146/api/Technicien';

  constructor(private http: HttpClient) {}

  getTechniciens(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(this.apiUrl);
  }

  addTechnicien(technicien: Technicien): Observable<Technicien> {
    return this.http.post<Technicien>(this.apiUrl, technicien);
  }
  updateTechnicien(technicien: Technicien): Observable<Technicien> {
    return this.http.put<Technicien>(`${this.apiUrl}/${technicien.id}`, technicien);
  }

  deleteTechnicien(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
