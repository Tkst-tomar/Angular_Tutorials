import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-first',
  template: `
    <p>
      <button routerLink="../" >Go Back</button>
    </p>
  `,
  styles: [
  ]
})
export class ChildFirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
