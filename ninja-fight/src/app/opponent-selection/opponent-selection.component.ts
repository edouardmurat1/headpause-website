import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NinjaService, Ninja } from '../ninja.service';

@Component({
  selector: 'app-opponent-selection',
  templateUrl: './opponent-selection.component.html',
  styleUrls: ['./opponent-selection.component.css']
})
export class OpponentSelectionComponent implements OnInit {

  startBattle = false;
  selectedNinja: Ninja;
  opponentNinja: Ninja;

  constructor(

    private route: ActivatedRoute,
    private ninjaService: NinjaService
  ) { }

  setOpponentNinja() {
      this.opponentNinja = this.ninjaService.getRandomNinja();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedNinja = this.ninjaService.getNinja(id);

    let timerId = setInterval(() => this.setOpponentNinja(), 100);
    setTimeout(() => {
      clearInterval(timerId);
      this.setOpponentNinja();
      this.startBattle = true;
    }, 2000)
  }
}
