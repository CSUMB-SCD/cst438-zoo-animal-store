import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users$: Object;

  constructor(private data: DataService, private router: Router) {}

  isLoggedIn = "No"

  onSubmit(username, password) {
    let i = 0
    let size = 0
    let success = false // make sure to change

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
      this.isLoggedIn = "Yes"
      this.newMessage(this.isLoggedIn)
      document.getElementById("errorText").style.display = "none";
      this.router.navigate(['/items']);
    }
    else {
      this.isLoggedIn = "No";
      this.newMessage(this.isLoggedIn)
      document.getElementById("errorText").style.display = "block";
    }
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users$ = data);
    this.data.currentStatus.subscribe(message => this.isLoggedIn = message);
  }

  newMessage(changeStatus) {
    this.data.changeMessage(changeStatus)
  }

  signOut() {
    this.isLoggedIn = "No"
    this.data.clearCart()
    this.newMessage(this.isLoggedIn)
  }
}