import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order: Order[] = [];
  cart: Product[] = [];

  constructor(
    private orderService: OrderService, private cartService: CartServiceService
  ) { }

  ngOnInit(): void {
    this.order = this.orderService.getOrders();
    this.cart = this.cartService.getCart();
    this.cartService.clearCart();
  }

}
