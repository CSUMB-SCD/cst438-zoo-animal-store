import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('../assets/users.json')
  }

  getItems() {
    return this.http.get('../assets/items.json')
  }

  getItem(itemName) {
    return this.http.get('../assets/items.json'+itemName)
  }

}
