import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    isLoggedIn
    itemsInCart
    countArray = []
  
    constructor(private route: ActivatedRoute, private data: DataService) { }
  
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
  }
