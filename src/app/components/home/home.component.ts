import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('Hook OnInit');
  }

  ngOnChanges() {
    console.log('Hook OnChanges');
  }

  ngDoCheck() {
    console.log('Hook DoCheck');
  }

  ngAfterContentInit() {
    console.log('Hook AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Hook AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Hook AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Hook AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Hook OnDestroy');
  }


}
