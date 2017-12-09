import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GroupService } from '../../services/group/group.service';
import { LogService } from '../../services/log/log.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group: Group;
  error: string;

  constructor(private groupService: GroupService,
              private logService: LogService,
              private route:ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.groupService.getGroup(params['id']).subscribe((group) => {
        this.group = group.group;
        this.logService.addLog(new Date(Date.now()).toLocaleString() + ' - ' + this.group.name);
      }, error => {
        this.error = error;
      });
    });
  }

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

  quitGroupDetail() {
    this.router.navigate(['/']);
  }

}
