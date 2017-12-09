import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../services/auth/auth.service';
import { AppActions } from '../../store/app-actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user$: Observable<User>;

  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<any>,
              private actions: AppActions) {}

  ngOnInit() {
    this.user$ = this.store.select(state => state)
    .filter((authState) => !authState.isLoading)
    .map((authState) => authState.user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
