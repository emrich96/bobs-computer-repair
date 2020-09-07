/**
 * Title: app-routing.component.ts
 * Author: Emily Richter
 * Date: 6 September 2020
 * Description: Routing module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderFormComponent } from './order-form/order-form.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: OrderFormComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
