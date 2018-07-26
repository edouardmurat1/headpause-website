import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { NinjaSelectionComponent } from './ninja-selection/ninja-selection.component';
import { PlayerHomeComponent } from './player-home/player-home.component';

const routes: Routes = [

  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent},
  { path: 'ninja-selection', component: NinjaSelectionComponent},
  { path: 'player-home', component: PlayerHomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
