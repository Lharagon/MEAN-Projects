import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ProductService } from "./../product.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customerList: any[] = [];
  productList: any[] = [];
  orderList: any[] = []
  order: any = {exCustomer: "", quantity: "", product: ""}
  constructor(private _titleService: Title,  private _productService: ProductService) { }

  ngOnInit() {
    this._titleService.setTitle('Orders');
    this.getCust();
    this.getProds();
    this.getOrders();
  }

  getCust() {
    this._productService.getCustomers()
    .then((data) => this.customerList = data.reverse())
    .catch( (data) => {console.log('Could not get current customerList on init', data)})
  }

  getProds() {
    this._productService.getProds()
    .then((data) => {this.productList = data.reverse()})
    .catch( () => console.log('Problem adding product'))
  }

  getOrders() {
    this._productService.getOrders()
    .then((data) => {this.orderList = data.reverse(); console.log(data)})
    .catch( () => console.log('Problem grabbing the orders on init'))
  }

  addOrder() {
    this._productService.addOrder(this.order)
    .then((a) => {this.getOrders()})
    .catch( () => console.log('There was a problem adding the order'));
    this.order = {exCustomer: "", quantity: "", product: ""}
  }


}
