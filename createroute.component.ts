import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CreaterouteService } from './createroute.service';
import { Vehicle } from './vehicle';

@Component({
  selector: 'app-createroute',
  templateUrl: './createroute.component.html',
  styleUrls: ['./createroute.component.scss']
})
export class CreaterouteComponent implements OnInit {

  loading = false;
    submitted = false;

  @Input() vehicle = {vehiclenumber: '',drivername:'',drivernumber:'', businchrgename: '',
  businchrgeemail:'',businchrgenumber:'', businchrgepassword: '',buscapacity:0,busstratingpoint:'' }

  constructor(    private formBuilder: FormBuilder,
    private router: Router,private createRouteService:CreaterouteService) { }

  ngOnInit(): void {
  }

  createroute(){
   

    this.submitted = true;

    this.createRouteService.createroute(this.vehicle).subscribe((data: {}) => {
      this.router.navigate(['/home'])
    })

    this.loading = true;
  }

}
