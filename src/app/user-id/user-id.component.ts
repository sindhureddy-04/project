
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  constructor(public routr : Router, private service:DashboardService) { }
  
  Data:any;

  ngOnInit(): void {
   let subscription =  this.service.getData().subscribe(
   
      servicedata => { this.Data = servicedata;
      })
  }


}


  
