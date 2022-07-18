import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
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
  }
}
