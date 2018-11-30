import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // keeps track of the signed in status ("Yes" or "No")
  private loginStatus = new BehaviorSubject('No');
  currentStatus = this.loginStatus.asObservable();
  changeMessage(status: string) {
    this.loginStatus.next(status)
  }

  // functions for checkout information
  checkoutInfo = []
  username
  credits
  grandTotal

  getUsers() { return this.http.get('https://team12-zoo-shop-spring.herokuapp.com/users') }
  getItems() { return this.http.get('https://team12-zoo-shop-spring.herokuapp.com/') }
  getItem(itemNumber) { return this.http.get('https://team12-zoo-shop-spring.herokuapp.com/'+itemNumber) }

  // functions to PUT
  putQuantity(itemNumber, inStock) { 
    const putHeader = new HttpHeaders().append('Content-Type' , 'application/json');
    return this.http.put(
      'https://team12-zoo-shop-spring.herokuapp.com/put/'+itemNumber+'/'+inStock, 
      JSON.stringify({}), 
      {headers: putHeader})
  }
  putCredit(username, credits) { 
    const putHeader = new HttpHeaders().append('Content-Type' , 'application/json');
    return this.http.put(
      'https://team12-zoo-shop-spring.herokuapp.com/credit/'+username+'/'+credits, 
      JSON.stringify({}), 
      {headers: putHeader})
  }

  // store cross page map for the shopping cart
  private itemsInCart = new Map<Object,[number, number]>()

  getCart() {
    return this.itemsInCart
  }
  
  addToCartService(item, numberOfItem) {  
    this.itemsInCart.forEach((value, key) => {
      if (item.itemNumber == value[1]) {
        this.itemsInCart.delete(key)
      }
    });
    this.itemsInCart.set(item, [numberOfItem, item.itemNumber])
  }
  removeItemFromCart(itemToRemove){
    this.itemsInCart.delete(itemToRemove)
  }
  clearCart(){
    this.itemsInCart = new Map<Object,[number, number]>()
  }

}