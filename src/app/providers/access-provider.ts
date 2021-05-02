import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/timeout';
import {Router} from "@angular/router";

import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';


@Injectable()
export class AccessProvider {
  //url backend api json

  apiUrl = 'https://apps.ashesi.edu.gh/capstone/mobile/supervisors';

 
  constructor(
    public http: HttpClient,
  ) { }

  getSupers() {

    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
