import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ProductService } from "./../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: any = {name: '', img: '', description: '', quantity: 1};
  productList: any[] = [];
  constructor(private _titleService: Title, private _productService: ProductService) { }


  ngOnInit() {
    this._titleService.setTitle('Products');
    this.getProds();
  }

  getProds() {
    this._productService.getProds()
    .then((data) => {this.productList = data.reverse()})
    .catch( () => console.log('Problem adding product'))
  }

  addProduct() {
    this._productService.addProduct(this.product)
    .then((data) => {this.productList = data.reverse()})
    .catch( () => console.log('Problem adding product'))
    this.product = {name: '', img: '', description: '', quantity: 1}
  }

}
