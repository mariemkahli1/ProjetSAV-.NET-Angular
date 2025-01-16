import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private users = [
        { email: 'mariemclient@gmail.com', password: 'client123', role: 'client' },
        { email: 'mariemResp@gmail.com', password: 'responsable123', role: 'responsable' },
      ];
    
      constructor(private router: Router) {}
    
      login(email: string, password: string): boolean {
        const user = this.users.find((u) => u.email === email && u.password === password);
    
        if (user) {
          localStorage.setItem('role', user.role);
          if (user.role === 'client') {
            this.router.navigate(['/reclamation']);
          } else if (user.role === 'responsable') {
            this.router.navigate(['/home']);
          }
          return true;
        } else {
          alert('Identifiants incorrects!');
          return false;
        }
      }
    
      logout(): void {
        localStorage.removeItem('role');
        this.router.navigate(['/login']);
      }
    
      getRole(): string | null {
        return localStorage.getItem('role');
      }
}
