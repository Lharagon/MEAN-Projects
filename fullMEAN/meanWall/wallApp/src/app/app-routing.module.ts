import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent },
  {path: 'messages', pathMatch: 'full', component: WallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
