import { BuiltinTypeName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whewhe';
  receiptString:string = ""
  betAmountFromChild:number = 0;
  numListFromChild:number[] = [];
  ableBtn:boolean = true
  

  //function
  receivedBetAmount= (dataFromBetAmount:number) => {
    this.betAmountFromChild = dataFromBetAmount
    this.able()
  }

  receivedNumList = (dataFromNumList:number[]) =>{
    this.numListFromChild= dataFromNumList
    this.able()
    
  }
  
  able = () => {
    
    if(this.betAmountFromChild > 0 && this.numListFromChild.length > 0){     
      this.ableBtn = false
    }
    else {
      this.ableBtn = true
    }
  }

  generateTicket = () => {
    
    alert(`RECEIPT:\n\nNumbers Selected: ${this.numListFromChild} \nTotal Paid: $${this.betAmountFromChild}`)
  }



  
}
