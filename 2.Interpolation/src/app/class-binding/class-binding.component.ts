import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2 class="text-success">Welcome {{ name }}</h2>
    <h2 [class]="successClass" class="text-special">Angular Js</h2>
    <h2 [class.text-danger]="hasError">Chetu India</h2>
    <h2 [ngClass]="messageClasses">This is ng Class heading</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class ClassBindingComponent implements OnInit {
  public name = 'Tarun Tomar'
  public successClass = 'text-success'
  public hasError = false
  public isSpecial = true
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  constructor() {}

  ngOnInit(): void {}
}
