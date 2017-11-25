import { Component } from '@angular/core';

import { GroupService } from '../../services/group/group.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  groups: Group[];

  constructor(private groupService: GroupService) { }

  getGroups() {
    this.groups = this.groupService.getGroups();
  }

}
