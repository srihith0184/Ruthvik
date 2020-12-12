import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class CreaterouteService {
  apiURL = 'http://localhost:3000';
  
  constructor(private http:HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  


    // HttpClient API post() method => Create employee
  createroute(vehicle:Vehicle): Observable<Vehicle> {
   console.log("service call");
   console.log(vehicle);
    return this.http.post<Vehicle>(this.apiURL + '/createroute', vehicle,{
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getroutes()
  {
    
   return this.http.get<Vehicle>(this.apiURL+`/getroutes`).pipe(map(vehicle => {
    // login successful if there's a jwt token in the response
    if (vehicle) {
     
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(vehicle));
        console.log(vehicle);
    }

    return vehicle;
}));

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
