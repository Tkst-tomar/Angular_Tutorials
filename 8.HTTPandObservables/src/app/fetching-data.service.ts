import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Emp } from './employee';


@Injectable({
  providedIn: 'root',
})
export class FetchingDataService {
  private _url = 'http://localhost:2000/useData';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Emp[]> {
    // console.log("Res", this.http.get(this._url))
    return this.http.get<Emp[]>(this._url)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : any){
    console.log("Error", error)
    return throwError(() => {
        return error;
    });
  }
}
