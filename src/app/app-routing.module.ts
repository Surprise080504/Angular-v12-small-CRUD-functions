import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemsComponent } from './components/list-items/list-items.component'
import { CartPageComponent } from './components/cart-page/cart-page.component'
import { BuyPageComponent } from './components/buy-page/buy-page.component'

const routes: Routes = [
  {
    path: '',
    component: ListItemsComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'buy',
    component: BuyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
