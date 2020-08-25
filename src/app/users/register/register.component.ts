import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { NotificationService } from 'src/app/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup; //form group
  constructor(private formBuilder: FormBuilder,public http:HttpService,
    private notifyService : NotificationService,public router:Router) { }
  

  ngOnInit(): void {
    //form validator
    this.registerform=this.formBuilder.group({
      name:['',[Validators.required, Validators.pattern('[a-zA-Z ]{3,20}')]],
      phone_no:['',[Validators.required, Validators.pattern('([0-9]){10}')]],
      username:['',[Validators.required]],
      password:['',Validators.required],
    })
  }

   //register on click
   onSubmit():void
   {
     //store value in var
     var name=this.registerform.value.name;
     var phone_no=this.registerform.value.phone_no;
     var username=this.registerform.value.username;
     var password=this.registerform.value.password;
     
     this.http.register_mail(name,phone_no,username,password)//api for registeration
       .subscribe(
         res=>{
           console.log(res);
           if(res['status']=='success')
           {
             console.log('success');
             this.notifyService.showSuccess(`User Registered  !!`, "Registered successfully");//use for show message
             this.router.navigate(['/']);//navigate to dashboard if username & psd valid
           }
         },
         error=>{
           console.log(error);
         }
       );
   }

   getlogin()
   {
     this.router.navigate(['/']);//redirect to login page
   }
}
