import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div style="text-align: center;">
      <h1>Form Control Component</h1>
      <button class="btn btn-danger" routerLink="../">Go Back</button>
      <button class="btn btn-primary" (click)="templateDriven()">
        Template Driven Form
      </button>
      <button class="btn btn-primary" routerLink="reactive">
        Reactive Form
      </button>
      <button class="btn btn-success" routerLink="/home">Home</button>
    </div>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      button {
        padding: 5px 10px;
        margin: 0px 5px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  templateDriven(){
    this.router.navigate(['templateDriven'], {relativeTo: this.route})
  }
}
