import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {
  product: Product[] = [];

  constructor() { }

  showInfo(): Product[] {
    return this.product;
  }

  addInfo(product: Product) {
    for (let prod of this.product) {
      if (prod === product) {
        return;
      }
    }
    this.product.push(product);
  }

  clearInfo(): void {
    this.product = [];
  }
}
