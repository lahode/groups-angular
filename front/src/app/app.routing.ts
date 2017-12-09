import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { LoginComponent } from './login/login.component';

export const createRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'group/new',
    component: NewGroupComponent
  },
  {
    path: 'group/:id/detail',
    loadChildren: './group/group.module#GroupModule',
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
