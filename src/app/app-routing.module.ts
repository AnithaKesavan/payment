import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
  {
    path: 'card',
    component: PaymentComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
