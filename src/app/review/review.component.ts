import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  isLoggedIn
  itemsInCart
  countArray = []
  checkoutInfo = []
  total

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.data.currentStatus.subscribe(message => this.isLoggedIn = message)
    this.itemsInCart = this.data.getCart()
    this.countArray = Array.from(this.itemsInCart.keys())
    this.checkoutInfo = this.data.checkoutInfo
    this.total = this.getGrandTotal()
  }

  getGrandTotal() {
    var total = 0
    this.itemsInCart.forEach((value, key) => {
      total += key.price * value[0]
    });
    this.data.grandTotal = total
    return total
  }

  signOut() {
    this.isLoggedIn = "No"
    this.data.clearCart()
    this.data.changeMessage("No")
  }
}
