import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

import { NinjaService, Ninja } from '../ninja/ninja.service';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ])
    ])
  ]
})
export class PlayerSelectionComponent implements OnInit {

  unlocked_ninjas: Ninja[];
  all_ninjas: Ninja[];
  playerNinja: Ninja;
  opponentNinja: Ninja;
  playerSelected: boolean;
  inOrOut = 'out';

  constructor(
    private ninjaService: NinjaService,
    private router: Router) {
    this.unlocked_ninjas = ninjaService.unlocked_ninjas;
    this.all_ninjas = ninjaService.getNinjas();
    this.playerSelected = false;
  }

  selectPlayer(ninja: Ninja) {
    this.playerSelected = true;
    this.inOrOut = 'in';
    this.playerNinja = ninja;
  }

  selectOpponent(ninja: Ninja) {
    this.opponentNinja = ninja;
    this.router.navigateByUrl('/battle/'
    + this.playerNinja.id + '/'
    + this.opponentNinja.id);
  }

  ngOnInit() {}
}
