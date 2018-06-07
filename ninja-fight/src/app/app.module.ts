import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { OpponentSelectionComponent } from './opponent-selection/opponent-selection.component';
import { NinjaSelectionComponent } from './ninja-selection/ninja-selection.component';
import { StartComponent } from './start/start.component';
import { FightComponent } from './fight/fight.component';
import { FightResultComponent } from './fight-result/fight-result.component';

@NgModule({
  declarations: [
    AppComponent,
    OpponentSelectionComponent,
    NinjaSelectionComponent,
    StartComponent,
    FightComponent,
    FightResultComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
