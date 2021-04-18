import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProvider } from '../providers/access-provider';
import { Storage } from '@ionic/storage-angular';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  server: string  = 'https://apps.ashesi.edu.gh/capstone/mobile/forgotpassproc';

  email: string = "";
  disabledbtn;

  constructor
  (
    private router:Router,
    private toastCtrl : ToastController,
    private loadingCtrl : LoadingController,
    private alertCtrl : AlertController,
    private accessProvider : AccessProvider,
    public navCtrl : NavController,
    private storage: Storage,
    private http: HTTP
  ) 
  { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledbtn = false;
  }

  async forgot_password() {

    let data = {
      umail: this.email

    }

    if (this.email == "") {
      this.presentToast('Your email field is empty')
    }else {
      this.disabledbtn = true;
      // this.presentLoading();
      const loader = await this.loadingCtrl.create({
        message: "Please wait ......",
      });
      loader.present();


      let headers = { };
      // this.http.setDataSerializer("json");
      // this.http.setHeader("*","Accept", "application/json");
      // this.http.setHeader("*","Content-Type", "application/json");
      return this.http.post(this.server, data, headers)
        .then((response: HTTPResponse) => {
          console.log(`POST ${this.server} ${JSON.stringify(response.data)}`);

          let m = JSON.stringify(response.data);
          console.log(m);

          if (m == 'worked') {
            loader.dismiss();
            this.disabledbtn = false;
            this.presentToast("Successful, check your email for password reset link");
            // this.storage.set('storage_xxx', m);  //storage session
            this.navCtrl.navigateRoot(['/login']);
          } else if (m == 'mailfailed'){
            loader.dismiss();
            this.presentToast("Worked but email sending failed");
            this.disabledbtn = false;
          }else if (m == 'expiredatefailed'){
            loader.dismiss();
            this.disabledbtn = false;
            this.presentToast("Failed, couldn’t set expiry date for email link");
          }else if(m == 'pending'){
            loader.dismiss();
            this.disabledbtn = false;
            this.presentToast("User account is awaiting email or admin verification");
          }else if (m == 'inactive'){
            loader.dismiss();
            this.disabledbtn = false;
            this.presentToast("Your account has been deactivated, contact admin");
          }else {
            loader.dismiss();
            this.disabledbtn = false;
            this.presentToast("password reset request failed");
          }
        })
        .catch((error:any) => {
          console.error(`POST ${this.server} ${error.error}`);
          loader.dismiss();
          this.disabledbtn = false;
        });
    }
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "top"
    });
    await toast.present();
  }


}
