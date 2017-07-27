import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoComponent } from './san-jo/san-jo.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { BurbankComponent } from './burbank/burbank.component';


const routes: Routes = [
  { path: '',children: [
    { path: 'seattle', component: SeattleComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'seattle', component: SeattleComponent },
    { path: 'washington', component: WashingtonComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'san_jose', component: SanJoComponent },
    { path: 'chicago', component: ChicagoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
