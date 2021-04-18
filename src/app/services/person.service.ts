import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient) 
  {

  }
}
