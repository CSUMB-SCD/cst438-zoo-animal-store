import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  isLoggedIn
  itemsInCart
  countArray = []
  overrideForm = false // Skip form, useful for testing

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { }

  ngOnInit() {
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

  addToCart(itemNumber, numberOfItem) {
    this.data.addToCartService(itemNumber, numberOfItem)
    document.getElementById("cartNotification").style.display = "block";
  }

  signOut() {
    this.isLoggedIn = "No"
    this.data.clearCart()
    this.data.changeMessage("No")
  }

  reviewClicked(values) {
    // values in values:
    // first, last, email, address, cardNumber, securityCode, expirationMonth, expirationYear
    var errors = false

    for (var i = 0, len = values.length; i < len; i++) {
      document.getElementsByTagName('input')[i].style.border = "1px solid #ccc"
    }

    for (var j = 0, len = values.length; j < len; j++) {
      if (values[j] == "") {
        document.getElementsByTagName('input')[j].style.border = "3px solid red"
        errors = true
      }
    }

    if (errors && !this.overrideForm) {
      document.getElementById("errorText").style.display = "block";
    }
    else {
      document.getElementById("errorText").style.display = "none";
      this.data.checkoutInfo = values
      this.router.navigate(['/review']);
    }

  }

}
