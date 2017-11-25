import { Component, OnInit } from '@angular/core';

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

  groups: Group[];
  groupDetail: Group | null = null;
  logGroupSeen: string[] = [];
  groupCount: number = 0;
  maxPerPage: number = MAX_PER_PAGE;
  fromto: any = {from: 0, to: MAX_PER_PAGE - 1};

  constructor(private groupService: GroupService,
              private logService: LogService) { }

  // Lance la récupération des groupes à la création du composant
  // Ajoute un observable permettant de mettre à jour les logs
  ngOnInit() {
    this.getGroups();
    this.logService.getLogs().subscribe((logGroupSeen) => {
      this.logGroupSeen = logGroupSeen;
    });
  }

  // Affiche le composant "Détail d'un groupe"
  showGroup(group: Group) {
    this.groupDetail = group;
  }

  // Affiche le composant "Liste des groupes"
  hideGroup() {
    this.groupDetail = null;
  }

  // Récupère le nombre total des groupes et sélectionne les groupes à afficher
  getGroups() {
    this.groupCount = this.groupService.getGroups().length;
    this.groups = this.groupService.getGroupRange(this.fromto.from, this.fromto.to);
  }

  // Modifie la tranche des groupes à afficher (Pagination)
  changeResult(fromTo: any) {
    this.fromto = fromTo;
    this.groups = this.groupService.getGroupRange(this.fromto.from, this.fromto.to);
  }

}
