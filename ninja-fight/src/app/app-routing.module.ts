import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NinjaSelectionComponent } from './ninja-selection/ninja-selection.component';
import { FightComponent } from './fight/fight.component';
import { FightResultComponent } from './fight-result/fight-result.component';
import { EndComponent } from './end/end.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';

const routes: Routes = [

  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent},
  { path: 'story/ninja-selection/:id', component: NinjaSelectionComponent},
  { path: 'story/fight/:battleid/:playerid/:opponentid', component: FightComponent},
  { path: 'story/fight-result/:battleid/:playerid/:opponentid/:result', component: FightResultComponent},
  { path: 'story/end', component: EndComponent},
  { path: 'battle/player-selection', component: PlayerSelectionComponent},
  { path: 'battle/:playerid/:opponentid', component: FightComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
