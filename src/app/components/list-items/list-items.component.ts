import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/http-services/productService.service';
import { CartService } from '../../core/data-service/cartService.Service'
import 'bootstrap';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  productsList: object = []
  cartList: any = []
  sum: number = 0
  cartTotal: number = 0
  constructor(private products: ProductService, public cart: CartService) { }

  ngOnInit() {
    this.products.getproducts().subscribe(res => { this.productsList = res})
    this.cart.currentCartTotal.subscribe(total => this.cartTotal = total)
    this.cart.currentProducts
      .subscribe(products => this.cartList = products)
  }


  AddProductToCart(product) {
    product['quantity'] = 1
    product['rate'] = product.price
    
    let index = this.cartList.findIndex(cartProduct => cartProduct.id == product.id)
    if (index > -1) {
      console.log('here')
      this.cartList[index]['quantity'] = product['quantity'] + this.cartList[index]['quantity']
      this.cartList[index]['rate'] = product.price + this.cartList[index]['rate']
      console.log(this.cartList)
    }
    else {
      this.cartList.push(product)
    }

    this.cartTotal = 0
    for (let i = 0; i < this.cartList.length; i++) {
      this.cartTotal = this.cartTotal + this.cartList[i].rate
    }
    this.cart.cartTotal(this.cartTotal, this.cartList)
  }
}
