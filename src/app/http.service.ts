import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: "http://localhost/php_project";
  public headers=new HttpHeaders;
  constructor(public http: HttpClient,private _router:Router) { }
  
  user_mail(username,password)
 {
   console.log(username)
   return this.http.post('http://localhost/php_project/login_check.php',JSON.stringify({username:username,password:password}))
 }

 register_mail(name,phone_no,username,password)
 {
   console.log(username)
   return this.http.post('http://localhost/php_project/user_register.php',JSON.stringify({name:name,phone_no:phone_no,username:username,password:password}))
 }

 private fileUploadProgress(event) {
  const percentDone = Math.round(100 * event.loaded / event.total);
  return { status: 'progress', message: percentDone };
}

private apiResponse(event) {
  return event.body;
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened. Please try again later.');
}

loggedIn(){
  return !!localStorage.getItem('username')
}

logoutUser()
  {
    localStorage.removeItem('username');
    this._router.navigate(['/'])
    
  }

}
