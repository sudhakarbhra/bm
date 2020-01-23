import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelperService } from '../../shared/services/helper.service';
import { Helper } from '../../shared/models/helper';
import { MatTableDataSource } from '@angular/material';

const ELEMENT_DATA: Helper[] = [
    {  name: 'Hydrogen', },
    {  name: 'Helium', },
    {  name: 'Lithium', },
    {  name: 'Beryllium', },
    {  name: 'Boron', },
    {  name: 'Carbon', },
    {  name: 'Nitrogen', }
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public http: HttpClient, private helperService: HelperService) { }

   findAllVendors() {
   	this.helperService.findAllVendorsService().subscribe((data : Helper[]) => {
   		console.log(data);
   	})
   }
 
 ngOnInit() {
  	this.findAllVendors();
  }
  
}
