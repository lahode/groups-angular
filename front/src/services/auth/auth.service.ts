import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private headers: any;

  constructor(private http: HttpClient) {}

  // Check authentication
  public checkAuth() : Observable<any> {
    // Define headers with token in localstorage
    this.headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};

    // Launch request
    return this.http.get(environment.endpoint + 'api/check-auth', this.headers)
      .map((response:any) => {
        return response.user;
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
        localStorage.setItem('token', response.token);
      })
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

  // Signup
  public signup(username: string, password: string) : Observable<any> {
    return this.http.post(environment.endpoint + 'signup', {username, password})
      .map((response:any) => {
        localStorage.setItem('token', response.token);
      })
      .catch(error => {throw error.error.message ? error.error.message : 'Erreur de connexion au serveur'});
  }

  // Log out
  public logout() : void {
    localStorage.removeItem('token');
  }

}
