import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { GlobalService } from '../global.service';
import { NinjaService, Ninja } from '../ninja.service';

@Component({
  selector: 'app-ninja-selection',
  templateUrl: './ninja-selection.component.html',
  styleUrls: ['./ninja-selection.component.css']
})
export class NinjaSelectionComponent implements OnInit {
  ninjas: Ninja[];
  backgroundImage = "url(../assets/ninja-selection-background.jpg)";

  constructor(
    private ninjaService: NinjaService,
    private globalService: GlobalService) {
      globalService.backgroundImage = "url(../assets/ninja-selection-background.jpg)";
  }

  ngOnInit() {
    this.ninjas = this.ninjaService.getNinjas();
  }

}
