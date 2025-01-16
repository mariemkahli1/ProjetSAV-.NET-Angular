import { Component } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 user: UtilisateurDto = { NomUtilisateur: '', MotPasse: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        const role = this.authService.getRole();
        if (role === 'Responsable') {
          this.router.navigate(['/dashboard']); // Redirection vers la page du responsable
        } else if (role === 'Client') {
          this.router.navigate(['/reclamations']); // Redirection vers la page du client
        }
      },
      error: () => {
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
      }
    });
  }
}
