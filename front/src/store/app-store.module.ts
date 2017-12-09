import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './app-effects';
import { AppActions } from './app-actions';
import { AppReducers } from './app-reducers';

@NgModule({
    imports: [
        StoreModule.forRoot(AppReducers),
        EffectsModule.forRoot([AppEffects]),
    ],
})
export class AppStoreModule {
    static forRoot() {
        return {
            ngModule: AppStoreModule,
            providers: [AppActions]
        };
    }
}