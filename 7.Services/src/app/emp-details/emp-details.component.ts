import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let x of empName" style="list-style-type:none;">
      <li>{{ x.id }}. {{ x.name }} - {{ x.age }}</li>
    </ul>
  `,
  styleUrls: ['./emp-details.component.css'],
})
export class EmpDetailsComponent implements OnInit {
  @Input('empName') public empName: any;
  constructor() {}

  ngOnInit(): void {}
}
