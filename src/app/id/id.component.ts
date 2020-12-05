import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  
  constructor(public routr : Router, public activate: ActivatedRoute ,private service:DashboardService) { }
  
  Data:any;
  id:number;
  
  ngOnInit(): void {
    this.activate.params.subscribe(result => {this.id= (result['Id']) 

    
   let subscription =  this.service.getData().subscribe(
   
      servicedata => { 
this.Data =  servicedata.filter (row => row.id.toString() === this.id);
   //console.log(this.Data);

 
// let Data= localStorage.getItem("id")=== null ?[]:JSON.parse(localStorage.getItem("id"));
// if(res.findIndex(row => row.id===this.id)!==-1){
//   return true;
//   }
  });
   })
  }

 
}
  
  
