import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
  // functions to return JSON
  //getUsers() { return this.http.get('../assets/users.json') }
  //getItems() { return this.http.get('../assets/items.json') }
  //getItem(itemNumber) { return this.http.get('../assets/items.json') }

  getUsers() { return this.http.get('https://team12-zoo-shop-spring.herokuapp.com/users') }
  getItems() { return this.http.get('https://team12-zoo-shop-spring.herokuapp.com/') }
  getItem(itemNumber) { return this.http.get('https://team12-zoo-shop-spring.herokuapp.com/'+itemNumber) }

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