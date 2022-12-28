import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersmanagementComponent } from './ordersmanagement/ordersmanagement.component';

import { ProgressComponent } from './progress/progress.component';
import { CompletedComponent } from './completed/completed.component';
import { CancelpageComponent } from './cancelpage/cancelpage.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewprodComponent } from './newprod/newprod.component';
import { SubComponent } from './sub/sub.component';
import { ProfileComponent } from './profile/profile.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddproductsComponent } from './addproducts/addproducts.component';


const routes: Routes = [ 
  
  {path:'order',component:OrdersmanagementComponent  },
  {path:'progress',component:ProgressComponent},
  {path: 'complete',component:CompletedComponent },
  {path: 'cancel', component:CancelpageComponent},
  {path: 'submitted', component:SubmittedComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'new',component: NewprodComponent},
  {path: 'sub',component: SubComponent},
  {path: 'profile',component:ProfileComponent  },
  {path: 'add',component:AddtocartComponent},
  {path:'prod',component:AddproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
