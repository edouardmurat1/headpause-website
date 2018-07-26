import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { NinjaSelectionComponent } from './ninja-selection/ninja-selection.component';
import { StartComponent } from './start/start.component';
import { PlayerHomeComponent } from './player-home/player-home.component';
import { PlayerSkillsComponent } from './player-skills/player-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NinjaSelectionComponent,
    StartComponent,
    PlayerHomeComponent,
    PlayerSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
