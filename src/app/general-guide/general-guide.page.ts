import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-guide',
  templateUrl: './general-guide.page.html',
  styleUrls: ['./general-guide.page.scss'],
})
export class GeneralGuidePage implements OnInit {
  selectedItem: string;

  constructor() 
  { 
    this.selectedItem = "capstoneInfo";
  }

  ngOnInit() {
  }

}
