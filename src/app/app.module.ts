import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersmanagementComponent } from './ordersmanagement/ordersmanagement.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ProgressComponent } from './progress/progress.component';
import { CompletedComponent } from './completed/completed.component';
import { CancelpageComponent } from './cancelpage/cancelpage.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { NewprodComponent } from './newprod/newprod.component';
import { SubComponent } from './sub/sub.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
@NgModule({
  declarations: [
    AppComponent,
    OrdersmanagementComponent,
  
    ProgressComponent,
    CompletedComponent,
    CancelpageComponent,
    SubmittedComponent,
    HomeComponent,
    AboutComponent,
    NewprodComponent,
    SubComponent,
    ProfileComponent,
    AddtocartComponent,
    AddproductsComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatRadioModule,
    Ng2SearchPipeModule,
    NgbModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
