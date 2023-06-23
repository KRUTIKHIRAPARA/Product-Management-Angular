import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './accounting/dashboard/dashboard.component';
import { ProductComponent } from './accounting/product/product.component';
import { PurchaseComponent } from './accounting/purchase/purchase.component';
import { StockComponent } from './accounting/stock/stock.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'purchase',
    component:PurchaseComponent
  },
  {
    path:'stock',
    component:StockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
