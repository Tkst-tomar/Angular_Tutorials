import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <h2 [style.color]="hasError ? 'red' : 'orange'">
    Style Binding
  </h2>
  <h2 [style.color]="highlightColor">
    Style Binding 2
  </h2>
  <h2 [ngStyle]="titleStyles">
    Style Binding 3
  </h2>
  `,
  styles: [`

  `]
})
export class TestComponent implements OnInit {
  public name = "Tarun Tomar";
  public hasError = true
  public isSpecial = true
  public highlightColor = 'green'
  public titleStyles = {
    color:'blue',
    fontStyle: 'italic',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
