import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupComponent } from '../group/group.component';

const groupRoutes: Routes = [{
  path: '',
  component: GroupComponent
}];

@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(groupRoutes)
  ],
})
export class GroupModule { }
