import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', children: [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'products/edit/:id', component: EditComponent },
    { path: 'products/new', component: CreateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
