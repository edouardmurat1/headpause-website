import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NinjaSelectionComponent } from './ninja-selection/ninja-selection.component';
import { StartComponent } from './start/start.component';
import { FightComponent } from './fight/fight.component';
import { FightResultComponent } from './fight-result/fight-result.component';
import { EndComponent } from './end/end.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    NinjaSelectionComponent,
    StartComponent,
    FightComponent,
    FightResultComponent,
    EndComponent,
    PlayerSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
