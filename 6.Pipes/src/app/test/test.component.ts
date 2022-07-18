import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <hr />
    <h2>Pipes for String Type</h2>
    <h3>{{ name }}</h3>
    <h3>{{ name | lowercase }}</h3>
    <h3>{{ name | uppercase }}</h3>
    <h3>{{ message | titlecase }}</h3>
    <h3>{{ name | slice: 3:7 }}</h3>
    <h3>{{ person | json }}</h3>
    <hr />
    <h2>{{ 'pipes for number type' | titlecase }}</h2>
    <h3>{{ 5.687 | number: '1.1-2' }}</h3>
    <h3>{{ 5.687 | number: '3.3-4' }}</h3>
    <h3>{{ 5.687 | number: '2.4-7' }}</h3>
    <hr />
    <h2>{{ 'percent pipe' | titlecase }}</h2>
    <h3>{{ 0.25 | percent }}</h3>
    <hr />
    <h2>Currency Pipe</h2>
    <h3>{{ 25 | currency: 'INR' }}</h3>
    <h3>{{ 25 | currency: 'INR':'code' }}</h3>
    <hr>
    <h2>Date Pipe</h2>
    <h3>{{ date }}</h3>
    <h3>{{ date | date}}</h3>
    <h3>{{ date | date:'short'}}</h3>
    <h3>{{ date | date:'shortDate'}}</h3>
    <h3>{{ date | date:'shortTime'}}</h3>
    <h3>{{ date | date:'medium'}}</h3>
    <h3>{{ date | date:'fullDate'}}</h3>


  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'Tarun Tomar';
  public message = 'Welcome to Angular';
  public person = {
    firstName: 'Kapil',
    lastName: 'Tomar',
  };
  public date = new Date()
  constructor() {}

  ngOnInit(): void {}
}
