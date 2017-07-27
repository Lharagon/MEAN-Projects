import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../product'
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  subscription: Subscription;
  products  = [
    new Product(1, 'DSLR Camera', 1499.99),
    new Product(2, 'iLaptop', 1299.99)
  ]
  constructor(private _productService: ProductService) {
    this._productService.updateProducts(this.products);
    this._productService.observedProducts.subscribe(
      products => this.products = products,
      (err) => {},
      () => {}
    )
  }

  ngOnInit() {
  }

}
