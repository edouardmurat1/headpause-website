import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GlobalService } from '../global.service';
import { NinjaService, Ninja, Action } from '../ninja/ninja.service';
import { StoryService, Battle } from '../story/story.service';
import { EnemyAI } from '../ai/enemyai';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  title: string;

  battle: Battle;
  playerNinja: Ninja;
  opponentNinja: Ninja;

  enemyAI: EnemyAI;

  isPlayerAttackActive: boolean;
  isPlayerDefenceActive: boolean;
  isPlayerSpecialActive: boolean;

  isDecisionActive: boolean;
  playerChoice: string;
  opponentChoice: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private ninjaService: NinjaService,
    private globalService: GlobalService,
    private storyService: StoryService) {
      globalService.backgroundImage = "url(../assets/fight-background.jpg)";
    }

  ngOnInit() {
    const battleid = +this.route.snapshot.paramMap.get('battleid');
    const playerid = +this.route.snapshot.paramMap.get('playerid');
    const opponentid = +this.route.snapshot.paramMap.get('opponentid');
    this.battle = this.storyService.getBattle(battleid);
    this.playerNinja = this.ninjaService.getNinja(playerid);
    this.opponentNinja = this.ninjaService.getNinja(opponentid);
    this.enemyAI = new EnemyAI(this.opponentNinja, this.playerNinja);

    this.turn("player");
  }

  turn(turn: string) {
    if(turn == "player") {
      this.playerTurn();
    }
    else if(turn == "opponent") {
      this.opponentTurn();
    }
    else if(turn == "decision") {
      this.decisionTurn();
    }
  }

  playerTurn() {
    this.title = "Your turn";

    let chakra = this.playerNinja.chakra.now;
    let chakraForAttack = this.playerNinja.attack.chakra;
    let chakraForDefence = this.playerNinja.defence.chakra;
    let chakraForSpecial = this.playerNinja.special.chakra;

    this.isPlayerAttackActive = (chakra >= chakraForAttack)? true : false;
    this.isPlayerDefenceActive = (chakra >= chakraForDefence)? true : false;
    this.isPlayerSpecialActive = (chakra >= chakraForSpecial)? true : false;

    this.isDecisionActive = false;
  }

  opponentTurn() {
    this.title = "Opponent's turn";

    this.isPlayerAttackActive = false;
    this.isPlayerDefenceActive = false;
    this.isPlayerSpecialActive = false;

    setTimeout(() => {
      var nextAction = this.enemyAI.nextMove();
      this.opponentPlays(nextAction.type);
    }, 2000)
  }

  decisionTurn() {
    this.title = "Result of this turn";

    this.isPlayerAttackActive = false;
    this.isPlayerDefenceActive = false;
    this.isPlayerSpecialActive = false;

    this.isDecisionActive = true;

    //remove chakra from Player Action
    let chakraSpentByPlayer = 0;
    if(this.playerChoice == "attack") {
      chakraSpentByPlayer += this.playerNinja.attack.chakra;
    } else if(this.playerChoice == "defence") {
      chakraSpentByPlayer += this.playerNinja.defence.chakra;
    } else if(this.playerChoice == "special") {
      chakraSpentByPlayer += this.playerNinja.special.chakra;
    }
    this.playerNinja.chakra.remove(chakraSpentByPlayer);

    //remove chakra from Opponent Action
    let chakraSpentByOpponent = 0;
    if(this.opponentChoice == "attack") {
      chakraSpentByOpponent += this.opponentNinja.attack.chakra;
    } else if(this.opponentChoice == "defence") {
      chakraSpentByOpponent += this.opponentNinja.defence.chakra;
    } else if(this.opponentChoice == "special") {
      chakraSpentByOpponent += this.opponentNinja.special.chakra;
    }
    this.opponentNinja.chakra.remove(chakraSpentByOpponent);

    //What is the result of this turn?
    // defence > attack > special > defence
    if(this.playerChoice == "attack") {
      if(this.opponentChoice == "attack") {
        this.playerNinja.health.remove(this.opponentNinja.attack.damage);
        this.opponentNinja.health.remove(this.playerNinja.attack.damage);
      } else if(this.opponentChoice == "defence") {
        //nothing happens
      } else if(this.opponentChoice == "special") {
        this.opponentNinja.health.remove(this.playerNinja.attack.damage);
      }
    } else if(this.playerChoice == "defence") {
      if(this.opponentChoice == "attack") {
        //nothing happens
      } else if(this.opponentChoice == "defence") {
        //nothing happens
      } else if(this.opponentChoice == "special") {
        this.playerNinja.health.remove(this.opponentNinja.special.damage);
      }
    } else if(this.playerChoice == "special") {
      if(this.opponentChoice == "attack") {
        this.playerNinja.health.remove(this.opponentNinja.attack.damage);
      } else if(this.opponentChoice == "defence") {
        this.opponentNinja.health.remove(this.playerNinja.special.damage);
      } else if(this.opponentChoice == "special") {
        this.playerNinja.health.remove(this.opponentNinja.special.damage);
        this.opponentNinja.health.remove(this.playerNinja.special.damage);
      }
    }

    let isPlayerDead = (this.playerNinja.health.now <= 0 || this.playerNinja.chakra.now <= 0);
    let isOpponentDead = (this.opponentNinja.health.now <= 0 || this.opponentNinja.chakra.now <= 0);

    //Anyone dead yet?
    if(isPlayerDead && !isOpponentDead) {
      this.playerDies();
      return;
    }
    else if(!isPlayerDead && isOpponentDead) {
      this.opponentDies();
      return;
    }
    else if(isPlayerDead && isOpponentDead) {
      this.draw();
      return;
    }

    //Next turn
    setTimeout(() => {
      this.turn("player");
    }, 2000)
  }

  playerPlays(type: string) {
    this.playerChoice = type;
    this.turn("opponent");
  }

  opponentPlays(type: string) {
    this.opponentChoice = type;
    this.turn("decision");
  }

  playerDies() {
    setTimeout(() => {
      this.router.navigateByUrl('/fight-result/'
      + this.battle.id + '/'
      + this.playerNinja.id + '/'
      + this.opponentNinja.id + '/lost');
    }, 2000)
  }

  opponentDies() {
    setTimeout(() => {
      this.router.navigateByUrl('/fight-result/'
      + this.battle.id + '/'
      + this.playerNinja.id + '/'
      + this.opponentNinja.id + '/won');
    }, 2000)
  }

  draw() {
    setTimeout(() => {
      this.router.navigateByUrl('/fight-result/'
      + this.battle.id + '/'
      + this.playerNinja.id + '/'
      + this.opponentNinja.id + '/draw');
    }, 2000)
  }
}
