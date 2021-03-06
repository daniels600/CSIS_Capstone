import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit {
  @Input() tweet: any;

  constructor() { }

  ngOnInit() {
    console.log('One tweet: ', this.tweet);
  }

}
