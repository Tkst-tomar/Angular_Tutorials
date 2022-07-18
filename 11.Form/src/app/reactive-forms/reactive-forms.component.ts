import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
        <div formGroupName="address">
          <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              placeholder="Confirm Password"
              aria-describedby="city"
              formControlName="city"
            />
            <small id="confirmPassword" class="text-muted"></small>
          </div>

          <div class="mb-3">
            <label for="state" class="form-label">State</label>
            <input
              type="text"
              name="state"
              class="form-control"
              placeholder="Confirm Password"
              aria-describedby="state"
              formControlName="state"
            />
            <small id="confirmPassword" class="text-muted"></small>
          </div>

          <div class="mb-3">
            <label for="code" class="form-label">Postal Code</label>
            <input
              type="number"
              name="code"
              class="form-control"
              placeholder="Confirm Password"
              aria-describedby="code"
              formControlName="code"
            />
            <small id="confirmPassword" class="text-muted"></small>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" (click)="savedData()">Register</button>
        <button class="btn btn-secondary ms-2" (click)="loadAPI()">
          Load API Data
        </button>
        <button class="btn btn-warning ms-2" (click)="patchData()">Patch Value</button>
        <button class="btn btn-danger ms-2" (click)="clearData()">Clear Data</button>
      </form>
    </div>
  `,
  styles: [``],
})
export class ReactiveFormsComponent implements OnInit {
  //! Form Model
  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     code: new FormControl(),
  //   }),
  // });

  constructor(private builder:FormBuilder) {}

  //! Form Builder Model
  registrationForm = this.builder.group({
    userName: [
      `Enter a Value`
    ],
    password:[''],
    confirmPassword:[''],
    address:this.builder.group({
      city:[`Noida`],
      state:['UP'],
      code:[245304]
    })
  })

  ngOnInit(): void {}

  savedData(){
    console.log("Data Saved", this.registrationForm.value)
  }

  loadAPI() {
    this.registrationForm.setValue({
      userName: "Tarun",
      password: "abc@9758",
      confirmPassword: "abc@9758",
      address: {
        city: "Noida",
        state: "UP",
        code: 240545,
      },
    });
  }

  clearData(){
    this.registrationForm.reset()
  }

  patchData(){
    this.registrationForm.patchValue({
      userName: "Tarun",
      password: "abc@9758",
      confirmPassword: "abc@9758"
    });
  }
}
