import { Injectable } from '@angular/core';
import { UserDetails } from './models/userdetails';

@Injectable({
  providedIn: 'root'
})

export class ResetService {

  constructor() { }
  public logindetails=localStorage.getItem("userdetails")=== null ?[]:JSON.parse(localStorage.getItem("userdetails"));

  
  update(new_password)
  {
        const email=UserDetails.getCurrentUser();
   // console.log("email"+email);
   //console.log("password"+password);
    let res= localStorage.getItem("userdetails")=== null ? []:JSON.parse(localStorage.getItem("userdetails"));
  
   if(res.findIndex(row => row.email===email)!==-1){
  
    let rest=res.findIndex(row => row.email===email);
    alert(rest);
    res[rest].password=new_password;
    alert(new_password);
   // localStorage.key(index);
   // localStorage.setItem("password",password);
   // alert(rest);
    //console.log("password"+ password);
    //this.logindetails.push( { password:password });
        localStorage.setItem("userdetails",JSON.stringify(res));
        
    return true;
    }

  else{
    return false;
  }
} 
}



/*
import { UserDetails } from './models/userdetails';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';


@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor() { }

  public logindetails=localStorage.getItem("userdetails")=== null ?[]:JSON.parse(localStorage.getItem("userdetails"));

  update(new_password)
  {
       
    const email=UserDetails.getCurrentUser();
   // console.log("email"+email);
   //console.log("password"+password);
    let res= localStorage.getItem("userdetails")=== null ? []:JSON.parse(localStorage.getItem("userdetails"));
   //var k=res.length;
   //alert(k);  
   if(res.findIndex(row => row.email===email)!==-1){
  
   // for(let r=0;r<k;r++)
    //{

    let rest=res.findIndex(row => row.email===email);
    res[rest].password=new_password;
   // localStorage.key(index);
   // localStorage.setItem("password",password);
   // alert(rest);
    //console.log("password"+ password);
    //this.logindetails.push( { password:password });
        localStorage.setItem("userdetails",JSON.stringify(res));
       // console.log("password"+password);
       // console.log(this.logindetails.password);
    //let index = this.logindetails.indexOf(obj);
    //obj.password = obj.password;
    //this.logindetails[index] = obj;
    //this.logindetails.password = obj.password;
      
      // localStorage.setItem("userdetails",JSON.parse(this.logindetails));
    //alert(localStorage.getItem("password"));
    return true;
    }

   
  else{
    return false;
  }
} 
}
*/
  
 

