import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewGroupComponent } from './new-group/new-group.component';

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
    path: '**',
    redirectTo: '/'
  }
];
