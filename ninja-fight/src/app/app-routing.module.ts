import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NinjaSelectionComponent } from './ninja-selection/ninja-selection.component';
import { OpponentSelectionComponent } from './opponent-selection/opponent-selection.component';
import { FightComponent } from './fight/fight.component';
import { FightResultComponent } from './fight-result/fight-result.component';

const routes: Routes = [

  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent},
  { path: 'ninja-selection', component: NinjaSelectionComponent},
  { path: 'opponent-selection/:id', component: OpponentSelectionComponent},
  { path: 'fight/:playerid/:opponentid', component: FightComponent},
  { path: 'fight-result/:playerid/:opponentid/:result', component: FightResultComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
