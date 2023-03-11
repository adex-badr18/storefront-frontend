import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {
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

}
