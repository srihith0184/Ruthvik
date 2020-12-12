import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../register/user';
import { Login } from './login';
import { first } from 'rxjs/operators';
import { LoginService } from './login.service';
import { UserLogin } from './userlogin';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLoggedIn: Observable<boolean>;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


    @Input() login = { username: '', password: '', userrole: '' }

    @Output() navMenu: EventEmitter<any> = new EventEmitter<any>();

    menuarray = [{ 'menulink': '/student-home', 'menuname': 'StudentHome' },
    { 'menulink': '/register', 'menuname': 'StudentDetails' },
    { 'menulink': '/login', 'menuname': 'Book Pass' }];


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService

    ) {

    }

    ngOnInit() {

    }


    loginuser() {

        this.submitted = true;

        this.loading = true;

        this.loginService.login(this.login)
            .pipe(first())
            .subscribe((data: UserLogin) => {
                this.isLoggedIn
                this.router.navigateByUrl('/studenthome');


            });
    }
}
