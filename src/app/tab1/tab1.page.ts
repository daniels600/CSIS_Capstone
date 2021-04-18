import { AccessProvider } from './../providers/access-provider';
import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  tweets: any = [];
  supervisors: any = [];
  segment = 'home';

  imgUrl: string = "./app/assets/face-icon-user.png";

  opts = {
    slidesPerView : 4.5,
    spaceBetween : 10,
    slidesOffsetBefore: 0
  };
  constructor(
    private http: HttpClient,
    private accessProvider: AccessProvider
    )
    {}
  ngOnInit() {
    this.getStudents();
    this.getSupervisors();
  }


  getStudents() {
    this.http.get('https://apps.ashesi.edu.gh/capstone/mobile/ongoing_capstone').subscribe( (data: any) => {
        console.log('tweets: ', data);
        this.tweets = data;
      }
    );
  }

  getSupervisors(){

    this.accessProvider.getSupers()
    .then(data => {

      this.supervisors = data;
      console.log(this.supervisors);
    });
  }
}
