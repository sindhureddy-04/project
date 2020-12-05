import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


 // registrationForm: FormGroup;
  //isSubmitted: boolean = false;

  submitted = false;
  constructor(public serv: RegisterService , public routr:Router) {}
  ngOnInit() {

  }
 registrationForm  = new  FormGroup({
      
      firstname:new FormControl('', [ 
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),

      lastname:new FormControl ('', []),

      gender: new FormControl('', [Validators.required]),

      acceptTerms:new FormControl ('', []),


      pincode:new FormControl ('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern('^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$')]),


      phonenumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern("^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$")]),

        email: new FormControl('', [
          Validators.required,
  
          Validators.pattern("^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+)+((\.)[a-z]{2,})+$")
        ]),
  

      password:new FormControl ('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(18)])
    });

  AfterSubmit() :void {
        //console.log(localStorage.getItem("loginse"));
    var result=this.serv.Validate( this.registrationForm .value['firstname'],this.registrationForm .value['email'],this.registrationForm .value['password'],this.registrationForm .value['phonenumber'],this.registrationForm .value['pincode']);
      this.submitted = true;
     if(result){
     
       alert("User Registered successfully!!");
       console.log(result);
       // localStorage.getItem( );
       //localStorage.setItem('email',this.loginform.value['email']);
        //localStorage.setItem('password',this.loginform.value['password']);
    // alert(this.registrationForm.value['email']);
       this.routr.navigate(['login']);

}
  
      else{
       alert("User already exists") ;
      }
}  

}








/*RegistrationFormSubmit() {
  this.isSubmitted = true;
  if (this.registrationForm.valid) {
    console.log(this.registrationForm.value);
  }*/
  