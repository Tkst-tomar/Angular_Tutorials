import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from '../fetching-data.service';

@Component({
  selector: 'app-fetched-data',
  template: `
    <div>
      <h1>Employees Details</h1>
      <button (click)="changeDisplay(this.display)">
        Display Employees Details
      </button>

      <div *ngIf="display else ifFalse">
        <h2>Click To Display the Employees Details</h2>
      </div>

      <ng-template #ifFalse>
        <ul style="list-style-type: none;" *ngFor="let x of employees">
          <li>{{ x.id }}. {{ x.name }}, Age - {{ x.age }}</li>
        </ul>
      </ng-template>
    </div>
  `,
  styleUrls: ['./fetched-data.component.css'],
})
export class FetchedDataComponent implements OnInit {
  public employees: any = [];

  constructor(private _empService: FetchingDataService) {}

  public display = true;

  ngOnInit(): void {
    // console.log('Display OnInit', this.display);
    this._empService.getEmployees().subscribe((data: any) => {
      // console.log("Response", data)
      this.employees = data,
       error => {
        this.error => this.error
      };
    });
  }

  changeDisplay(x: boolean) {
    // console.log('Display', this.display, x);
    this.display = !this.display;
  }
}
