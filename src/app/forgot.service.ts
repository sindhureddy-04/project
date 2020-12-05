import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';


@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor() { }

  public logindetails=localStorage.getItem("userdetails")=== null ?[]:JSON.parse(localStorage.getItem("userdetails"));

  update(email,password)
  {
       
    
   // console.log("email"+email);
   //console.log("password"+password);
    let res= localStorage.getItem("userdetails")=== null ? []:JSON.parse(localStorage.getItem("userdetails"));
   //var k=res.length;
   //alert(k);  
   if(res.findIndex(row => row.email===email)!==-1){
  
  
    let rest=res.findIndex(row => row.email===email);
    alert(rest);
    res[rest].password=password;
    
   // localStorage.key(index);
   // localStorage.setItem("password",password);
   // alert(rest);
    console.log("password"+password);
    //this.logindetails.push( { password:password });
        localStorage.setItem("userdetails",JSON.stringify(res));
       
    return true;
    }

   
  else{
    return false;
  }
} 
}

  
 

// console.log("password"+password);
       // console.log(this.logindetails.password);
    //let index = this.logindetails.indexOf(obj);
    //obj.password = obj.password;
    //this.logindetails[index] = obj;
    //this.logindetails.password = obj.password;
      
      // localStorage.setItem("userdetails",JSON.parse(this.logindetails));
    //alert(localStorage.getItem("password"));