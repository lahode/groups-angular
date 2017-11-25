import { Component, OnInit } from '@angular/core';

import { GroupService } from '../../services/group/group.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group: Group;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.group = this.groupService.getGroup();
  }

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

}
