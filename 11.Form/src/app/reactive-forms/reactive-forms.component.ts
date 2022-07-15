import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  template: `
    <div style="text-align: center;">
      <h2>Reactive Form</h2>
    </div>
    <div
      class="container-fluid"
      style="width: 800px;border:3px solid black; padding: 50px; border-radius:50px;margin-bottom:50px;"
    >
      <h2>Enrollment Form</h2>
      <form [formGroup]="registrationForm">
        {{ registrationForm.value | json }}
        <div class="mb-3">
          <label for="userName" class="form-label">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            class="form-control"
            placeholder="Enter Username"
            aria-describedby="userName"
            formControlName="userName"
          />
          <small id="userName" class="text-muted"></small>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Enter Password"
            aria-describedby="password"
            formControlName="password"
          />
          <small id="password" class="text-muted"></small>
        </div>

        <div class="mb-3">
          <label for="confirmPassword" class="form-label"
            >Confirm Password</label
          >
          <input
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            aria-describedby="confirmPassword"
            formControlName="confirmPassword"
          />
          <small id="confirmPassword" class="text-muted"></small>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  `,
  styles: [`

  `],
})
export class ReactiveFormsComponent implements OnInit {
  registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
