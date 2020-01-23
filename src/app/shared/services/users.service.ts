import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	constructor(private hs: HelperService) { }

	findAllRoles(){
		return this.hs.get('/bm/v1/role/findall');
	}
	findAllCustomers(){
		return this.hs.get('/bm/v1/admin/find/customers');
	}
	findAllUsers(){
		return this.hs.get('/bm/v1/admin/find/all');
	}
	findAllAdminUsersWithStatus(status){
		return this.hs.get('/bm/v1/admin/find/admins/' + status);
	}
	findAllAdminUsers(){
		return this.hs.get('/bm/v1/admin/find/admins');
	}
	findUserByMobile(mobile){
		return this.hs.get('/bm/v1/admin/user/'+ mobile);
	}
	getUserDetailsUnderAdminUser(mobile){
		return this.hs.get('/bm/v1/admin/users/referral/'+ mobile);
	}
	createCustomer(payload){
		return this.hs.post('/bm/v1/customer/s1', payload);
	}
	updateCustomer(r_id, payload){
		return this.hs.put('/bm/v1/customer/s1/'+ r_id, payload);
	}
	createExecutive(payload){
		return this.hs.post('/bm/v1/executive/s1', payload);
	}
	updateExecutive(r_id, payload){
		return this.hs.put('/bm/v1/executive/s1/'+ r_id, payload);
	}
	createVendor(payload){
		return this.hs.post('/bm/v1/vendor/s1', payload);
	}
	updateVendor(r_id, payload){
		return this.hs.put('/bm/v1/vendor/s1'+ r_id, payload);
	}
}
