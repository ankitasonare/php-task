import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:"full"},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
