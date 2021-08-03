import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bet-amount',
  templateUrl: './bet-amount.component.html',
  styleUrls: ['./bet-amount.component.css']
})

export class BetAmountComponent implements OnInit {
  //class properties
  betSum: number = 0;
  betVals:number[] = [0, 1, 5, 10, 20]

  // doorway
  @Output() betAmount = new EventEmitter<number>()

  constructor() { }

  
  ngOnInit(): void {
  }
  
  //functions
  addBet = (betVal: number) => {
    if (betVal === 0) {
      this.betSum = 0;
      this.betAmount.emit(this.betSum)
      return;
    }
    this.betSum = this.betSum + betVal
    this.betAmount.emit(this.betSum)
  }

}
