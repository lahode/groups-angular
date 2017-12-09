import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

import { Group } from '../../models/group.model';

import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class GroupService {

  private headers: any;

  constructor(private http: HttpClient) {}

  // Get a range of groups
  public getGroupRange(from, to) : Observable<any> {
    // Define headers with token in localstorage
    this.headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};

    // Launch request
    return this.http.get(environment.endpoint + 'api/groups/all/' + from + '/' + to, this.headers)
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

  // Get single group
  public getGroup(groupID: string) : Observable<any> {
    // Define headers with token in localstorage
    this.headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};

    // Launch request
    return this.http.get(environment.endpoint + 'api/groups/get/' + groupID, this.headers)
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

  // Save a group
  public save(group: Group) : Observable<any> {
    // Define headers with token in localstorage
    this.headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};

    // Launch request
    return this.http.post(environment.endpoint + 'api/groups/save', group, this.headers)
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

}
