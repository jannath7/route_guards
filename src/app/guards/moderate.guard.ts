import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ModerateGuard implements CanActivateChild {
  constructor(private ds:DataService){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    let token=sessionStorage.getItem("childtoken");
    alert("token"+token);
    if(token)
    {
      this.ds.status="child is active";
      return true;
    }
       
    else{
      this.ds.status="child is not active";
      return false;
    }
  }
  
}
