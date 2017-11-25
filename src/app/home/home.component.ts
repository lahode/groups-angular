import { Component, OnInit } from '@angular/core';

import { GroupService } from '../../services/group/group.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groups: Group[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groups = this.groupService.getGroups();
  }

}
