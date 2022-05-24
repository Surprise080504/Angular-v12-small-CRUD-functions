import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { BuyPageComponent } from './components/buy-page/buy-page.component';

import { BaseService } from './core/http-services/baseService.service'
import { CartService } from './core/data-service/cartService.Service'

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    CartPageComponent,
    BuyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BaseService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
