import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { NinjaService, Ninja } from '../ninja/ninja.service';
import { StoryService, Battle } from '../story/story.service';

@Component({
  selector: 'app-fight-result',
  templateUrl: './fight-result.component.html',
  styleUrls: ['./fight-result.component.css']
})
export class FightResultComponent implements OnInit {

  result: string;
  battle: Battle;
  nextBattle: Battle;
  playerNinja: Ninja;
  opponentNinja: Ninja

  constructor(
    private route: ActivatedRoute,
    private ninjaService: NinjaService,
    private globalService: GlobalService,
    private storyService: StoryService) {
      globalService.backgroundImage = "url(../assets/bg/fight-result-bg.jpg)";
    }

  ngOnInit() {
    const battleid = +this.route.snapshot.paramMap.get('battleid');
    const playerid = +this.route.snapshot.paramMap.get('playerid');
    const opponentid = +this.route.snapshot.paramMap.get('opponentid');
    this.result = this.route.snapshot.paramMap.get('result');
    this.battle = this.storyService.getBattle(battleid);
    this.nextBattle = this.storyService.getBattle(battleid+1);
    this.playerNinja = this.ninjaService.getNinja(playerid);
    this.opponentNinja = this.ninjaService.getNinja(opponentid);
  }
}
