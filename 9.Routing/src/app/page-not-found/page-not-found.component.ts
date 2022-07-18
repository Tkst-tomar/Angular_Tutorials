import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div style="text-align: center;">
      <h1>
        404 Page Not Found
      </h1>
      <a routerLink="../">Go back to Home Page</a>
    </div>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
