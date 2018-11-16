import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isLoggedIn
  item$
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.data.currentStatus.subscribe(message => this.isLoggedIn = message);
    this.route.params.subscribe( params => this.item$ = params.id)
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.data.getItem(this.item$).subscribe(
      data => this.item$ = data 
    )
    document.getElementById("cartNotification").style.display = "none";
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
