import { Injectable } from '@angular/core';
import { ProductList } from '../mockup/product-mockup';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return Promise.resolve(ProductList);
  }
  getProduct(id: string) {
    return Promise.resolve(ProductList[0]);
  }
}
