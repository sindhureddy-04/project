import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }
  
  public logindetails=localStorage.getItem("userdetails")=== null ?[]:JSON.parse(localStorage.getItem("userdetails"));

 // console.log(localStorage.getItem("loginservice"));

 // const userdetails=[];
       // userdetails.push( { email:this.loginform.value['email'],password:this.loginform.value['password']})
       // localStorage.setItem("userdetails",JSON.stringify(userdetails));

  Validate(email, password)
  {
    //console.log("email:"+email);
    //console.log("password::"+password);
    let res= localStorage.getItem("userdetails")=== null ?[]:JSON.parse(localStorage.getItem("userdetails"));
  
    //console.log(res);
   if(res.findIndex(row => row.email===email && row.password===password)!==-1){
    //localStorage.setItem("userdetails)
    
    return true;

    }
    else {
      return false;
    }
    }
    
  }

  //  else
  //   this.logindetails.push( { email:email,password:password})
  //       localStorage.setItem("userdetails",JSON.stringify(this.logindetails));
  //   return true;
  
