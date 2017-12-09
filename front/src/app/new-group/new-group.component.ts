import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Group } from '../../models/group.model';

import { GroupService } from '../../services/group/group.service';

export const options = ['Anyone can see the list of members',
                        'Only the owner can see the list of members'];

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {

  error: string = '';
  group: Group = new Group('', '', 0, false, null, '', '');
  accessOptions: string[] = [];
  groupSaved: boolean = false;

  constructor(private groupService: GroupService,
              private router: Router) {}

  ngOnInit() {
    this.accessOptions = options;
  }

  changeUrl(event: any) {
    this.group.url = event.target.value;
  }

  changeVisibility(visibility: boolean) {
    this.group.visibility = visibility;
  }

  goToHomePage() {
    if (this.groupSaved) {
      this.router.navigate(['/']);
    }
  }

  save() {
    this.group._id = undefined;
    this.groupService.save(this.group).subscribe((e) => {
      this.groupSaved = true;
    }, error => {
      this.error = error;
    });
  }
}
