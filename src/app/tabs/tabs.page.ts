import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  numIncoming: any;
  incomings: any;

  newDateTime: any = [ ];

  constructor(
    private http: HttpClient,
    private localNotifications: LocalNotifications
  ) 
  { 
    this.getIncoming()
    
  }

  single_notification() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Single Notification for incoming',
      trigger: { at: new Date(2021, 3, 26, 18, 55, 0, 0) },
      sound: 'file://sound.mp3',
      led: 'FF0000',
      data: { secret: 'key_data' }
    });
  }

  getIncoming() {
    this.http.get('https://apps.ashesi.edu.gh/capstone/mobile/upcoming').subscribe( (data: any) => {
        
        this.incomings = data;
        this.numIncoming = Object.keys(this.incomings).length;
        //console.log(this.numIncoming);
        console.log(this.reduceTime(this.incomings));

        this.createNotif(this.incomings);
      }
    );

    
  }


  createNotif(data: any){

    for(var i = 0; i < data.length; i++) {
      // Schedule a single notification
      this.localNotifications.schedule({
        id: data.id,
        title: data.title,
        text: data.details,
        trigger: { at: new Date(data.dateTime) },
        smallIcon: 'res://calendar',
        sound: 'file://sound.mp3',
        led: 'FF0000',
      });
    }
     
  }


  reduceTime(data: any){
    //iterate the date and time of the incoming events 
    for(var i = 0; i < data.length; i++) {
      
      //creating a new array 
      let arr = [];

      var obj = data[i];

      // creating a  date object 
      var dt = new Date(obj.date_of_event);

      let title = obj.news_title;
      let notifDetails = obj.news_detail;
      let id = obj.news_id;

      //console.log('Old date n time ',dt);

      // getting the minutes of the date n time of event 
      // And reducing the minutes by 15 mins
      var newMin = dt.getMinutes() - 15;

      //setting the new minutes and date
      dt.setMinutes(newMin);
      
      //console.log('New date n time ',dt);

      arr['dateTime'] = dt;
      arr['title'] = title;
      arr['details'] = notifDetails;
      arr['id'] = id;

      this.newDateTime.push(arr);
    }

    return this.newDateTime;
    
  }
}
