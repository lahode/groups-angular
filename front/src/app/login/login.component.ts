import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';

import { AuthService } from '../../services/auth/auth.service';
import { AppActions } from '../../store/app-actions';

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
              private router: Router,
              private store: Store<any>,
              private actions: AppActions) {}

  ngOnInit() {
    // Vérifie que l'utilisateur n'est pas loggué, sinon renvoie à la home page
    this.store.dispatch(<Action>this.actions.checkAuth());
    this.store.select(state => state)
      .filter((authState) => !authState.isLoading && authState.user !== null)
      .first()
      .subscribe((authState) => this.router.navigate(['/']));
    }

  login() {
    this.authService.login(this.username, this.password).subscribe(u => {
      this.router.navigate(['/']);
    }, error => this.error = error);
  }

}
