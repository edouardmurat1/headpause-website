import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NinjaService } from '../ninja.service';
import { Ninja } from '../ninja';

@Component({
  selector: 'app-fight-result',
  templateUrl: './fight-result.component.html',
  styleUrls: ['./fight-result.component.css']
})
export class FightResultComponent implements OnInit {

  result: string;
  playerNinja: Ninja;

  constructor(
    private route: ActivatedRoute,
    private ninjaService: NinjaService) { }

  ngOnInit() {
    const playerid = +this.route.snapshot.paramMap.get('playerid');
    this.result = this.route.snapshot.paramMap.get('result');
    this.playerNinja = this.ninjaService.getNinja(playerid);
  }

}
