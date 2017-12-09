import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

import { Group } from '../../models/group.model';

import { environment } from '../../environments/environment';

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) { }

  // Get a range of groups
  public getGroupRange(from, to) : Observable<any> {
    return this.http.get(environment.endpoint + 'api/groups/all/' + from + '/' + to)
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

  // Get single group
  public getGroup(groupID: string) : Observable<any> {
    return this.http.get(environment.endpoint + 'api/groups/get/' + groupID)
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

  // Save a group
  public save(group: Group) : Observable<any> {
    return this.http.post(environment.endpoint + 'api/groups/save', group)
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

}
