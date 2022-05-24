import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/data-service/cartService.Service'

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})


export class CartPageComponent implements OnInit {
  cartTotal: number = 0
  cartProductsList: any = []
  constructor(public CartProducts: CartService) { }

  ngOnInit() {
    this.CartProducts.currentCartTotal.subscribe(total => this.cartTotal = total)
    this.CartProducts.currentProducts
      .subscribe(products => this.cartProductsList = products)
  }

  decreaseQuantity(id) {
    let index = this.cartProductsList.findIndex(product => product.id == id)
    if (index > -1) {
      this.cartProductsList[index].quantity = --this.cartProductsList[index].quantity
      if (this.cartProductsList[index].quantity == 0) {
        this.cartProductsList.splice(index, 1)
      }
      else {
        this.cartProductsList[index].rate = this.cartProductsList[index].rate - this.cartProductsList[index].price
      }

      this.cartTotal = 0
      for (let i = 0; i < this.cartProductsList.length; i++) {
        this.cartTotal = this.cartTotal + this.cartProductsList[i].rate
      }
    }

    this.CartProducts.cartTotal(this.cartTotal, this.cartProductsList)
  }

  increaseQuantity(id) {
    let index = this.cartProductsList.findIndex(product => product.id == id)
    if (index > -1) {
      this.cartProductsList[index].quantity = 1 + this.cartProductsList[index].quantity
      this.cartProductsList[index].rate = this.cartProductsList[index].rate + this.cartProductsList[index].price

      this.cartTotal = 0
      for (let i = 0; i < this.cartProductsList.length; i++) {
        this.cartTotal = this.cartTotal + this.cartProductsList[i].rate
      }
    }
    this.CartProducts.cartTotal(this.cartTotal, this.cartProductsList)
  }

}
