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

  getTotal() {
    var total = 0
    this.itemsInCart.forEach((value, key) => {
      total += key.price * value[0]
    });
    return total
  }

  getTax(){
    var total = this.getTotal()
    var tax = total * 0.09
    return tax
  }

  getGrandTotal(){
    var total = this.getTotal()
    var tax = this.getTax()
    var nT = total + tax
    return nT.toFixed(2)
  }

  signOut() {
    this.isLoggedIn = "No"
    this.data.clearCart()
    this.data.changeMessage("No")
  }
}
