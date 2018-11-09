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

}