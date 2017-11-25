import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { MenuComponent } from './menu/menu.component';
import { PagerComponent } from './pager/pager.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';

import { GroupService } from '../services/group/group.service';
import { LogService } from '../services/log/log.service';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    HomeComponent,
    NewGroupComponent,
    MenuComponent,
    PagerComponent,
    SwitchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    GroupService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
