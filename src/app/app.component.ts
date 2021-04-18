import { Component } from '@angular/core';

import {NavController} from "@ionic/angular";
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private storage: Storage,
    private router:Router,
    // private statusbar: StatusBar,
    // private splashScreen: SplashScreen
  ) 
  {
    this.initializeApp();
  }

  initializeApp(){

    // this.platform.ready().then(() => {
    //   this.splashScreen.hide();
    // });

    
    // this.storage.create();

    // this.storage.get('storage_xxx').then((res) =>
    // {
    //   if(res == null){
    //       this.navCtrl.navigateRoot('/login')
    //   }else{
    //       this.navCtrl.navigateRoot('/tabs')
    //   }
    // });

    
  }

  logout() {
    this.navCtrl.navigateRoot('/login');
  }
}
