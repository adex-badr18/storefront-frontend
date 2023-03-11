import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: Product[] = [];

  constructor() { }

  addToCart(product: Product): Product[] | undefined {
    for (let p of this.cart) {
      if (p.id === product.id) {
        return;
      }
    }
    this.cart.push(product);
    return this.cart;
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(product: Product): Product[] {
    this.cart = this.cart.filter(prod => prod.id !== product.id);
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
