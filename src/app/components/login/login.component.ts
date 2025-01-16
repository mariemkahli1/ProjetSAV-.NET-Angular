import { Component } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private apiUrl = 'http://localhost:5146/api/Authentification'; // URL de l'API pour l'authentification

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode pour se connecter
  login(user: UtilisateurDto): Observable<string> {
    return this.http.post<string>(this.apiUrl, user);
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }


  // Méthode pour obtenir le rôle de l'utilisateur à partir du token
  getRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Décoder le JWT pour obtenir les claims
      return decodedToken.role;
    }
    return null;
  }
}
