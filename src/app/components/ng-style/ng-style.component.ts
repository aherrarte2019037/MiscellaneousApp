import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  color: string = '#000000';
  size: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

  randomColor() {
    this.color = '#' + Math.floor( Math.random()*16777215 ).toString(16);
  }

}
