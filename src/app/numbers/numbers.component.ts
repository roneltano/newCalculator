import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  first: number;
  second: number;

  firstNum = 0;
  secondNum = 0;

  getFirstNum(value: string) {
    this.firstNum = parseInt(value);

    if (!isNaN(this.firstNum)) {
      this.first = this.firstNum;
      console.log(this.firstNum);
    }
  }

  getSecNum(value: string) {
    this.secondNum = parseInt(value);

    if (!isNaN(this.secondNum)) {
      this.second = this.secondNum;
      console.log(this.secondNum);
    }
  }

  ngOnInit() {}
}
