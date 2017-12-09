import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate() {
    return this.authService.checkAuth()
      .map(() => {
        return true;
      }).catch(() => {
        this.router.navigate(['/login']);
        return Observable.of(false);
      });
  }

}
