import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject('No');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getUsers() {
    return this.http.get('../assets/users.json')
  }

  getItems() {
    return this.http.get('../assets/items.json')
  }

  getItem() {
    return this.http.get('../assets/items.json')
  }
}