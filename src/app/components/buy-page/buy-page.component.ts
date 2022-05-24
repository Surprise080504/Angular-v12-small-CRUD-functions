import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/data-service/cartService.Service'

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {
  cartTotal: number = 0
  cartProductsList: any = []
  constructor(public CartProducts: CartService) { }

  ngOnInit() {
    this.CartProducts.currentCartTotal.subscribe(total => this.cartTotal = total)
    this.CartProducts.currentProducts
      .subscribe(products => this.cartProductsList = products)
  }

}
