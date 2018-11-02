import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReviewComponent } from './review/review.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
