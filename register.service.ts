import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user';
import { config, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiURL = 'http://localhost:3000';
  
  constructor(private http:HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  


    // HttpClient API post() method => Create employee
  registerUser(user:User): Observable<User> {
   console.log("service call");
    return this.http.post<User>(this.apiURL + '/registeruser', user,{
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
