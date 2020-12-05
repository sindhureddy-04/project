
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(public routr : Router, private service:DashboardService) { }
  
  Data:any;

  ngOnInit(): void {
   let subscription =  this.service.getData().subscribe(
   
      servicedata => { this.Data = servicedata;
      })
  }

}



  


  
