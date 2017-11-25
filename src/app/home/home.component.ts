import { Component, OnInit } from '@angular/core';

import { GroupService } from '../../services/group/group.service';
import { LogService } from '../../services/log/log.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groups: Group[];
  groupDetail: Group | null = null;
  logGroupSeen: string[] = [];

  constructor(private groupService: GroupService,
              private logService: LogService) { }

  ngOnInit() {
    this.getGroups();
    this.logService.getLogs().subscribe((logGroupSeen) => {
      this.logGroupSeen = logGroupSeen;
    });
  }

  showGroup(group: Group) {
    this.groupDetail = group;
  }

  hideGroup() {
    this.groupDetail = null;
  }

  getGroups() {
    this.groups = this.groupService.getGroups();
  }

}
