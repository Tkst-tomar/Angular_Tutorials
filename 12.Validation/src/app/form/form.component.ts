import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../SharedAssets/password.validator';
import { forbiddenUserName } from '../SharedAssets/username.validators';

@Component({
  selector: 'app-form',
  template: `
    <div
      class="container-fluid"
      style="width: 800px;border:3px solid black; padding: 50px; border-radius:50px;margin-bottom:50px;"
    >
      <h2>Enrollment Form</h2>
      <form [formGroup]="formData">
        {{formData.errors?.['isMatched']?.['value'] | json}}
        <div class="mb-3">
          <label for="userName" class="form-label">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            class="form-control"
            placeholder="Enter Username"
            [class.is-invalid]="
              formData.get('userName')?.invalid &&
              formData.get('userName')?.touched
            "
            aria-describedby="userName"
            formControlName="userName"
          />
          <small
            id="userName"
            class="text-danger"
            [class.d-none]="
              !(
                formData.get('userName')?.invalid &&
                formData.get('userName')?.touched
              )
            "
            >{{formData.get('userName')?.errors?.['required'] ? "Username is Required": formData.get('userName')?.errors?.['minlength'] ? "Username must be more than 3 letters" : formData.get('userName')?.errors?.['ForbiddenName'] ?
            "Username cannot be {{ formData.get('userName')?.errors?.['ForbiddenName']?.['value']





            }}" : ""}}</small
          >
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            [class.is-invalid]="
              formData.get('password')?.invalid &&
              formData.get('password')?.touched
            "
            placeholder="Enter Password"
            aria-describedby="password"
            formControlName="password"
          />
          <small
            id="password"
            class="text-danger"
            [class.d-none]="
              !(
                formData.get('password')?.invalid &&
                formData.get('password')?.touched
              )
            "
            >Password is required</small
          >
        </div>

        <div class="mb-3">
          {{formData.get('confirmPassword')?.invalid + " " + formData.get('confirmPassword')?.touched + " " + (formData.errors?.['isMatched']?.['value'] === true)}}
          <label for="confirmPassword" class="form-label"
            >Confirm Password</label
          >

          <input
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            aria-describedby="confirmPassword"
            formControlName="confirmPassword"
            [class.is-invalid]="
            formData.errors?.['isMatched']?.['value'] === true && !(
                formData.get('confirmPassword')?.invalid &&
                formData.get('confirmPassword')?.touched)
            "
          />
          {{ formData.errors?.['isMatched']?.['value'] === true && !(
                formData.get('confirmPassword')?.invalid &&
                formData.get('confirmPassword')?.touched
              )}}
          <small
            id="confirmPassword"
            class="text-danger"
            [class.d-none]="
              !(
                formData.get('confirmPassword')?.invalid &&
                formData.get('confirmPassword')?.touched
              ) || formData.errors?.['isMatched']?.['value'] === true
            "
            >This is the message</small
          >
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
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
    <div></div>
  `,
  styles: [],
})
export class FormComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  formData: any = this.builder.group(
    {
      userName: [
        ``,
        [
          Validators.required,
          Validators.minLength(3),
          forbiddenUserName(/abc/),
        ],
      ],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      address: this.builder.group({
        city: [``],
        state: [''],
        code: [null],
      }),
    },
    { validator: passwordValidator }
  );

  ngOnInit(): void {}
}
