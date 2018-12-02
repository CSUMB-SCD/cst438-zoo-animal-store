import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  isLoggedIn
  itemsInCart
  items$
  countArray = []

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.data.getItems().subscribe(data => this.items$ = data)
    this.data.currentStatus.subscribe(message => this.isLoggedIn = message)
    this.itemsInCart = this.data.getCart()
    this.countArray = Array.from(this.itemsInCart.keys())
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


  remove(itemToRemove) {
    this.data.removeItemFromCart(itemToRemove)
    this.countArray = Array.from(this.itemsInCart.keys())
  }

  signOut() {
    this.isLoggedIn = "No"
    this.data.clearCart()
    this.data.changeMessage("No")
  }

  addToCart(itemNumber, numberOfItem) {
    this.data.addToCartService(itemNumber, numberOfItem)
  }
}