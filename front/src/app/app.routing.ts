import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from '../services/authguard/authguard.service';

import { HomeComponent } from './home/home.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { LoginComponent } from './login/login.component';

export const createRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'group/new',
    component: NewGroupComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'group/:id/detail',
    loadChildren: './group/group.module#GroupModule',
    canActivate: [AuthguardService]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
