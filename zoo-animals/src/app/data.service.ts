import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { getCreationMode } from '@angular/core/src/render3/instructions';

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

  // functions to return JSON
  getUsers() { return this.http.get('../assets/users.json') }
  getItems() { return this.http.get('../assets/items.json') }
  getItem() { return this.http.get('../assets/items.json') }

  // attempt to store cross page hash map for the shopping cart
  private itemsInCart = new Map<number,number>();
  getCart() {
    return this.itemsInCart
  }
  addToCartService(itemNumber, numberOfItem) {
    this.itemsInCart.set(itemNumber,numberOfItem)
  }

}