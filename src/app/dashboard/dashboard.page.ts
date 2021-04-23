import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  dashboard_details: any = [];
  constructor
  (
    private http: HttpClient,
  ) 
  { }

  ngOnInit() {
    this.getDashboard()
  }

  getDashboard() {
    this.http.get('https://apps.ashesi.edu.gh/capstone/mobile/dashboard_stats').subscribe( (data: any) => {
        console.log('dashboard details: ', data);
        this.dashboard_details = data;
      }
    );
  }

}
