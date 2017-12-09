import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Store, Action } from '@ngrx/store';

import { AppActions } from '../../store/app-actions';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router,
              private store: Store<any>,
              private actions: AppActions) {}

  canActivate(): Observable<boolean> {
    this.store.dispatch(<Action>this.actions.checkAuth());
    return this.store.select(state => state)
      .filter((authState) => !authState.isLoading)
      .map((authState) => {
        if (authState.user !== null) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      });
  }

}
