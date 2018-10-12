import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users$: Object;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }
}
