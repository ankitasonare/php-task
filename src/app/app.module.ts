import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './auth.guard';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot()
  ],
  providers: [HttpService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
