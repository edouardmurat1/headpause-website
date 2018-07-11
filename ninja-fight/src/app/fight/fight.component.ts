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
  playerAction: Action;
  opponentAction: Action;

  hoverAttack: boolean;
  hoverDefence: boolean;
  hoverSpecial: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private ninjaService: NinjaService,
    private globalService: GlobalService,
    private storyService: StoryService) {
      globalService.backgroundImage = "url(../assets/bg/fight-bg.jpg)";
    }

  ngOnInit() {
    const battleid = +this.route.snapshot.paramMap.get('battleid');
    const playerid = +this.route.snapshot.paramMap.get('playerid');
    const opponentid = +this.route.snapshot.paramMap.get('opponentid');
    this.battle = this.storyService.getBattle(battleid);
    this.playerNinja = this.ninjaService.getNinja(playerid);
    this.opponentNinja = this.ninjaService.getNinja(opponentid);
    this.enemyAI = new EnemyAI(this.opponentNinja, this.playerNinja);

    if (this.battle == null) {
      this.battle = new Battle(0);
    }
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
    this.isDecisionActive = false;
  }

  opponentTurn() {
    this.title = "Opponent's turn";
    var nextAction = this.enemyAI.nextMove();
    if(nextAction) {
      this.opponentPlays(nextAction);
    } else {
      this.opponentPlays(null);
    }
  }

  decisionTurn() {
    this.title = "Result of this turn";

    this.isDecisionActive = true;

    //remove chakra from Player Action
    this.playerNinja.chakra.remove(this.playerAction.chakra);

    //remove chakra from Opponent Action
    this.opponentNinja.chakra.remove(this.opponentAction.chakra);

    //Player receives damage
    this.playerNinja.health.remove(this.opponentAction.damage - this.playerAction.defence);

    //Opponent receives damage
    this.opponentNinja.health.remove(this.playerAction.damage - this.opponentAction.defence);

    let isPlayerDead = this.playerNinja.health.now <= 0;
    let isPlayerOutOfChakra = this.playerNinja.chakra.now <= 0;
    let isOpponentDead = this.opponentNinja.health.now <= 0;
    let isOpponentOutOfChakra = this.opponentNinja.chakra.now <= 0;
    let playerHealth = this.playerNinja.health.now;
    let opponentHealth = this.opponentNinja.health.now;

    //Anyone dead yet?
    if(isPlayerDead && !isOpponentDead) {
      this.lost();
      return;
    } else if(!isPlayerDead && isOpponentDead) {
      this.won();
      return;
    } else if(isPlayerDead && isOpponentDead) {
      this.draw();
      return;
    }
    //Anyone out of chakra?
    if(isPlayerOutOfChakra && !isOpponentOutOfChakra) {
      this.lost();
      return;
    } else if(!isPlayerOutOfChakra && isOpponentOutOfChakra) {
      this.won();
      return;
    } else if(isPlayerOutOfChakra && isOpponentOutOfChakra) {
      if(playerHealth > opponentHealth) {
        this.won();
        return;
      } else if(playerHealth < opponentHealth) {
        this.lost();
        return;
      } else if(playerHealth == opponentHealth) {
        this.draw();
        return;
      }
    }

    //Next turn
    setTimeout(() => {
      this.turn("player");
    }, 2000)
  }

  playerPlays(action: Action) {
    this.playerAction = action;
    action.playSound();
    this.turn("opponent");
  }

  opponentPlays(action: Action) {
    if(action) {
      this.opponentAction = action;
    } else {
      this.opponentAction = new Action('', '');
    }
    this.turn("decision");
  }

  lost() {
    setTimeout(() => {
      this.router.navigateByUrl('/story/fight-result/'
      + this.battle.id + '/'
      + this.playerNinja.id + '/'
      + this.opponentNinja.id + '/lost');
    }, 2000)
  }

  won() {
    setTimeout(() => {
      if(this.storyService.isLastBattle(this.battle.id)) {
        this.router.navigateByUrl('/story/end');
      }
      else {
        this.router.navigateByUrl('/story/fight-result/'
        + this.battle.id + '/'
        + this.playerNinja.id + '/'
        + this.opponentNinja.id + '/won');
      }
    }, 2000)
  }

  draw() {
    setTimeout(() => {
      this.router.navigateByUrl('/story/fight-result/'
      + this.battle.id + '/'
      + this.playerNinja.id + '/'
      + this.opponentNinja.id + '/draw');
    }, 2000)
  }
}
