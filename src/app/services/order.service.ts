import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order[] = [];
  products: Product[] = [];
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: '',
    quantity: 0
  }

  constructor() { }

  addOrder(order: Order): void {
    this.order = [];
    this.order.push(order);
  }

  getOrders(): Order[] {
    return this.order;
  }
}
