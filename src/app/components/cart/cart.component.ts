import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { OrderService } from 'src/app/services/order.service';
import { Product } from 'src/app/model/product';
import { Order } from 'src/app/model/order';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  order: Order[] = [];
  amount: number = 0;

  constructor(private cartService: CartServiceService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.order = this.orderService.getOrders();
    this.computeTotal();
  }

  computeTotal(): void {
    this.amount = 0;
    for (let product of this.cart) {
      if (product.quantity >= 0) {
        this.amount += product.price * product.quantity;
      }
    }
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cart = this.cart.filter(prod => prod !== product);
    this.computeTotal();

    alert(`${product.name} has been removed from the cart.`);
  }

  onSubmit(value: any) {
    this.router.navigate(['/checkout']);
  }
}
