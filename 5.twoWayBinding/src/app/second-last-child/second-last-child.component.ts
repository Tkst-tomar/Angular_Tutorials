import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-last-child',
  template: `
  <h2>Second Last Child Sibling of Last Child</h2>
  <h2>Data From Parent {{secondName123}}</h2>
  <button (click)="sendData()">Send Data To Parent</button>
  `,
  styleUrls: ['./second-last-child.component.css']
})


export class SecondLastChildComponent implements OnInit {

  @Input() secondName123:any;

  @Output() public secondEmitter = new EventEmitter();

  public arrData = ['A','B','C']
  constructor() { }

  ngOnInit(): void {
  }
  sendData(){
    console.log("Event Emitted From Second Child")
    this.secondEmitter.emit(this.arrData)
  }
}
