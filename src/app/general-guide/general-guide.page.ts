import { Component, OnInit } from '@angular/core';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-general-guide',
  templateUrl: './general-guide.page.html',
  styleUrls: ['./general-guide.page.scss'],
})
export class GeneralGuidePage implements OnInit {
  selectedItem: string;

  constructor(private localNotifications: LocalNotifications) 
  { 
    this.selectedItem = "capstoneInfo";
  }

  ngOnInit() {
  }
  

  single_notification() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: '<p><span style=\"font-size: 11pt; font-family: Calibri, sans-serif;\">Students&rsquo; </span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif;\">final submission&nbsp;</span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif;\">of write-up&nbsp;</span><span style=\"font-size: 11pt; font-family: Calibri, sans-serif;\">for grading</span></p>',
      sound: 'file://sound.mp3',
      smallIcon: 'res://calendar',
      led: 'FF0000',
    });
  }
  
}
