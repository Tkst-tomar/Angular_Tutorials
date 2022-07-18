import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switchDirective',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchDefault>Pick Again</div>
      <div *ngSwitchCase="'red'">Red Color</div>
      <div *ngSwitchCase="'green'">Green Color</div>
      <div *ngSwitchCase="cond">Blue Color</div>
    </div>
    <button (click)="ChangeColor()">Click to Change Color</button>
    <button (click)="this.color = 'yellow'">Pick Yellow</button>
    <button (click)="this.color = 'red'">Pick Red</button>
  `,
  styles: [``],
})
export class NgSwitchDirectiveComponent implements OnInit {
  color = "yellow"
  abc = true
  cond = "blue"
  constructor() {}

  ngOnInit(): void {}

  ChangeColor(){
    console.log("Color", this.color)
    if(this.color === 'red'){
    this.color = 'blue'
    }else if(this.color === 'green'){
    this.color = 'red'
    }else if(this.color === 'blue'){
      this.color = 'green'
    }else {
      this.color = 'red'
    }
    console.log("Color end", this.color)
  }

  PickYellow(){
    this.color === 'yellow'
  }
}
