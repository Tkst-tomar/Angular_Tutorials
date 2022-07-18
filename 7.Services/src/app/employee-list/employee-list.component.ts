import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
    <div style="display: flex;justify-content:space-around;">
      <div>
        <h2>Employee List</h2>
        <ul *ngFor="let x of empName">
          <li>{{ x.name }}</li>
        </ul>
      </div>
      <div>
        <app-emp-details [empName]="empName"></app-emp-details>
      </div>
      <div>
        <app-service-comp></app-service-comp>
      </div>
    </div>
    <hr />
  `,
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor() {}
  public empName = [
    {
      id: 1,
      name: 'Jennine Delwater',
      age: 30,
    },
    {
      id: 2,
      name: 'Ingar Ternouth',
      age: 24,
    },
    {
      id: 3,
      name: 'Morgen Bhatia',
      age: 27,
    },
    {
      id: 4,
      name: 'Wake Marchington',
      age: 30,
    },
    {
      id: 5,
      name: 'Janka Betun',
      age: 28,
    },
    {
      id: 6,
      name: 'Dion Lushey',
      age: 25,
    },
    {
      id: 7,
      name: 'Homere Vaulkhard',
      age: 27,
    },
    {
      id: 8,
      name: 'Katherine Lie',
      age: 28,
    },
    {
      id: 9,
      name: 'Nina Iacomini',
      age: 30,
    },
    {
      id: 10,
      name: 'Cinda Kasting',
      age: 26,
    },
  ];

  ngOnInit(): void {}
}
