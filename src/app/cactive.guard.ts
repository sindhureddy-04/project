import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CactiveGuard implements CanActivate {
  constructor(public routr:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("userdetails")===null)
        //(localStorage.getItem("email"))===""|| (localStorage.getItem("email"))===null || (localStorage.getItem("password"))=== ""|| (localStorage.getItem("password"))===null)
    {
         this.routr.navigate(['login']);
         return false;
    }
    else 
    {
      return true;
    }
    
  }
  
}
