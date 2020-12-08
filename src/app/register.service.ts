import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  public registerdetails=localStorage.getItem("userdetails")=== null ?[]:JSON.parse(localStorage.getItem("userdetails"));

  Validate(firstname, email, password, phonenumber, pincode)
  {
    if(this.registerdetails.findIndex(row => row.email===email)!==-1){
     return false;
    }
    else
    this.registerdetails.push( { firstname:firstname, email:email, password:password ,phonenumber:phonenumber, pincode:pincode})
        localStorage.setItem("userdetails",JSON.stringify(this.registerdetails));
    return true;
  }
  
}
// console.log(localStorage.getItem("loginservice"));

 // const userdetails=[];
       // userdetails.push( { email:this.loginform.value['email'],password:this.loginform.value['password']})
       // localStorage.setItem("userdetails",JSON.stringify(userdetails));
