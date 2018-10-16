import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  isLoggedIn;
  itemsInCart;
  items$;
  ids = []
  countArray = []

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getItems().subscribe(data => this.items$ = data);
    this.data.currentStatus.subscribe(message => this.isLoggedIn = message);
    this.itemsInCart = this.data.getCart();
    this.countArray = Array.from(this.itemsInCart.keys());
  }

  getGrandTotal() {
    var total = 0
    this.itemsInCart.forEach((key, value) => {
      total += value.price * key
    });
    return total
  }
}