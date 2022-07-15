import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  url = "http://localhost:4000/userData"   //? URL to post data
  constructor(private http: HttpClient) {}

  enroll(user : User){
    return this.http.post(this.url, user)
    .pipe(catchError(this.errorHandling))
  }

  errorHandling(error : HttpErrorResponse ){
    return throwError(error)
  }
}
