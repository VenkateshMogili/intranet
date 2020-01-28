import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private baseUrl = 'http://localhost:3000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private _http: HttpClient,private toastrService:ToastrService) {}
  //get methods
  getAPI(url: string){
    return this._http.get(this.baseUrl+'/'+url).pipe(catchError(this.errorHandler));
  }
  //post methods

  //put methods
  updateAPI(url: string,data){
    return this._http.put(this.baseUrl+'/'+url,data).pipe(catchError(this.errorHandler))
  }
  //
  //delete methods
  
  /*addEmployee(userData){
    return this._http.post(this.baseUrl,userData,this.httpOptions).pipe(catchError(this.errorHandler));
  }*/

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    alert("Something went wrong with backend");
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
