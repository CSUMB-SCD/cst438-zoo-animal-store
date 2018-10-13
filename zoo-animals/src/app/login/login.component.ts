import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users$: Object;

  constructor(private data: DataService) {}

  onSubmit(username, password) {
    let i = 0
    let size = 0
    let success = false;
    for (let user in this.users$) {
      size++;
    }
    while (i < size) {
      if (this.users$[i].username == username && this.users$[i].password == password) {
        success = true;
      }
      i++;
    }
    if (success) {
      console.log("Logged In!");
      document.getElementById("errorText").style.display = "none";
    }
    else {
      console.log("Login Failed");
      document.getElementById("errorText").style.display = "block";
    }
  }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }
}