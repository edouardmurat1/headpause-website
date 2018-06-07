import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NinjaService } from '../ninja.service';
import { Ninja, Attack } from '../ninja';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  enum State {
    PlayerTurn,
    EnemyTurn,
    ChoiceTurn
  };

  state: State;

  title: string;

  playerNinja: Ninja;
  opponentNinja: Ninja;

  playerChoice: any;
  enemyChoice: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private ninjaService: NinjaService) { }

  ngOnInit() {
    const playerid = +this.route.snapshot.paramMap.get('playerid');
    const opponentid = +this.route.snapshot.paramMap.get('opponentid');
    this.playerNinja = this.ninjaService.getNinja(playerid);
    this.opponentNinja = this.ninjaService.getNinja(opponentid);

    this.state = State.PlayerTurn;
  }

  stateMachine() {
    if state == State.PlayerTurn {
      this.title == "Your turn"
    }
    else if state == State.EnemyTurn {
      this.title = "Opponent's turn"
    }
    else if state == State.ChoiceTurn {

    }
  }

  turnOfPlayer() {
    this.title = "It's your turn"
    this.state
    this.isPlayerTurn = true;
  }

  turnOfOpponent() {
    this.title = "Your opponent is playing"
    this.isPlayerTurn = false;
    setTimeout(() => {
      this.opponentAI();
    }, 2000)
  }

  turnOfChoice() {
    this.title = "Result of actions is:"
    this.
  }

  opponentAI() {
    var i = Math.floor(Math.random() * 3) + 1;

    let element: HTMLElement
    if(i === 1) {
      element = document.getElementById('opponentAttackButton') as HTMLElement;
    }
    else if(i === 2) {
      element = document.getElementById('opponentDefenceButton') as HTMLElement;
    }
    else if(i === 3) {
      element = document.getElementById('opponentSpecialButton') as HTMLElement;
    }
    element.click()
  }

  playerPlays(type: string) {
    if(type == "attack") {
      this.opponentNinja.health -= this.playerNinja.attack.damage
    }

    if (this.opponentNinja.health < 0) {
      this.opponentDies();
      return;
    }

    this.turnOfOpponent();
  }

  opponentPlays(type: string) {
    if(type == "attack") {
      this.playerNinja.health -= this.opponentNinja.attack.damage
    }

    if (this.playerNinja.health < 0) {
      this.playerDies();
      return;
    }

    this.turnOfPlayer();
  }

  playerDies() {
    this.router.navigateByUrl('/fight-result/' + this.playerNinja.id + '/' + this.opponentNinja.id + '/lost')
  }

  opponentDies() {
    this.router.navigateByUrl('/fight-result/' + this.playerNinja.id + '/' + this.opponentNinja.id + '/won')
  }
}
