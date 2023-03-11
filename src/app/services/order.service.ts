import { Injectable } from '@angular/core';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order[] = [];

  constructor() { }

  addOrder(order: Order): void {
    this.order = [];
    this.order.push(order);
  }

  getOrders(): Order[] {
    return this.order;
  }
}
