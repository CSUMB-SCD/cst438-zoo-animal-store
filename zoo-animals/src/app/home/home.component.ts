import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home.component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  
  images = [1, 2, 3].map(() => `../assets/carouselImages`);
  
  constructor() { }

  ngOnInit() {
  }

}
