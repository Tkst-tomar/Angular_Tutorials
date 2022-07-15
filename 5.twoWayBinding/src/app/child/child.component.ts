import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>This is First Child</h1>
    <h2>Data received from parent {{ name }}</h2>
    <h2>
      Data Received From Child
      <div *ngFor="let x of message">
        <p>{{ x }}</p>
      </div>
      <div *ngFor="let x of message1">
        <p>{{ x }}</p>
      </div>
    </h2>
    <h2>{{msg}}</h2>
    <hr />
    <app-last-child
      (secondEmitter)="msg = $event"
      (childEvent)="message = $event"
      [secondName]="name"
    ></app-last-child>
    <hr />
    <app-second-last-child
      (secondEmitter)="message1 = $event"
      [secondName123]="name"
    ></app-second-last-child>
  `,
  styles: [``],
})
export class ChildComponent implements OnInit {
  // @Input() public parentData:any;
  @Input('parentData') public name: any;

  public message = '';
  public message1 = '';
  public msg = '';
  constructor() {}

  ngOnInit(): void {}
}
