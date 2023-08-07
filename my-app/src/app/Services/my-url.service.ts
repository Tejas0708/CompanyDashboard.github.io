import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyUrlService {

  constructor() { }
  MyUrl='http://localhost:8080/';
  getMyUrl()
  {
       return this.MyUrl;
  }
}
