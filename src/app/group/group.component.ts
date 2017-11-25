import { Component, Input, Output, EventEmitter } from '@angular/core';

import { GroupService } from '../../services/group/group.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  @Input() group: Group;
  @Output() hideGroup = new EventEmitter<boolean>();

  constructor(private groupService: GroupService) { }

  getMemberCount() {
    return this.group.members ? this.group.members.length : '';
  }

  quitGroupDetail() {
    this.hideGroup.emit(true);
  }

}
