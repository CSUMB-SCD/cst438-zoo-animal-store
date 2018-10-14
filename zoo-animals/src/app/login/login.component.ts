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

  signedIn = "No"

  onSubmit(username, password) {
    let i = 0
    let size = 0
    let success = false

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
      this.signedIn = "Yes"
      this.newMessage(this.signedIn)
      document.getElementById("errorText").style.display = "none";
      this.router.navigate(['/items']);
    }
    else {
      this.signedIn = "No";
      this.newMessage(this.signedIn)
      document.getElementById("errorText").style.display = "block";
    }
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users$ = data);
    this.data.currentStatus.subscribe(message => this.signedIn = message);
  }

  newMessage(changeStatus) {
    this.data.changeMessage(changeStatus)
  }

  signOut() {
    this.signedIn = "No"
    this.newMessage(this.signedIn)
  }
}