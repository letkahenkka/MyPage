import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  buttons: string[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  result: string = '';
  addValue(value: any): void {
    console.log('addValue value: ' + value);

    if (value == '=') {
      try{
        this.result = eval(this.result);
      }
      catch{
        this.result = 'ERROR';
      }
    } 
    else if (value == 'C') {
      this.result = '';
    }
    else {
      this.result = this.result + value;
    }

  };


  constructor() { }

  ngOnInit(): void {
  }

}
