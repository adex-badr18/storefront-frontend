import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = 'Top deals';
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      // add quantity to each product
      for (let i = 0; i < data.length; i++) {
        const product = data[i];
        product['quantity'] = 1;
      }

      this.products = data;
    })
  }
}
