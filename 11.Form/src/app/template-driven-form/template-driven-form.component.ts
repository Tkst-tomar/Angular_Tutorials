import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  template: `
    <div style="text-align: center;">
      <h2>Template Driven Form</h2>
    </div>
    <div
      class="container-fluid"
      style="width: 800px;border:3px solid black; padding: 50px; border-radius:50px;margin-bottom:50px;"
    >
      <h2>Enrollment Form</h2>
      <form #userForm="ngForm">
        <div class="form-group">
          <label for="name">Name &nbsp;</label>
          <input
            required
            [(ngModel)]="userModel.name"
            type="text"
            name="name"
            id="name"
            class="form-control"
            [class.is-invalid]="
              !name.untouched
                ? !name.pristine
                  ? name.value === ''
                    ? true
                    : false
                  : true
                : false
            "
            placeholder="Enter Name"
            aria-describedby="name"
            #name="ngModel"
          />
          <small id="nameId" class="text-danger">{{
            !name.untouched
              ? !name.pristine
                ? name.value === ''
                  ? 'Name cannot be empty'
                  : ''
                : 'Please Enter Name'
              : ''
          }}</small>
        </div>

        <div class="form-group">
          <label for="emailId">Email &nbsp;</label>
          <input
            required
            [(ngModel)]="userModel.emailId"
            type="email"
            name="emailId"
            id="emailId"
            class="form-control"
            placeholder="Enter Email"
            aria-describedby="emailId"
            [class.is-invalid]="
              !emailId.untouched
                ? !emailId.pristine
                  ? emailId.value.indexOf('@') === -1 ||
                    emailId.value.indexOf('.') === -1 ||
                    emailId.value.indexOf('.') - emailId.value.indexOf('@') <=
                      1 ||
                    emailId.value.length - emailId.value.indexOf('.') <= 0
                    ? true
                    : false
                  : true
                : false
            "
            #emailId="ngModel"
          />
          <small id="nameId" class="text-danger">{{
            !emailId.untouched
              ? !emailId.pristine
                ? emailId.value.indexOf('@') === -1 ||
                  emailId.value.indexOf('.') === -1 ||
                  emailId.value.indexOf('.') - emailId.value.indexOf('@') <=
                    1 ||
                  emailId.value.length - emailId.value.indexOf('.') <= 0
                  ? 'Email is Invalid(must contain @, . and a domain)'
                  : ''
                : 'Please Enter a Valid Email'
              : ''
          }}</small>
        </div>

        <div class="form-group">
          <label for="number">Phone Number</label>
          <input
            required
            [(ngModel)]="userModel.number === 0 ? null : userModel.number"
            type="number"
            name="number"
            id="number"
            class="form-control"
            placeholder="Enter Phone Number"
            aria-describedby="number"
            [class.is-invalid]="
              !number.untouched
                ? !number.pristine
                  ? number.value === null
                    ? true
                    : number.value > 0
                    ? false
                    : true
                  : true
                : false
            "
            (change)="saveNumber(number.value)"
            #number="ngModel"
          />
          <small id="number" class="text-danger">{{
            !number.untouched
              ? !number.pristine
                ? number.value === null
                  ? 'Number cannot be empty'
                  : number.value > 0
                  ? ''
                  : 'Number must be a +ve value'
                : 'Please Enter a Number'
              : ''
          }}</small>
        </div>

        <div class="form-group">
          <label for="topic">Select a Technology</label>
          <small id="number" class="text-danger">{{
            !topic.untouched
              ? !topic.pristine
                ? topic.value === ''
                  ? 'Interest cannot be empty'
                  : ''
                : 'Please Select One'
              : ''
          }}</small>
          <select
            required
            name="topic"
            id=""
            class="form-select"
            [(ngModel)]="userModel.topic"
            [class.is-invalid]="
              !topic.untouched
                ? !topic.pristine
                  ? topic.value === ''
                    ? true
                    : false
                  : true
                : false
            "
            #topic="ngModel"
          >
            <option value="" selected>I am interested in...</option>
            <option *ngFor="let x of topics">{{ x }}</option>
          </select>
        </div>

        <!-- <div (ngModel)Group="address">
          <div class="form-group">
            <label>Street</label>
            <input required type="text" class="form-control" name="street" (ngModel) />
          </div>

          <div class="form-group">
            <label>City</label>
            <input required type="text" class="form-control" name="city" (ngModel) />
          </div>

          <div class="form-group">
            <label>State</label>
            <input required type="text" class="form-control" name="state" (ngModel) />
          </div>
          <div class="form-group">
            <label>Postal Code</label>
            <input required type="number" class="form-control" name="pin" (ngModel) />
          </div>
        </div> -->

        <div class="md-3">
          <label>Time Preferences</label>
          <div class="form-check">
            <input
              required
              [(ngModel)]="userModel.timePreferences"
              type="radio"
              class="form-check-input"
              name="timePreferences"
              value="morning"
              [class.is-invalid]="
                !timePreferences.untouched
                  ? !timePreferences.pristine
                    ? timePreferences.value === ''
                      ? true
                      : false
                    : true
                  : false
              "
              #timePreferences="ngModel"
            />
            <label class="form-check-label">Morning (9 AM - 12 PM)</label>
          </div>

          <div class="form-check">
            <input
              required
              [(ngModel)]="userModel.timePreferences"
              type="radio"
              class="form-check-input"
              name="timePreferences"
              value="evening"
              [class.is-invalid]="
                !timePreferences.untouched
                  ? !timePreferences.pristine
                    ? timePreferences.value === ''
                      ? true
                      : false
                    : true
                  : false
              "
              #timePreferences="ngModel"
            />
            <label class="form-check-label">Evening (5 AM - 8 PM)</label>
          </div>
          <small class="text-danger">{{
            !timePreferences.untouched
              ? !timePreferences.pristine
                ? timePreferences.value === ''
                  ? 'Please Select One'
                  : ''
                : 'Please Select One'
              : ''
          }}</small>
        </div>

        <div class="form-check mb-3">
          <input
            type="checkbox"
            class="form-check-input"
            name="promo"
            id="promo"
            [class.is-invalid]="
              !promo.untouched
                ? !promo.pristine
                  ? !promo.value
                    ? true
                    : false
                  : true
                : false
            "
            [(ngModel)]="userModel.promo"
            #promo="ngModel"
          />
          <label class="form-check-label">Send me promotional offers</label>
        </div>
        <button
          class="btn btn-primary"
          type="submit"
          (click)="gatherData()"
          [class.btn-danger]="!userForm.form.valid"
          [disabled]="!userForm.form.valid"
        >
          Submit Form
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      form .form-group {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class TemplateDrivenFormComponent implements OnInit {
  public topics = ['Angular', 'React', 'Vue', 'Node', 'PHP', 'Laravel'];

  constructor(private enrollmentService: EnrollmentService) {}

  userModel = new User('', '', 0, '', '', false);

  ngOnInit(): void {}

  gatherData() {
    console.log('DATA', this.userModel);
    this.enrollmentService.enroll(this.userModel).subscribe({
      next: (x: any) => console.log('Entry for name : ' + x.name),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Task Completed'),
    });
  }

  saveNumber(x: any) {
    this.userModel.number = x;
  }
}
