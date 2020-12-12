import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../register/user';
import { Login } from './login';
import { UserLogin } from './userlogin';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

$isLoggedIn=new EventEmitter();
userlogin:UserLogin={
  accademic:"",
  branch:"",
  email:"",
  gender:"",
  id:0,
  password:"",
  phone:"",
  role:"",
  roll_number:"",
  student_name:"",
  username: "",
};
 
  loginUrl:string;
  constructor(private http: HttpClient) {
    this.loginUrl="http://localhost:3000"
   }

  login(login:Login)
  {
    let params = new HttpParams();
    params = params.append('username', login.username);
    params = params.append('password', login.password);
    params = params.append('userrole', login.userrole);
    
   return this.http.get<UserLogin>(this.loginUrl+`/userlogin`,{params: params}).pipe(map(userlogin => {
    // login successful if there's a jwt token in the response
    if (userlogin) {
     
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(userlogin));
        console.log(userlogin);
        this.$isLoggedIn.emit(userlogin);
    }

    return userlogin;
}));

  }
}
