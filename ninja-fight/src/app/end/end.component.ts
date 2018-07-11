import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { NinjaService } from '../ninja/ninja.service';

@Component({
  selector: 'app-end-result',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(
    private globalService: GlobalService,
    private ninjaService: NinjaService) {
      globalService.backgroundImage = "url(../assets/bg/end-bg.jpg)";
    }

  ngOnInit() {
    this.ninjaService.unlockNextNinja();
  }
}
