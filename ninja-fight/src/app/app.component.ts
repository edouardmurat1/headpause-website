import { Component } from '@angular/core';
import { GlobalService } from './global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Battle';

  constructor(private globalService: GlobalService) {
    globalService.backgroundImage = "url(../assets/bg/start-bg.jpg)";
  }
}
