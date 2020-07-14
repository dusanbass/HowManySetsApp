import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  setsDone = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setDone() {
    this.setsDone = this.setsDone + 1;
  }

  setsReset() {
    this.setsDone = 0;
  }

}
