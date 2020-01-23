import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HelperService {
	BASE_URI = "http://208.109.9.237:8089/";
	constructor(private http: HttpClient) {  }

	get(endpoint: string): Observable<any> {
		return this.http.get(this.BASE_URI + endpoint);
	}

	post(endpoint: string, body): Observable<any> {
		return this.http.post(this.BASE_URI + endpoint, body);
	}

	put(endpoint: string, body): Observable<any> {
		return this.http.put(this.BASE_URI + endpoint, body);
	}

	delete(endpoint: string): Observable<any> {
		return this.http.delete(this.BASE_URI + endpoint);
	}
	
	generateOTP(mobile){
		// return this.http.post('/bm/v1/otp/'+mobile, '**');
	}
  
   findAllVendorsService(){
  	return this.http.get(this.BASE_URI + '/bm/v1/admin/find/vendors');
  }
}
