import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  name = 'name',
  title = 'title'
}


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  allCaps: any;
  allTitles: any = [ ];
  new_arr: any;


  constructor(private http: HttpClient) 
  {
    //this.getCaps();
  }


  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
   searchData(title: string, type: SearchType): Observable<any> {

    return of(this.new_arr).pipe(
      map(results => results['Search'])
    );
  }
 

  getCapstoneTitles(data: any){
    //data = this.allCaps;
    //iterate the capstones 
    for(var i = 0; i < data.length; i++) {
        //creating a new array 
        let arr = [];

        var obj = data[i];
  
        let title = obj.capstone_title;
       
        arr['title'] = title; 

        this.allTitles.push(arr);
    }

    return this.allTitles;

  }


  getCaps() {
    this.http.get('https://apps.ashesi.edu.gh/capstone/mobile/ongoing_capstone').subscribe( (data: any) => {
        
        this.allCaps = data;
        
        this.new_arr = this.getCapstoneTitles(this.allCaps);
      }
    );    
  }
  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  // getDetails(id) {
  //   return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  // }
}
