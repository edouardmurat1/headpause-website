import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { NinjaService, Ninja } from '../ninja.service';

@Component({
  selector: 'app-fight-result',
  templateUrl: './fight-result.component.html',
  styleUrls: ['./fight-result.component.css']
})
export class FightResultComponent implements OnInit {

  result: string;
  playerNinja: Ninja;
  opponentNinja: Ninja

  constructor(
    private route: ActivatedRoute,
    private ninjaService: NinjaService,
    private globalService: GlobalService) {
      globalService.backgroundImage = "url(../assets/fight-result-background.jpg)";
    }

  ngOnInit() {
    const playerid = +this.route.snapshot.paramMap.get('playerid');
    const opponentid = +this.route.snapshot.paramMap.get('opponentid');
    this.result = this.route.snapshot.paramMap.get('result');
    this.playerNinja = this.ninjaService.getNinja(playerid);
    this.opponentNinja = this.ninjaService.getNinja(opponentid);
  }

}
