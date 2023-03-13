import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  @Output() checkoutInfo = new EventEmitter();
  @Input() amount: number = 0;
  cart: Product[] = [];
  creditRegex: RegExp = /^\d+$/;

  constructor(
    private orderService: OrderService,
    private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
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

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    let orders: Order = {
      amount: this.amount,
      fullName: this.userForm.value.fullName as string,
      products: this.cart
    };
    this.orderService.addOrder(orders);

    this.checkoutInfo.emit(this.userForm.value);
  }

}
