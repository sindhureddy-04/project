import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';
import {ForgotService} from '../forgot.service';
import {ResetService} from '../reset.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(public serv: ResetService ,public routr:Router) { }

  ngOnInit() {
  }
  loginform = new  FormGroup({
    
       new_password:new FormControl ('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(18)]),
      
       renew_password:new FormControl ('', [
         Validators.required,
         Validators.minLength(5),
         Validators.maxLength(18)])
     });
    
    AfterSubmit() {
      // update(email,password) {
      if(this.loginform.value['new_password'] !== this.loginform.value['renew_password']){
        alert("password Mismatch");
        return null;
      }
         
     var result=this.serv.update(this.loginform.value['new_password']);
     //var result=this.serv.update(email,password);
    
      
     // this.serv.update(email,password);
      //alert(this.loginform.value['email']);
     
   //var result=this.serv.update( this.loginform.value['email'], this.loginform.value['password']);
   
   
   if(result){
     
    // localStorage.setItem('password',this.loginform.value['password']);
     alert("Password has been changed Successfully!!");
     this.routr.navigate(['login']);
    
   }
   
   else{
     alert("Invalid email or password") ;
   }
     
   }
   

}
/*
import { Component, OnInit } from '@angular/core';

import { stringify } from 'querystring';



export class ForgotComponent implements OnInit {
    
  constructor(public serv: ForgotService ,public routr:Router) {}
  ngOnInit() {}


  

  //   email: new FormControl('', [
  //    Validators.required,
  //    Validators.pattern("^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+)+((\.)[a-z]{2,})+$"),
     
  //  ]),
   new_password:new FormControl ('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(18)]),
  

   renew_password:new FormControl ('', [
     Validators.required,
     Validators.minLength(5),
     Validators.maxLength(18)])
 });

 AfterSubmit() {// update(email,password) {
   if(this.loginform.value['new_password'] !== this.loginform.value['renew_password']){
     alert("password mismatch");
     return null;
   }
   
     
  var result=this.serv.update( this.loginform.value['new_password']);
  //var result=this.serv.update(email,password);
 
   
  // this.serv.update(email,password);
   //alert(this.loginform.value['email']);
  
//var result=this.serv.update( this.loginform.value['email'], this.loginform.value['password']);


if(result){
  
 // localStorage.setItem('password',this.loginform.value['password']);
  alert("Password has been changed Successfully!!");
  this.routr.navigate(['login']);
 
}

else{
  alert("Invalid email or password") ;
}
  
}
}











  
//  // wrongPassword:boolean=false;   
//   forgotForm  = new  FormGroup({
               
//                nw_password:new FormControl ('', [
//                     Validators.required,
//                     Validators.minLength(8),
//                     Validators.maxLength(18)]),
                
//      renew_password:new FormControl ('', [
//         Validators.required,
//         Validators.minLength(8),
    
//         Validators.maxLength(18)]),
    
     
 
// //{
//     //validators: MustMatch('nw_password', 'renew_Password')
// });
// }
  
//         //confirm_new_password:new FormControl ('', [Validators.required, this.passwordMatch])
//    // });
    
// //   password(formGroup: FormGroup) {
// //     const { value: nw_password } = formGroup.get('nw_password');
// //     const { value: renew_password } = formGroup.get('renew_password');
// //     return nw_password === renew_password ? null : { passwordNotMatch: true };
// //   }
        
//               // changePassword(nw_password:HTMLInputElement,renew_password:HTMLInputElement):void{
//         //     if(nw_password.value==renew_password.value){
//         //       alert('Password has been reset successfully !!!')
//         //       this.wrongPassword=true;
//         //     }
//         //     else{
//         //       alert('Input fileds mismatched');
//         //     }
    
//         // passwordMatch(control: AbstractControl){
//         //     let paswd = control.root.get('new_password');
//         //     if(paswd && control.value != paswd.value){
//         //      return {
//         //          passwordMatch: false
//         //      };   
//         //     }
//         //     return null;
//         // }
    
//         // changePassword(value){
//         //     if(this.changePasswordForm.valid){
//         //         console.log("Change password form valid");
//         //     }
        
    
*/

