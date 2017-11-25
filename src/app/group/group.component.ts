import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GroupService } from '../../services/group/group.service';
import { LogService } from '../../services/log/log.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group: Group;
  @Output() hideGroup = new EventEmitter<boolean>();

  constructor(private groupService: GroupService,
              private logService: LogService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.group = this.groupService.getGroup(params['id'])
      this.logService.addLog(new Date(Date.now()).toLocaleString() + ' - ' + this.group.name);
    });
  }

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

  quitGroupDetail() {
    this.hideGroup.emit(true);
  }

}
