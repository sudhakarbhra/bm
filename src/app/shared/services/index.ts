import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({providedIn: 'root'})
export class HelperService {
 
  url = "http://dummy.restapiexample.com/api/v1";
 
  constructor(private http: HttpClient) {
    
  }
  getEmployee() {
    return this.http.get(this.url+'/employees')
  }
}