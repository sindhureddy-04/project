import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DashboardService } from '../dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public routr : Router, private service:DashboardService) { }
  
  Data:any;
  

  ngOnInit(): void {
    
   let subscription =  this.service.getData().subscribe(
   
      servicedata => { this.Data = servicedata;
      })
    
  }
  logout()
  {
    //localStorage.clear();
    this.routr.navigate(['login']);
  }

  reset()
  {
    localStorage.clear();
    this.routr.navigate(['login']);
  }
  
}
