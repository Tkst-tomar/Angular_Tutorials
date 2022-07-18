import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service-comp',
  template: `
  <h2>Data through service</h2>
  <ul *ngFor="let item of empName" style="list-style-type: none;">
    <li>{{item.id}}. {{item.name}} - {{item.age}}</li>
  </ul>
  `,
  styleUrls: ['./service-comp.component.css']
})
export class ServiceCompComponent implements OnInit {
  public empName : any = [];
  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {
    this.empName = this._empService.getEmployees()
  }

}
