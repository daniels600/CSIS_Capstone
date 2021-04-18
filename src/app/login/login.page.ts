import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProvider } from '../providers/access-provider';
import { Storage } from '@ionic/storage-angular';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  server: string  = 'https://apps.ashesi.edu.gh/capstone/mobile/loginproc';

  email: string = "";
  password: string = "";
  disabledbtn;

  constructor(
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

  async login_user() {

    let data = {
      umail: this.email,
      upass: this.password,

    }

    if (this.email == "") {
      this.presentToast('Your email field is empty')
    }else if (this.password == "") {
      this.presentToast('Your password field is empty')
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

          if (m == 'success') {
            loader.dismiss();
            this.disabledbtn = false;
            this.presentToast("Login successful");
            this.storage.set('storage_xxx', m);  //storage session
            this.navCtrl.navigateRoot(['/tabs']);
          } else if(m == 'failed') {
            loader.dismiss();
            this.disabledbtn = false;
            this.presentToast("Invalid email or password. Try again!");
          }else {
            loader.dismiss();
            this.disabledbtn = false;
            this.presentToast("It did not work");
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
