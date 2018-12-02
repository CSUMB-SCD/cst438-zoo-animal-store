import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  items$: Object;
  isLoggedIn;

  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getItems().subscribe(data => this.items$ = data);
    this.data.currentStatus.subscribe(message => this.isLoggedIn = message)
  }

  signOut() {
    this.isLoggedIn = "No"
    this.data.clearCart()
    this.data.changeMessage("No")
  }

  addToCart(itemNumber, numberOfItem) {
    this.data.addToCartService(itemNumber, numberOfItem)
    if(itemNumber.itemNumber == 1)
      document.getElementById("cartNotification_1").style.display = "block";
      setTimeout(function(){document.getElementById("cartNotification_1").style.display = "none";},2000);
    
    if(itemNumber.itemNumber == 2){
      document.getElementById("cartNotification_2").style.display = "block"; 
      setTimeout(function(){document.getElementById("cartNotification_2").style.display = "none";},2000);
    }
    if(itemNumber.itemNumber == 3){
      document.getElementById("cartNotification_3").style.display = "block";
      setTimeout(function(){document.getElementById("cartNotification_3").style.display = "none";},2000); 
    }
    if(itemNumber.itemNumber == 4){
      document.getElementById("cartNotification_4").style.display = "block"; 
      setTimeout(function(){document.getElementById("cartNotification_4").style.display = "none";},2000);
    }
    if(itemNumber.itemNumber == 5){
      document.getElementById("cartNotification_5").style.display = "block"; 
      setTimeout(function(){document.getElementById("cartNotification_5").style.display = "none";},2000);
    }
    if(itemNumber.itemNumber == 6){
      document.getElementById("cartNotification_6").style.display = "block"; 
      setTimeout(function(){document.getElementById("cartNotification_6").style.display = "none";},2000);
    }
    if(itemNumber.itemNumber == 7){
      document.getElementById("cartNotification_7").style.display = "block"; 
      setTimeout(function(){document.getElementById("cartNotification_7").style.display = "none";},2000);
    }
    if(itemNumber.itemNumber == 8){
      document.getElementById("cartNotification_8").style.display = "block"; 
      setTimeout(function(){document.getElementById("cartNotification_8").style.display = "none";},2000);
    }
    if(itemNumber.itemNumber == 9){
      document.getElementById("cartNotification_9").style.display = "block"; 
      setTimeout(function(){document.getElementById("cartNotification_9").style.display = "none";},2000);
    }
    if(itemNumber.itemNumber == 10){
      document.getElementById("cartNotification_10").style.display = "block"; 
      setTimeout(function(){document.getElementById("cartNotification_10").style.display = "none";},2000);
    }
    if(itemNumber.itemNumber == 11){
      document.getElementById("cartNotification_11").style.display = "block";
      setTimeout(function(){document.getElementById("cartNotification_11").style.display = "none";},2000); 
    }
    
  }

  
}