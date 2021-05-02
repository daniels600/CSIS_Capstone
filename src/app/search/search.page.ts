import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})


export class SearchPage implements OnInit {
  

  results: Observable<any>;
  searchTerm: string = '';
  allCaps: any;
  new_arr: any;
  allTitles: any = [ ];
  term = '';
  option: any;
 

  constructor
  (
    private http: HttpClient,
    
  ) 
  { 
    this.getCaps()

    //this.option = "";
  }

  ngOnInit() {
    
  }

  getCaps() {
    this.http.get('https://apps.ashesi.edu.gh/capstone/mobile/ongoing_capstone').subscribe( (data: any) => {
        
        this.allCaps = data;
      
      }
    );    
  }



}
