import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  template: `
  <div>
    <h1>
      First Component
    </h1>
  </div>
  `,
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
