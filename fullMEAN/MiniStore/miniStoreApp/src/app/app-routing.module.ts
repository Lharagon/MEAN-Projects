import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'products', pathMatch: 'full',component: ProductsComponent },
  { path: 'orders', pathMatch: 'full',component: OrdersComponent },
  { path: 'customers', pathMatch: 'full',component: CustomersComponent},
  { path: 'settings', pathMatch: 'full',component: SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
