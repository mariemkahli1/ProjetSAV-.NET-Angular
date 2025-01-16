import { Component } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const success = this.authService.login(this.email, this.password);
    if (!success) {
      this.email = '';
      this.password = '';
    }
  }
}
