import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GroupService } from '../../services/group/group.service';
import { LogService } from '../../services/log/log.service';
import { Group } from '../../models/group.model';

const MAX_PER_PAGE = 6;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  error: any = '';
  groups: Group[];
  logGroupSeen: string[] = [];
  groupCount: number = 0;
  maxPerPage: number = MAX_PER_PAGE;
  fromto: any = {from: 0, to: MAX_PER_PAGE - 1};

  constructor(private groupService: GroupService,
              private logService: LogService,
              private router: Router) { }

  // Lance la récupération des groupes à la création du composant
  // Ajoute un observable permettant de mettre à jour les logs
  ngOnInit() {
    this.getGroupRange();
    this.logService.getLogs().subscribe((logGroupSeen) => {
      this.logGroupSeen = logGroupSeen;
    });
  }

  // Affiche le composant "Détail d'un groupe"
  showGroup(groupID: number) {
    this.router.navigate(['/group/' + groupID + '/detail']);
  }

  // Modifie la tranche des groupes à afficher (Pagination)
  changeResult(fromTo: any) {
    this.fromto = fromTo;
    this.getGroupRange();
  }

  // Sélectionne la tranche des groupe à afficher pour l'affichage
  getGroupRange() {
    let from = this.fromto.from;
    let to = this.fromto.to;
    this.groupService.getGroupRange(from, to).subscribe((response) => {
      this.groups = response.groups;
      this.groupCount = response.total;
    }, error => {
      this.error = error;
    });
  }

}
