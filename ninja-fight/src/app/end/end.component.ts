import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-end-result',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(private globalService: GlobalService) {
      globalService.backgroundImage = "url(../assets/bg/end-bg.jpg)";
    }

  ngOnInit() {}
}
