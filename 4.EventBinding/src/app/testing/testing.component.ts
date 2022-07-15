import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  template: `
  <h2 [style.color]="hasError ? 'red' : 'green'">Welcome {{name}}</h2>
  <button (click)="runFollowing($event)">Click To Run Event</button>
  <button (click)="changeName('Kapil Tomar')">Click to change name</button>
  <input #myInp type="text" (change)="change(myInp.value)">
  <h2>Following is Typed : {{myInp.value}}</h2>
  <button (click)="logMessage(myInp)">Log Changes</button>
  `,
  styles: [`

  `]
})
export class TestingComponent implements OnInit {


  public name = 'Tarun Tomar'
  public hasError = false
  constructor() { }

  ngOnInit(): void {
  }

  runFollowing(x : any){
    console.log(x)
    this.hasError = !this.hasError
    console.log("Button Clicked")
    console.log(this.hasError)
  }
  change(x : any){
    this.name = x
    console.log("XXX",x)
  }
  changeName(x : string){
    this.name = x
  }

  logMessage(x : any){
    this.name = x.value
  }
}
