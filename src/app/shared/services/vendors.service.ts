import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  constructor(private hs: HelperService) {}
   
  findAllVendors(){
  	return this.hs.get('/bm/v1/admin/find/vendors');
  }
  findAllVendorsWithStatus(){
  	return this.hs.get('/bm/v1/admin/find/vendors/'+ status);
  }


}
