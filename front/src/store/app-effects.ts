import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import { AppActions } from './app-actions';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AppEffects {

  // Listen for the 'CHECK_AUTH' action
  @Effect() checkAuthAction$ = this.action$
      .ofType(AppActions.CHECK_AUTH)
      .switchMap<Action, any>(() => this._auth.checkAuth()
      .map<Action, any>((_result: any) => {
        // If successful, dispatch CHECK_AUTH_SUCCESS action with user
        return <Action>{ type: AppActions.CHECK_AUTH_SUCCESS, payload: _result };
      // On errors dispatch CHECK_AUTH_FAILED action
      }).catch((res: any) => Observable.of({ type: AppActions.CHECK_AUTH_FAILED, payload: null }))
  );

  constructor(private action$: Actions,
              private _auth: AuthService) {}

}