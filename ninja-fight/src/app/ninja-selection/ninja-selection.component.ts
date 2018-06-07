import { Component, OnInit } from '@angular/core';

import { NinjaService } from '../ninja.service';
import { Ninja } from '../ninja';

@Component({
  selector: 'app-ninja-selection',
  templateUrl: './ninja-selection.component.html',
  styleUrls: ['./ninja-selection.component.css']
})
export class NinjaSelectionComponent implements OnInit {
  ninjas: Ninja[];

  constructor(private ninjaService: NinjaService) { }

  ngOnInit() {
    this.ninjas = this.ninjaService.ninjas;
  }

}
