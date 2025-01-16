import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = this.authService.getRole();

    if (!role) {
      this.router.navigate(['/login']);
      return false;
    }

    const currentPath = state.url; // Utilisation de state.url pour récupérer l'URL complète

    if (currentPath.includes('reclamation') && role === 'client') {
      return true;
    }

    if (!currentPath.includes('reclamation') && role === 'responsable') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
