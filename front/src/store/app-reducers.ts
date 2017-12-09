import { ActionReducerMap, combineReducers, ActionReducer, Action } from '@ngrx/store';

import { AppActions } from './app-actions';
import { UserStateI, IsLoadingStateI } from './app-states';

export interface AppStateI {
    user: UserStateI,
    isLoading: IsLoadingStateI,
}

function isLoadedReducers (state: IsLoadingStateI = false, action: any): IsLoadingStateI {
    switch (action.type) {
        case AppActions.CHECK_AUTH:
            return true;

        default:
            return false;
    }
}

function userReducers (state: UserStateI = null, action: any): UserStateI {
    switch (action.type) {
        case AppActions.CHECK_AUTH_SUCCESS:
            return Object.assign({}, state, action.payload);

        default:
            return null;
    }
}

export const AppReducers: ActionReducerMap<AppStateI> = {user: userReducers, isLoading: isLoadedReducers};