import { Component, OnInit } from '@angular/core';

import { Group } from '../../models/group.model';
import { User } from '../../models/user.model';

export const user1 = new User('soloh', 'Han', 'Solo');
export const options = ['Anyone can see the list of members',
                        'Only the owner can see the list of members'];

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {

  group: Group = new Group('', '', 0, false, user1, '', '');
  accessOptions: string[] = [];
  showPopup: boolean = false;

  ngOnInit() {
    this.accessOptions = options;
  }

  changeUrl(event: any) {
    this.group.url = event.target.value;
  }

  changeVisibility(visibility: boolean) {
    this.group.visibility = visibility;
  }

  save() {
    this.showPopup = true;
  }
}
