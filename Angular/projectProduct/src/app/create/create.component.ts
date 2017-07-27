import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './../product';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnDestroy {
  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.observedProducts.subscribe( (products) => {
      this.products = products;
    })
  }
  addProduct() {

     this.products.push(this.newProduct);
     this._productService.updateProducts(this.products);
     this.newProduct = new Product();
     this._router.navigate(['/products'])
  }


  ngOnDestroy() {
    
  }


}
