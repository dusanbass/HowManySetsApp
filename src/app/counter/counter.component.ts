import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  setsDone = 0;
  isMobile = false;

  constructor(private bpo: BreakpointObserver) {
    this.isMobile = bpo.isMatched([Breakpoints.Small, Breakpoints.XSmall]);
  }

  ngOnInit(): void {
  }

  setDone() {
    this.setsDone = this.setsDone + 1;
  }

  setsReset() {
    this.setsDone = 0;
  }

}
