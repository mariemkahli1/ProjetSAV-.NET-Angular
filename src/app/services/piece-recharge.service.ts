import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PieceRechargeService {
  private baseUrl = 'http://localhost:5146/api/PieceRechange';

  constructor(private http: HttpClient) {}

  getPiecesRecharge(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addPieceRecharge(pieceRecharge: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, pieceRecharge);
  }

  updatePieceRecharge(pieceRecharge: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${pieceRecharge.id}`, pieceRecharge);
  }

  deletePieceRecharge(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
