import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: any[] = [];
  item: any;
  index: number;


  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _router: Router) {
    this.subscription = this._productService.observedProducts.subscribe(
      (products) => this.products = products,
      (err) => {},
      () => {}
    )

    this._route.params.subscribe((param)=>{
      this.item = this.products[param.id];
      this.index = param.id
    })
  }

  annihilate () {
    this.products.splice(this.index, 1);
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products'])
  }
  updateProduct() {
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
