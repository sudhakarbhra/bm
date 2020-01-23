import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private hs: HelperService) { }
  
  authenticateUser(payload){
  	return this.hs.post('role', payload);
  }
}
