import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent implements OnInit {

  choiceNum:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  numSelected:number[] = []
  count:number = 0
  toggle:boolean[] = [true, true, true, true, true, true, true, true, true, true]

  //doorway
  @Output() numList = new EventEmitter<number[]>()

  constructor() { }

  ngOnInit(): void {
  }

  chooseNum = (num:number) => {
    
    if(this.count < 3){
      this.toggle[num] = false;
      if(!this.numSelected.includes(this.choiceNum[num])){
        this.numSelected.push(this.choiceNum[num])
        this.count = this.count + 1
      }
    }
    
    this.numList.emit(this.numSelected)
  }

  rng = () => {
    this.clear()
    while (this.count < 3){
      let num = this.choiceNum[Math.floor(Math.random()*this.choiceNum.length)]
      if(!this.numSelected.includes(num)){
        this.numSelected.push(num)
        this.toggle[num-1] = false
        this.count = this.count +1
      }
    }
    this.numList.emit(this.numSelected)
  }

  clear = () => {
    this.count = 0
    for(let i = 0; i <= this.numSelected.length + 1; i++){
      this.numSelected.pop()
    }
    this.numList.emit(this.numSelected)
    for(let i =0; i<this.toggle.length; i++){
      this.toggle[i] = true
    }

  }
    
  

}
