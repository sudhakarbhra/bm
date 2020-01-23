import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { Screen2Component } from './screen2/screen2.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule, 
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        MatTableModule
    ],
    declarations: [Screen2Component, LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, UsersComponent, ProductsComponent, VendorsComponent, ReportsComponent, ProfileComponent, ]

})
export class LayoutModule { }
