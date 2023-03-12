import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: '',
    quantity: 0
  };

  constructor() { }

  showInfo(): Product {
    return this.product;
  }

  addInfo(product: Product) {
    this.product = product;
  }
}
