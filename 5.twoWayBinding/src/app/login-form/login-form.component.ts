import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-form',
  template: `
  <input [(ngModel)]="name" type="text">
  This is the name {{name}}
  <button (click)="consoleData()">Console Data</button>
  `,
  styles: [`

  `]
})
export class LoginFormComponent implements OnInit {
  public name = ""
  constructor() { }

  ngOnInit(): void {
  }

  consoleData(){
    console.log("NAME", this.name)
  }
}
