import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnDestroy {
  subscription: Subscription;
  products: any[] = [];

  constructor(private _productService: ProductService) {
    this.subscription = this._productService.observedProducts.subscribe(
      (products) => this.products = products,
      (err) => {},
      () => {}
    )
  }
  annihilate (index) {
    this.products.splice(index, 1)
    this._productService.updateProducts(this.products);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
