import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {

    private cartProductsTotal = new BehaviorSubject(0);
    private cartProducts = new BehaviorSubject([]);
    currentCartTotal = this.cartProductsTotal.asObservable();
    currentProducts = this.cartProducts.asObservable();

    constructor() { }

    cartTotal(total: number, products: any) {
        this.cartProductsTotal.next(total)
        this.cartProducts.next(products)
    }

}