import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private hs: HelperService) { }

  productUpload(payload){
  	return this.hs.post('/bm/v1/product/upload', payload);
  }

}

