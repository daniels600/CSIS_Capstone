import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoadingController, NavController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-incoming-events',
  templateUrl: './incoming-events.page.html',
  styleUrls: ['./incoming-events.page.scss'],
})
export class IncomingEventsPage implements OnInit {

  loading: any;
  incomings: any;
  error: any;
  numIncoming: any;
  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
        message: 'Loading...'
    });
    // Present the loading controller
    await this.loading.present();
  }


  getIncoming() {
    // Define the data URL
    const dataUrl = 'https://apps.ashesi.edu.gh/capstone/mobile/upcoming';
    // Prepare the request
    return this.http.get(dataUrl);
  }


  async ionViewWillEnter() {

    // Present a loading controller until the data is loaded
    await this.presentLoading();
    // Load the data
    this.getIncoming()
        .pipe(
            finalize(async () => {
              // Hide the loading spinner on success or error
              await this.loading.dismiss();
            })
        )
        .subscribe(
            data => {
              // Set the data to display in the template
              this.incomings = data;
              this.getDateEvent(this.incomings);
              console.log(this.incomings);
              this.numIncoming = Object.keys(this.incomings).length;
              console.log(this.numIncoming);
            },
            err => {
              // Set the error information to display in the template
              this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
            }
        );
  }

  getDateEvent(data: any){
    //iterate the date and time of the incoming events 
    for(var i = 0; i < data.length; i++) {
      
      var obj = data[i];

      // creating a  date object 
      var dt = new Date(obj.date_of_event);

      console.log('Old date n time ',dt);

      // getting the minutes of the date n time of event 
      // And reducing the minutes by 15 mins
      var newMin = dt.getMinutes() - 15;

      //setting the new minutes and date
      dt.setMinutes(newMin);
      
      console.log('New date n time ',dt);

     
      
    }
    
  }

}
