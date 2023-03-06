import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { }

  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/data.json');
  }
}
