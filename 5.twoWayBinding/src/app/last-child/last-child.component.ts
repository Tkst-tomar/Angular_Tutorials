import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-last-child',
  template: `
  <h1>This is Last Child</h1>
  <h2>Data From Parent : {{secondName}}</h2>
  <button (click)="fireEvent()">Send Data To Parent</button>
  `,
  styles: [`

  `]
})
export class LastChildComponent implements OnInit {

  @Input() secondName:any;

  @Output() public childEvent = new EventEmitter();
  @Output() public secondEmitter = new EventEmitter();
  public data = ["first", 'second', 'third']
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit(this.data)
    this.secondEmitter.emit("Second Data From Kapil Tomar")
  }

}
