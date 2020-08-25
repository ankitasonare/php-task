import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup; //form group
  constructor(private formBuilder: FormBuilder,public http:HttpService,public router:Router,
    private notifyService : NotificationService) { }

  ngOnInit(): void {
     //form validator
     this.loginform=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',Validators.required],
    })
  }

  //login on click
  onSubmit():void
  {
    console.log(this.loginform.value);
    var username=this.loginform.value.username;
    var password=this.loginform.value.password;
    console.log(username);
    console.log(password);
    this.http.user_mail(username,password)//creating api for check user login
    .subscribe(
      res=>{
        console.log(res);
        if(res['status']=='exist')
        {
          console.log('exist');
          localStorage.setItem('username',username);
          this.notifyService.showSuccess(`Welcome ${username}  !!`, "Login successfully")//use for show message
          this.router.navigate(['/dashboard']);//navigate to dashboard if username & psd valid
        }
        else{
          this.notifyService.showError("Something is wrong", "Invalid username or password")//use for show message
        }
        
      },
      error=>{
        console.log(error);
        
      }
    );
  }

  getregister()
  {
    this.router.navigate(['/register']);//redirect to register page
  }

}
