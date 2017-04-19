import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  onClick(userName, password) {
    console.log(userName+','+password)
  }

  constructor() { }

  ngOnInit() {
  }

}
