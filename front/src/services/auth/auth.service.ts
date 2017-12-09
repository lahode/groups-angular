import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user.model';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private headers: any;
  private authUser = new BehaviorSubject(null);
  public user$: Observable<User> = this.authUser.asObservable();

  constructor(private http: HttpClient) {}

  // Check authentication
  public checkAuth() : Observable<any> {
    // Define headers with token in localstorage
    this.headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};

    // Launch request
    return this.http.get(environment.endpoint + 'api/check-auth', this.headers)
      .map((response:any) => {
        this.authUser.next(response.user);
      })
      .catch(error => {
        localStorage.removeItem('token');
        throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'
      });
  }

  // Login
  public login(username: string, password: string) : Observable<any> {
    return this.http.post(environment.endpoint + 'login', {username, password})
      .map((response:any) => {
        this.authUser.next(response.user);
        localStorage.setItem('token', response.token);
      })
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

  // Signup
  public signup(username: string, password: string) : Observable<any> {
    return this.http.post(environment.endpoint + 'signup', {username, password})
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
