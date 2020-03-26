import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe2',
  templateUrl: './pipe2.component.html',
  styleUrls: ['./pipe2.component.scss']
})
export class Pipe2Component implements OnInit {
  text:string;
  constructor() { }

  ngOnInit(): void {
  }

}
