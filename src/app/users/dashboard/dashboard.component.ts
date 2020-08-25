import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _authService:HttpService) { }

  ngOnInit(): void {
  }

}
