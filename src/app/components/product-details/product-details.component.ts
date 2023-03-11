import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductInfoService } from 'src/app/services/product-info.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product[] = [];

  constructor(
    private cartService: CartServiceService,
    private productInfoService: ProductInfoService) { }

  ngOnInit(): void {
    this.product = this.productInfoService.showInfo();
  }

  clearInfo() {
    this.productInfoService.clearInfo();
    this.product = [];
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart.`);
  }

}
