import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  // Customers Methods
  getCustomers() {
    return this._http.get('/api/getCustomers').map(data=>data.json()).toPromise();
  }
  addCustomer(newCustomer) {
    return this._http.post('/api/addCustomer', newCustomer).map(data=>data.json()).toPromise();
  }
  delCustomer(cust){
    return this._http.get('/api/delCustomer/'+cust).map(data => data.json()).toPromise();
  }

  // Product Methods
  addProduct(newProduct) {
    return this._http.post('/api/addProduct', newProduct).map(data => data.json()).toPromise();
  }
  getProds() {
    return this._http.get('/api/getProductList').map(data=>data.json()).toPromise();
  }

  // Order Methods
  getOrders(){

    return this._http.get('/api/getOrders').map(data=>data.json()).toPromise();
  }
  addOrder(newOrder) {
    return this._http.post('/api/addOrder', newOrder).map(data =>data.json()).toPromise()
  }
}
