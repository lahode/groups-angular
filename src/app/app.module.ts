import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { NewGroupComponent } from './new-group/new-group.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    HomeComponent,
    NewGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
