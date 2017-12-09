import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    // Vérifie que l'utilisateur n'est pas loggué, sinon renvoie à la home page
    this.authService.checkAuth().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(u => {
      this.router.navigate(['/']);
    }, error => this.error = error);
  }

}
