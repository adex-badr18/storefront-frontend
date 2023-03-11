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
  amount: number = 0;
  creditRegex: RegExp = /^\d+$/;

  constructor(private cartService: CartServiceService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.computeTotal();
  }

  userForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    creditcard: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern(this.creditRegex),
    ]),
  });

  getControl(name: any): AbstractControl | null {
    return this.userForm.get(name);
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
  }

  onSubmit() {
    // this.submitted = true;
    // console.log(this.submitted);
    if (this.userForm.invalid) {
      return;
    }
    let orders: Order = {
      amount: this.amount,
      fullName: this.userForm.value.fullName as string,
      products: this.cart
    };
    this.orderService.addOrder(orders);

    this.router.navigate(['/checkout']);
  }
}
