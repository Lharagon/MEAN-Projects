
import { Product } from './product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class ProductService {
  constructor() { }
  observedProducts = new BehaviorSubject(null);

  updateProducts(products: Array<Product>) {
    this.observedProducts.next(products);
  }
}
