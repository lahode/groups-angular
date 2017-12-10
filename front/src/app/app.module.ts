import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { createRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { MenuComponent } from './menu/menu.component';
import { PagerComponent } from './pager/pager.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { GroupService } from '../services/group/group.service';
import { LogService } from '../services/log/log.service';
import { AuthService } from '../services/auth/auth.service';
import { AuthguardService } from '../services/authguard/authguard.service';

import { AppStoreModule } from '../store/app-store.module';

// Import Rxjs methods
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewGroupComponent,
    MenuComponent,
    PagerComponent,
    SwitchInputComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(createRoutes, { useHash: false }),
    HttpClientModule,
    AppStoreModule.forRoot(),
  ],
  providers: [
    GroupService,
    LogService,
    AuthService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
