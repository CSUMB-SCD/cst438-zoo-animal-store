import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {
  isLoggedIn
  itemsInCart
  countArray = []
  purchaseIsValid = false
  notEnoughCredit = false
  itemsOverStock = []

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.isLoggedIn = message);
    this.itemsInCart = this.data.getCart();
    this.countArray = Array.from(this.itemsInCart.keys());

    if (this.data.grandTotal != null && this.data.credits!= null) {
      if (this.data.grandTotal <= this.data.credits) {
        this.purchaseIsValid = true
      }
      else {
        this.notEnoughCredit = true
      }

      let itemNumber
      let quantityWanted
      let quantityInStock

      this.itemsInCart.forEach((value: [number,number], key: Object) => {
        let values = Object.values(key).map(key => key);
        itemNumber = value[1]
        quantityWanted = value[0]
        quantityInStock = values[5]
        let name = values[2]
        if (quantityWanted > quantityInStock) {
          this.purchaseIsValid = false
          this.itemsOverStock.push("You wanted " + quantityWanted + " of the item '" + name + "' but there are only " + quantityInStock + " in stock")
        }
      });

      if (this.purchaseIsValid) {
        this.data.clearCart()
        this.data.putQuantity(itemNumber, quantityInStock-quantityWanted).subscribe()
        this.data.putCredit(this.data.username, this.data.credits-this.data.grandTotal).subscribe()
      }
    }
  }

  getGrandTotal() {
    var total = 0
    this.itemsInCart.forEach((key, value) => {
      total += value.price * key
    });
    return total
  }

  signOut() {
    this.isLoggedIn = "No"
    this.data.clearCart()
    this.data.changeMessage("No")
  }
}