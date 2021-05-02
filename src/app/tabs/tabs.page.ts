import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

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
    private localNotifications: LocalNotifications,
    private emailComposer: EmailComposer
  ) 
  { 
    this.getIncoming()
    
  }

  getIncoming() {
    this.http.get('https://apps.ashesi.edu.gh/capstone/mobile/upcoming').subscribe( (data: any) => {
        
        this.incomings = data;
        this.numIncoming = Object.keys(this.incomings).length;
        //console.log(this.numIncoming);
        console.log(this.incomings);

        this.incomings = this.reduceTime(this.incomings);

        console.log('new arr', this.incomings);

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
        text: `Scheduled on ${data.dateTime}`,
        trigger: { at: new Date(data.dateTime) },
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

  openEmailComposer(){
      this.emailComposer.open({
        to : "csis@ashesi.edu.gh"
      })
  }
}
