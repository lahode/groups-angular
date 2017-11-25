import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';
import { Group } from '../../models/group.model';

@Injectable()
export class GroupService {

  constructor() { }

  // Get all groups
  public getGroups(): Group[] {

    const user1 = new User('soloh', 'Han', 'Solo');
    const user2 = new User('doj', 'Jon', 'Do');
    const user3 = new User('emmanuelh', 'Henri', 'Emmanuel');
    
    const groups = [
      new Group('G11113', 'BOUsers', 0, true, user2, 'Utilisateurs BO', '', [user1]),
      new Group('G11114', 'COSI', 0, true, user2, 'Membres et invités de la COSI', '', [user1, user3]),
      new Group('G11115', 'DIT-SB_WinTeam', 1, true, user1, 'membres de la WinTeam'),
      new Group('G11116', 'DIT-WinTeam-SQL', 0, true, user1, 'Groupe concerné'),
      new Group('G11117', 'IDEVELOP', 0, true, user1, 'Membres du groupe IDEVELOP', '', [user2, user3]),
      new Group('G11118', 'IDEVELOP-testeurs-frontend', 1, true, user1, 'Membres du groupe IDEVELOP testeur', '', [user2, user3]),
      new Group('G11119', 'Autre groupe', 0, true, user3, 'Membres du groupe IDEVELOP', '', [user2]),
    ];
    
    return groups;
  }

  // Retourne la tranche des groupes à afficher pour l'affichage
  public getGroupRange(from, to) {
    const allGroups = this.getGroups();
    let groups = [];
    for (let i = from; i <= to; i++) {
      if (i < allGroups.length) {
        groups.push(allGroups[i]);
      }
    }
    return groups;
  }

  // Get single group
  public getGroup() {
    return this.getGroups()[4];
  }

}
