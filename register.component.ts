import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


    loading = false;
    submitted = false;

    @Input() user = { studentName: '',rollNumber:'',phoneNumber:'', email: '',userName:'',password:'', branch: '',gender:'',accademic:'' }


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private registerService: RegisterService
    ) { 
        
    }

    ngOnInit() {
      

    }


    registerUser() {
        
        this.submitted = true;

        this.registerService.registerUser(this.user).subscribe((data: {}) => {
            this.router.navigate(['/login'])
          })

        this.loading = true;
        
    }
}