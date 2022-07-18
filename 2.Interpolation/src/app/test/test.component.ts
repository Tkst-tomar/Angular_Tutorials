import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
    Welcome {{name}}
  </h2>
  <h2>
    {{2+2}}
  </h2>
  <h2>
    {{"Welcome " + name}}
  </h2>
  <h2>
    {{name.length}}
  </h2>
  <h2>
    {{name.toUpperCase()}}
  </h2>
  <h2>
    {{greetUser()}}
  </h2>
  <h2>
    {{siteUrl}}
  </h2>
  <input [id]="myID" type="text" value="Tarun Tomar">
  <input id={{myID}} type="text" value="Tarun Tomar" bind-disabled="isDisabled">
  <button onclick="changeStat()">Click To Change</button>
  `,
  styles: [``]
})
export class TestComponent implements OnInit {

  public name = "Tarun Tomar"
  public siteUrl = window.location.href
  public isDisabled = false
  public myID = "testId";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello from " + this.name
  }

}
