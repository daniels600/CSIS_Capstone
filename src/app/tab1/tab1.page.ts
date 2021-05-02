import { AccessProvider } from './../providers/access-provider';
import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  tweets: any = [];
  supervisors: any = [];
  segment = 'home';
  loading: any;
  imgUrl: string = "./app/assets/face-icon-user.png";
  data: any;
  error: any;
  user_email: any;

  opts = {
    slidesPerView : 4.5,
    spaceBetween : 10,
    slidesOffsetBefore: 0
  };
  constructor(
    private http: HttpClient,
    private accessProvider: AccessProvider,
    public loadingController: LoadingController,
    private storage: Storage,
    private emailComposer: EmailComposer
    )
    {}
  // ngOnInit() {
  //   //this.getStudents();
  //   this.getSupervisors();
  // }


  // getStudents() {
  //   this.http.get('https://apps.ashesi.edu.gh/capstone/mobile/ongoing_capstone').subscribe( (data: any) => {
  //       console.log('tweets: ', data);
  //       this.tweets = data;
  //     }
  //   );
  // }

  getSupervisors(){

    this.accessProvider.getSupers()
    .then(data => {

      this.supervisors = data;
      console.log(this.supervisors);
    });
  }
  
  getStudents() {
    // Define the data URL
    const dataUrl = 'https://apps.ashesi.edu.gh/capstone/mobile/ongoing_capstone';
    // Prepare the request
    return this.http.get(dataUrl);
  }

  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
        message: 'Loading...'
    });
    // Present the loading controller
    await this.loading.present();
  }



  async ionViewWillEnter() {

    this.getSupervisors();
    // Present a loading controller until the data is loaded
    await this.presentLoading();
    // Load the data
    this.getStudents()
        .pipe(
            finalize(async () => {
              // Hide the loading spinner on success or error
              await this.loading.dismiss();
            })
        )
        .subscribe(
            data => {
              // Set the data to display in the template
              this.tweets = data;
              console.log(this.tweets);
            },
            err => {
              // Set the error information to display in the template
              this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
            }
        );
  }


  
}
