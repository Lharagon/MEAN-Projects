import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customerList: any[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getCust();
  }
  getCust() {
    this._productService.getCustomers()
    .then((data) => this.customerList = data.reverse() )
    .catch( (data) => {console.log('Could not get current customerList on init', data)})
  }

}
