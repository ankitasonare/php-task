import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public _authService:HttpService,private _router:Router){}
  
  canActivate():boolean{
    if (this._authService.loggedIn())
    {
      return true
    }
    else{
      this._router.navigate(['/'])
      return false
    }
  }
  
}
