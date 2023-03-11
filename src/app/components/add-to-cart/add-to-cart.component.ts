import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartServiceService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
      quantity: 1
    }
  }

  ngOnInit(): void {

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  increaseQuantity(product: Product): Product {
    product.quantity += 1;
    return product;
  }

  decreaseQuantity(product: Product): Product {
    product.quantity -= 1;
    return product;
  }

}
