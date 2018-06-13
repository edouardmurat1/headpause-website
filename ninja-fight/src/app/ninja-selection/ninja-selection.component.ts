import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GlobalService } from '../global.service';
import { NinjaService, Ninja } from '../ninja/ninja.service';
import { StoryService, Battle } from '../story/story.service';

@Component({
  selector: 'app-ninja-selection',
  templateUrl: './ninja-selection.component.html',
  styleUrls: ['./ninja-selection.component.css']
})
export class NinjaSelectionComponent implements OnInit {
  battle: Battle;
  players: Ninja[];
  enemy: Ninja;
  backgroundImage = "url(../assets/ninja-selection-background.jpg)";

  constructor(
    private ninjaService: NinjaService,
    private globalService: GlobalService,
    private storyService: StoryService,
    private route: ActivatedRoute) {
      globalService.backgroundImage = "url(../assets/bg/ninja-selection-bg.jpg)";

      const id = +this.route.snapshot.paramMap.get('id');
      this.battle = this.storyService.getBattle(id);
      this.players = this.storyService.getBattle(id).players;
      this.enemy = this.storyService.getBattle(id).enemy;
  }

}
