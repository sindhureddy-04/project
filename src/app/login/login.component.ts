import { UserDetails } from './../models/userdetails';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public serv: LoginService ,public routr:Router) {}
   
  ngOnInit(): void {
      
  }
  
  loginform = new  FormGroup({

         email: new FormControl('', [
          Validators.required,
          Validators.pattern("^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+)+((\.)[a-z]{2,})+$")
        ]),

        password:new FormControl ('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(18)])
      });
      reset()
        {
             localStorage.clear();
             this.routr.navigate(['login']);
        }
             
    
     AfterSubmit() {
        //console.log(localStorage.getItem("login"));
        
      var result=this.serv.Validate( this.loginform.value['email'],this.loginform.value['password']);
      
      if(result){
       
        alert("Login Successful");
        //alert(this.loginform.value['email']);
        UserDetails.setCurrentUser(this.loginform.value['email']);
        this.routr.navigate(['Dashboard']);
       
      }

      else{
        alert("Invalid email or password") ;
      }
        
    }
  }











// localStorage.getItem( );
       // localStorage.setItem('email',this.loginform.value['email']);
        //localStorage.setItem('password',this.loginform.value['password']);






 /* login(){
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.routr.navigate(['Dashboard']);
                },
               // error => {
                 //   this.alertService.error(error);
                  //  this.loading = false;
             ) };*/