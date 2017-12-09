import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user.model';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private authUser = new BehaviorSubject(null);
  public user$: Observable<User> = this.authUser.asObservable();

  constructor(private http: HttpClient) {}

  // Login
  public login(username: string, password: string) : Observable<any> {
    return this.http.post(environment.endpoint + 'login', {username, password})
      .map((response:any) => {
        this.authUser.next(response.user);
        localStorage.setItem('token', response.token);
      })
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

  // Log out
  public logout() : void {
    this.authUser.next(null);
    localStorage.removeItem('token');
  }

}
