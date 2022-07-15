import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dep-list',
  template: `
  <h2>Employees List</h2>
  <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
<button routerLink="/home" routerLinkActive="active1">Home</button>
  `,
  styleUrls: ['./dep-list.component.css']
})
export class DepListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
