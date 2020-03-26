import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.scss']
})
export class Pipe1Component implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
