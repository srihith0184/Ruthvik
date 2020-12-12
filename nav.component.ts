import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { UserLogin } from '../login/userlogin';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  apptitle = "MGIT Bus Pass System";
  isLoggedIn: Observable<boolean>;

  isUserLogged = false;
  userLogin: UserLogin;

  menuarray = [{ 'menulink': '/home', 'menuname': 'Home' },
  { 'menulink': '/register', 'menuname': 'Register' },
  { 'menulink': '/login', 'menuname': 'Login' }
  ]

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.$isLoggedIn
      .subscribe((data) => {
        console.log(data);
        this.isUserLogged = true;
        this.userLogin = data ;

        console.log(this.userLogin[0].role);
    
        if(this.userLogin[0].role=='user'){
          this.menuarray = [{ 'menulink': '/home', 'menuname': 'User Home' },
          { 'menulink': '/register', 'menuname': 'User Details' },
          { 'menulink': '/login', 'menuname': 'Logout' }
          ]
        } 
        else if(this.userLogin[0].role=='admin'){
          this.menuarray = [{ 'menulink': '/adminhome', 'menuname': 'Admin Home' },
          { 'menulink': '/createroute', 'menuname': 'Route Creation' },
          { 'menulink': '/viewroute', 'menuname': 'View Route' },
          { 'menulink': '/login', 'menuname': 'Report' },
          { 'menulink': '/login', 'menuname': 'Logout' }
          ]
        }
        else if(this.userLogin[0].role=='incharge'){
          this.menuarray = [{ 'menulink': '/home', 'menuname': 'Incharge Home' },
          { 'menulink': '/register', 'menuname': 'Incharge Details' },
          { 'menulink': '/login', 'menuname': 'Logout' }
          ]
        }
        

      })
  }

}
