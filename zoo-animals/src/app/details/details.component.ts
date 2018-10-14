import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  item$: Object;
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.item$ = params.id );
  }

  ngOnInit() {
    this.data.getItem().subscribe(
      data => this.item$ = data[this.route.params["value"].id - 1]
    );
  }

  addToCart(itemNumber, numberOfItem) {
    this.data.addToCartService(itemNumber, numberOfItem)
  }

}
