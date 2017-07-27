import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer: any = {name: ''}
  customerList: any[] = [];
  error: string = ''

  constructor(private _productService: ProductService) { }
  ngOnInit() {
    this.getCust()
  }

  getCust() {
    this._productService.getCustomers()
    .then((data) => this.customerList = data.reverse())
    .catch( (data) => {console.log('Could not get current customerList on init', data)})
  }

  addCustomer() {
    this.error = '';
    this._productService.addCustomer(this.customer)
    .then( (data) => {this.customerList.unshift(data); this.customer.name = '';})
    .catch( () => {this.error = 'User already exists!'; this.customer.name = '';})
  }

  deleteCustomer(cust) {
    this._productService.delCustomer(cust)
    .then((data) =>  this.customerList = data.reverse())
    .catch( (data) => {console.log('Could not get current customerList on init', data)})
  }

  onDestroy() {
    this.error = '';
  }
}
