import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dep-details',
  template: `
<h2>Employees Details</h2>
<li><a routerLink="/home" routerLinkActive="active">Home</a></li>
<button routerLink="../" routerLinkActive="active1">Home</button>
  `,
  styleUrls: ['./dep-details.component.css']
})
export class DepDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
