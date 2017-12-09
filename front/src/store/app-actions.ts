import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class AppActions {

    static CHECK_AUTH = 'CHECK_AUTH';
    static CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
    static CHECK_AUTH_FAILED = 'CHECK_AUTH_FAILED';

    checkAuth(): Action {
        return <Action>{
            type: AppActions.CHECK_AUTH,
        };
    }

}