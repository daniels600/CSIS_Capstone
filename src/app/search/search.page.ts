import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonService, SearchType } from '../services/person.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})


export class SearchPage implements OnInit {
  

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  allCaps: any;
  new_arr: any;
  allTitles: any = [ ];
  term = '';
  option: any;
 

  constructor
  (
    private personService: PersonService,
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

  searchChanged(e){
    //this.option = this.option;
  }


}
